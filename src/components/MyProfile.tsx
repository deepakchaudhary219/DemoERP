import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


import EditorToolbar from './EditorToolbar';
import { MenuItem } from '@mui/joy';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import logo from '../assets/company_logo.jpeg'
import EqualizerIcon from "@mui/icons-material/Equalizer";

import { useSelector } from 'react-redux';


 const MyProfile = () => {

  const showTypography = useSelector((state: any) => state.visibility.showTypography);



  
  return (

<>

    {
      !showTypography && <Box sx={{ flex: 1, width: '100%', display:'flex', justifyContent:'center', alignItems:'center', columnGap:2 }}>
        
        <Typography level='h1' fontWeight='400' textColor={'primary.900'} sx={{
        

        }}>Welcome To Sahasrara</Typography>
      </Box>
    }
    {showTypography && 
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon sx={{ fontSize: 'sm' }} />}
            sx={{ pl: 0 }}
          >
            <Link
              underline="none"
              color="neutral"
              href="#some-link"
              aria-label="Home"
            >
              <EqualizerIcon/>
            </Link>
            <Link
              underline="hover"
              color="neutral"
              href="#some-link"
              fontSize={12}
              fontWeight={500}
            >
              Inventory Management
            </Link>
            <Link
              underline="hover"
              color="neutral"
              href="#some-link"
              fontSize={12}
              fontWeight={500}
            >
              Master
            </Link>
            <Link
              underline="hover"
              color="neutral"
              href="#some-link"
              fontSize={12}
              fontWeight={500}
            >
              Item Defination
            </Link>

            <Typography color="primary" fontWeight={500} fontSize={12}>
              General
            </Typography>
          </Breadcrumbs>
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            Item Defination
          </Typography>
        </Box>
        <Tabs
          defaultValue={0}
          sx={{
            bgcolor: 'transparent',
          }}
        >
          <TabList
            tabFlex={1}
            size="sm"
            sx={{
              pl: { xs: 0, md: 4 },
              justifyContent: 'left',
              [`&& .${tabClasses.root}`]: {
                fontWeight: '600',
                flex: 'initial',
                color: 'text.tertiary',
                [`&.${tabClasses.selected}`]: {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  '&::after': {
                    height: '2px',
                    bgcolor: 'primary.500',
                  },
                },
              },
            }}
          >
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
              General
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
              Inventory 1
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={2}>
              Order
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={3}>
              Purchase
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={4}>
              Sales
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={5}>
              Attachment
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={6}>
              Check List
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={7}>
              QC
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={8}>
              Properties-2
            </Tab>
          </TabList>
        </Tabs>
      </Box>
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: 'lg',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        

        
        <Card>

          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >
           
            

            <Stack spacing={2} sx={{ flexGrow: 1 }}>

            

              <Stack spacing={1}>


              <Stack direction="row" spacing={2}>
              
              <div style={{
                width: '49%'
              }}>
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Category</FormLabel>
                  <Select
                    size="sm"
                    // startDecorator={<AccessTimeFilledRoundedIcon />}
                    defaultValue="1"
                  >
                    <Option value="1">

                      <Typography textColor="text.tertiary" ml={0.5}>
                        Finish Goods
                      </Typography>
                    </Option>
                    <Option value="2">

                      <Typography textColor="text.tertiary" ml={0.5}>
                        XYZ
                      </Typography>
                    </Option>
                    <Option value="3">

                      <Typography textColor="text.tertiary" ml={0.5}>
                        ABC
                      </Typography>
                    </Option>
                  </Select>
                </FormControl>
              </div>
              
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Item No</FormLabel>
                  <Input
                    size="sm"
                    type="text"
                    // startDecorator={<EmailRoundedIcon />}
                    placeholder="Item No"
                    defaultValue="ZO-2618"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl> 
                <Stack direction={'column'}>
                <Typography>{'\u00A0'}</Typography>
             <Button variant='soft' size='sm' >Same As</Button>
                </Stack>
             
            </Stack>


                <FormLabel>Customer Description</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="aphabhet.co" sx={{ flexGrow: 1 }} />

                </FormControl>
                <FormLabel>Supplier Description</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="abc-xyz" sx={{ flexGrow: 1 }} />

                </FormControl>
                <FormLabel>Custom Description</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="abc alpha" sx={{ flexGrow: 1 }} />

                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <div style={{
                  width: '23.8%'
                }}>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Unit</FormLabel>
                    <Select
                      size="sm"
                      // startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Pcs
                        </Typography>
                      </Option>
                      <Option value="2">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Pcs2 { }
                        </Typography>
                      </Option>
                      <Option value="3">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Pcs3
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div>
                <div style={{
                  width: '23.8%'
                }}>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Finish</FormLabel>
                    <Select
                      size="sm"
                      // startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          N.A
                        </Typography>
                      </Option>
                      <Option value="2">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          XYZ
                        </Typography>
                      </Option>
                      <Option value="3">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          ABC
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Grade</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    // startDecorator={<EmailRoundedIcon />}
                    placeholder="N.A"
                    // defaultValue="siriwatk@test.com"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>

                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Standard</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    // startDecorator={<EmailRoundedIcon />}
                    placeholder="Standard"
                    // defaultValue="siriwatk@test.com"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Alternative Code</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    // startDecorator={<EmailRoundedIcon />}
                    placeholder="Alternative Code"
                    // defaultValue="siriwatk@test.com"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
              </Stack>
              {/* <div>
                <CountrySelector />
              </div> */}
              {/* <div>
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Timezone</FormLabel>
                  <Select
                    size="sm"
                    startDecorator={<AccessTimeFilledRoundedIcon />}
                    defaultValue="1"
                  >
                    <Option value="1">
                      Indochina Time (Bangkok){' '}
                      <Typography textColor="text.tertiary" ml={0.5}>
                        — GMT+07:00
                      </Typography>
                    </Option>
                    <Option value="2">
                      Indochina Time (Ho Chi Minh City){' '}
                      <Typography textColor="text.tertiary" ml={0.5}>
                        — GMT+07:00
                      </Typography>
                    </Option>
                  </Select>
                </FormControl>
              </div> */}

              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Group</FormLabel>
                <Input
                  size="sm"
                  type="text"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="N.A"
                  defaultValue="Sanitary"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Material Type</FormLabel>
                <Input
                  size="sm"
                  type="text"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="N.A"
                  defaultValue="BRASS"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>

              <Stack direction="row" spacing={2}>
                {/* <div style={{
                  width: '23.8%'
                }}>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Unit</FormLabel>
                    <Select
                      size="sm"
                      // startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Pcs
                        </Typography>
                      </Option>
                      <Option value="2">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Pcs2 { }
                        </Typography>
                      </Option>
                      <Option value="3">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Pcs3
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div> */}


                <div>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Custom Heading</FormLabel>
                    <Input
                      size="sm"
                      type="text"
                      // startDecorator={<EmailRoundedIcon />}
                      placeholder="N.A"
                      defaultValue="00001"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </div>

                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>{'\u00A0'}</FormLabel>
                  <Input
                    size="sm"
                    type="text"
                    // startDecorator={<EmailRoundedIcon />}
                    placeholder="N.A"
                    defaultValue="N.A"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>

                <div style={{
                  width: '23.8%'
                }}>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Status</FormLabel>
                    <Select
                      size="sm"
                      // startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Free
                        </Typography>
                      </Option>
                      <Option value="2">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Not Free
                        </Typography>
                      </Option>
                      <Option value="3">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          No Free
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div>
              </Stack>
              <Stack direction="row" spacing={2}>







                <div style={{
                  width: '50%'
                }}>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Classification</FormLabel>
                    <Select
                      size="sm"
                      // startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Veneto
                        </Typography>
                      </Option>
                      <Option value="2">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Veneto2
                        </Typography>
                      </Option>
                      <Option value="3">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Veneto3
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div>
                <div style={{
                  width: '50%'
                }}>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Sub Classification</FormLabel>
                    <Select
                      size="sm"
                      // startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Free
                        </Typography>
                      </Option>
                      <Option value="2">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Not Free
                        </Typography>
                      </Option>
                      <Option value="3">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          No Free
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div>
              </Stack>
              <Stack direction="row" spacing={2}>
                {/* <div style={{
                  width: '23.8%'
                }}>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Unit</FormLabel>
                    <Select
                      size="sm"
                      // startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Pcs
                        </Typography>
                      </Option>
                      <Option value="2">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Pcs2 { }
                        </Typography>
                      </Option>
                      <Option value="3">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Pcs3
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div> */}






                <div style={{
                  width: '50%'
                }}>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Product Category</FormLabel>
                    <Select
                      size="sm"
                      // startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          N.A
                        </Typography>
                      </Option>
                      <Option value="2">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          abc
                        </Typography>
                      </Option>
                      <Option value="3">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          xyz
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div>
                <div style={{
                  width: '50%'
                }}>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Sub Category</FormLabel>
                    <Select
                      size="sm"
                      // startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Zozon
                        </Typography>
                      </Option>
                      <Option value="2">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          abc
                        </Typography>
                      </Option>
                      <Option value="3">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          abc
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div>
              </Stack>
              <Stack direction="row" spacing={2}>
              
                <div style={{
                  width: '25%'
                }}>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Type</FormLabel>
                    <Select
                      size="sm"
                      // startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Bought Out
                        </Typography>
                      </Option>
                      <Option value="2">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Sold Out
                        </Typography>
                      </Option>
                      <Option value="3">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Not Bought Out
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div>
                
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Current Revision</FormLabel>
                    <Input
                      size="sm"
                      type="text"
                      // startDecorator={<EmailRoundedIcon />}
                      placeholder="N.A"
                      defaultValue="00001"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                

                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Current Drawing</FormLabel>
                  <Input
                    size="sm"
                    type="text"
                    // startDecorator={<EmailRoundedIcon />}
                    placeholder="N.A"
                    defaultValue=""
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
              
                <div style={{
                  width: '49%'
                }}>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Drawing Status</FormLabel>
                    <Select
                      size="sm"
                      // startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Master
                        </Typography>
                      </Option>
                      <Option value="2">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Master2
                        </Typography>
                      </Option>
                      <Option value="3">

                        <Typography textColor="text.tertiary" ml={0.5}>
                          Master2
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div>
                
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Short Name</FormLabel>
                    <Input
                      size="sm"
                      type="text"
                      // startDecorator={<EmailRoundedIcon />}
                      placeholder="Short Name"
                      defaultValue=""
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                

               
              </Stack>
                <Stack direction="row" spacing={2} sx={{justifyContent:'center'}}>
                <Button variant='soft' color='danger'><CloseRoundedIcon/></Button>
                <Button variant='solid'>Save</Button>
                <Button variant='soft' color='success'><RefreshRoundedIcon/></Button>
                </Stack>
  
            </Stack>
          </Stack>
          {/* <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={108}
                  sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    bgcolor: 'background.body',
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    left: 85,
                    top: 180,
                    boxShadow: 'sm',
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
              </Stack>
              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <Input size="sm" placeholder="First name" />
                  <Input size="sm" placeholder="Last name" />
                </FormControl>
              </Stack>
            </Stack>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Input size="sm" defaultValue="UI Developer" />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Email</FormLabel>
              <Input
                size="sm"
                type="email"
                startDecorator={<EmailRoundedIcon />}
                placeholder="email"
                defaultValue="siriwatk@test.com"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <div>
              <CountrySelector />
            </div>
            <div>
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel>Timezone</FormLabel>
                <Select
                  size="sm"
                  startDecorator={<AccessTimeFilledRoundedIcon />}
                  defaultValue="1"
                >
                  <Option value="1">
                    Indochina Time (Bangkok){' '}
                    <Typography textColor="text.tertiary" ml={0.5}>
                      — GMT+07:00
                    </Typography>
                  </Option>
                  <Option value="2">
                    Indochina Time (Ho Chi Minh City){' '}
                    <Typography textColor="text.tertiary" ml={0.5}>
                      — GMT+07:00
                    </Typography>
                  </Option>
                </Select>
              </FormControl>
            </div>
          </Stack> */}
          {/* <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow> */}
        </Card> 
 
        {/* <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Bio</Typography>
            <Typography level="body-sm">
              Write a short introduction to be displayed on your profile
            </Typography>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            <EditorToolbar />
            <Textarea
              size="sm"
              minRows={4}
              sx={{ mt: 1.5 }}
              defaultValue="I'm a software developer based in Bangkok, Thailand. My goal is to solve UI problems with neat CSS without using too much JavaScript."
            />
            <FormHelperText sx={{ mt: 0.75, fontSize: 'xs' }}>
              275 characters left
            </FormHelperText>
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card> */}
        {/* <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Portfolio projects</Typography>
            <Typography level="body-sm">
              Share a few snippets of your work.
            </Typography>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            <DropZone />
            <FileUpload
              icon={<InsertDriveFileRoundedIcon />}
              fileName="Tech design requirements.pdf"
              fileSize="200 kB"
              progress={100}
            />
            <FileUpload
              icon={<VideocamRoundedIcon />}
              fileName="Dashboard prototype recording.mp4"
              fileSize="16 MB"
              progress={40}
            />
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card> */}
      </Stack>
    </Box>
      }
     </>
  );
}
export default MyProfile;