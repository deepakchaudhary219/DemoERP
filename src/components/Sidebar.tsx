import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import BrightnessAutoRoundedIcon from "@mui/icons-material/BrightnessAutoRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SecurityIcon from "@mui/icons-material/Security";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ReceiptIcon from "@mui/icons-material/Receipt";
import TimelineIcon from "@mui/icons-material/Timeline";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ERP from "../../public/ERP.svg";
import ColorSchemeToggle from "./ColorSchemeToggle";
import { closeSidebar } from "../../utils";
import logo1 from '../assets/companyLogo/logo1.jpeg'
import logo2 from '../assets/companyLogo/logo2.jpeg'
import MyProfile from "./MyProfile";
import { useDispatch } from 'react-redux';
import { setShowTypography } from "../visibilitySlice";



function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "0.2s ease",
          "& > *": {
            overflow: "hidden",
          },
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function Sidebar() {

  const [index, setIndex] = React.useState(0);
  const dispatch = useDispatch();
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const handleClickRefresh = () => {
    setButtonClicked(true);
  };
  React.useEffect(() => {
    if (buttonClicked) {
      window.location.reload();
    }
  }, [buttonClicked]);

  const handleClick = () => {

    dispatch(setShowTypography(true));
  
  };


  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <IconButton variant="plain" color="primary" size="sm">
          {/* <BrightnessAutoRoundedIcon /> */}
          <img
            src={ERP}
            alt=""
            style={{
              aspectRatio: 1 / 1,
              width: "2rem",
              objectFit: "contain",
            }}
          />
        </IconButton>
        <Typography level="title-lg">ERP</Typography>
        <ColorSchemeToggle variant="plain" sx={{ ml: "auto" }} />
      </Box>
      <Input
        size="sm"
        startDecorator={<SearchRoundedIcon />}
        placeholder="Search"
      />
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,

            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              width: '3px', // Change this to adjust the width of the scrollbar
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 0 5px 48cae4',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#9e9e9e', // Change this to adjust the color of the scrollbar
              borderRadius: '20px',

            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            },
            '&::after': {
              content: '""',
              display: 'block',
              height: '100px', // Change this to adjust the height of the scrollable area
            },
            scrollBehavior: 'smooth', // Makes the scrolling smooth

          }}
        >
          <ListItem>
            <ListItemButton
              selected={index === 0}
              color={index === 0 ? 'primary' : undefined}
              onTouchMove={() => setIndex(0)}
              onClickCapture={() => setIndex(0)}
              onClick={handleClickRefresh}
            >
              <SecurityIcon />
              <ListItemContent>
                <Typography level="title-sm">Security Module</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              selected={index === 1}
              color={index === 1 ? 'primary' : undefined}
              onTouchMove={() => setIndex(1)}
              onClickCapture={() => setIndex(1)}
              
            >
              <PersonRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">User Setting</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              role="menuitem"
              component="a"
              selected={index === 2}
              color={index === 2 ? 'primary' : undefined}
              onTouchMove={() => setIndex(2)}
              onClickCapture={() => setIndex(2)}
            >
              <AccountBalanceWalletIcon />
              <ListItemContent>
                <Typography level="title-sm">Account Module</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>


          <ListItem nested>
            <Toggler
              defaultExpanded
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}
                selected={index === 3}
                color={index === 3 ? 'primary' : undefined}
                onTouchMove={() => setIndex(3)}
                onClickCapture={() => setIndex(3)}
                >
                  <EqualizerIcon />
                  <ListItemContent>
                    <Typography level="title-sm">Inventory</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={{ transform: open ? "rotate(180deg)" : "none" }}
                  />
                </ListItemButton>
              )}
            >

              <List>
                <ListItem nested>
                  <Toggler
                    defaultExpanded
                    renderToggle={({ open, setOpen }) => (
                      <ListItemButton onClick={() => setOpen(!open)}
                      selected={index === 4}
                      color={index === 4 ? 'primary' : undefined}
                      onTouchMove={() => setIndex(4)}
                      onClickCapture={() => setIndex(4)}
                      >
                        <AutoAwesomeMosaicIcon />
                        <ListItemContent>
                          <Typography>Master</Typography>
                        </ListItemContent>
                        <KeyboardArrowDownIcon
                          sx={{ transform: open ? "rotate(180deg)" : "none" }}
                        />
                      </ListItemButton>
                    )}
                  >
                    <List sx={{ gap: 0.5 }}>
                      <ListItem sx={{ mt: 0.5 }}>
                        <ListItemButton
                                      selected={index === 5}
                                      color={index === 5 ? 'primary' : undefined}
                                      onTouchMove={() => setIndex(5)}
                                      onClickCapture={() => setIndex(5)}
                        >Unit Of Measurement</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton
                         selected={index === 6}
                         color={index === 6 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(6)}
                         onClickCapture={() => setIndex(6)}
                        >Item Group</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton
                         selected={index === 7}
                         color={index === 7 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(7)}
                         onClickCapture={() => setIndex(7)}
                        >Custom Head</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton
                         selected={index === 8}
                         color={index === 8 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(8)}
                         onClickCapture={() => setIndex(8)}
                        >Item Material</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton
                         selected={index === 9}
                         color={index === 9 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(9)}
                         onClickCapture={() => setIndex(9)}
                        >Product Category</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton
                         selected={index === 10}
                         color={index === 10 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(10)}
                         onClickCapture={() => setIndex(10)}
                         
                        >Item Classification</ListItemButton>
                        
                      </ListItem>
                      <ListItem>
                        <ListItemButton
                         selected={index === 11}
                         color={index === 11 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(11)}
                         onClickCapture={() => setIndex(11)}
                         
                        >Item Finish</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton
                         selected={index === 12}
                         color={index === 12 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(12)}
                         onClickCapture={() => setIndex(12)}
                        >Item Grade</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton 
                         selected={index === 13}
                         color={index === 13 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(13)}
                         onClickCapture={() => setIndex(13)}
                         onClick={handleClick}
                        >Item Defination
                        </ListItemButton>
                      </ListItem>
                          {/* { <MyProfile showProfile={showProfile} />}  */}
                      <ListItem>
                        <ListItemButton
                         selected={index === 14}
                         color={index === 14 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(14)}
                         onClickCapture={() => setIndex(14)}
                        >Update Item Defination</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton
                         selected={index === 15}
                         color={index === 15 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(15)}
                         onClickCapture={() => setIndex(15)}

                        >Item Price List</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton
                         selected={index === 16}
                         color={index === 16 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(16)}
                         onClickCapture={() => setIndex(16)}
                        >Packing Master</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton
                         selected={index === 17}
                         color={index === 17 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(17)}
                         onClickCapture={() => setIndex(17)}
                        >Work Center</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton
                         selected={index === 18}
                         color={index === 18 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(18)}
                         onClickCapture={() => setIndex(18)}
                        >Check List</ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton
                         selected={index === 20}
                         color={index === 20 ? 'primary' : undefined}
                         onTouchMove={() => setIndex(20)}
                         onClickCapture={() => setIndex(20)}
                        >Work Center</ListItemButton>
                      </ListItem>
                    </List>
                  </Toggler>
                </ListItem>
              </List>

            </Toggler>
          </ListItem>

          {/* <ListItem>
            <ListItemButton>
              <TimelineIcon />
              Material Requirement
            </ListItemButton>
          </ListItem> */}
          <ListItem>
            <ListItemButton
             selected={index === 21}
             color={index === 21 ? 'primary' : undefined}
             onTouchMove={() => setIndex(21)}
             onClickCapture={() => setIndex(21)}
            >
              <TimelineIcon />
              <ListItemContent>
                <Typography level="title-sm">Material Requirement</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
             selected={index === 22}
             color={index === 22 ? 'primary' : undefined}
             onTouchMove={() => setIndex(22)}
             onClickCapture={() => setIndex(22)}
            
            >
              <BeenhereIcon />
              <ListItemContent>
                <Typography level="title-sm">Quality Management</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
            
            selected={index === 23}
            color={index === 23 ? 'primary' : undefined}
            onTouchMove={() => setIndex(23)}
            onClickCapture={() => setIndex(23)}
           >
              <ReceiptIcon />
              <ListItemContent>
                <Typography level="title-sm">
                  Bill Of Material Module
                </Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          {/* <ListItem>
            <ListItemButton>
              <BeenhereIcon />
              Quality Management
            </ListItemButton>
          </ListItem> */}
          {/* <ListItem>
            <ListItemButton>
              <ReceiptIcon />
              Bill Of Material Module
            </ListItemButton>
          </ListItem> */}
        </List>
        {/* <List
          size="sm"
          sx={{
            mt: 'auto',
            flexGrow: 0,
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
            '--List-gap': '8px',
            mb: 2,
          }}
        >
          <ListItem>
            <ListItemButton>
              <SupportRoundedIcon />
              Purchase & 
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <SettingsRoundedIcon />
              Settings
            </ListItemButton>
          </ListItem>
        </List> */}

         <Card
          invertedColors
          variant="solid"
          color="primary"
          size="sm"
          sx={{ boxShadow: 'none' }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography level="title-md">Develop by </Typography>
            <IconButton size="sm">
              {/* <CloseRoundedIcon /> */}
             </IconButton>
          </Stack>
          
          <Typography level="body-lg" fontWeight={600}>
          Sahasrara Metatach
          </Typography> 
      
          {/* <LinearProgress variant="soft" value={80} determinate sx={{ my: 1 }} /> */}
          <Button size="sm" variant="soft">
            Visite Site
          </Button>
        </Card>
      </Box>
     
    </Sheet>
  );
}
function setIsProfileUpdated(arg0: boolean): any {
  throw new Error("Function not implemented.");
}

