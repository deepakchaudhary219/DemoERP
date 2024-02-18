import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyledEngineProvider } from "@mui/joy/styles";
import "./index.css";
import { Provider } from 'react-redux';
import store from './Store.ts'; 

ReactDOM.createRoot(document.getElementById("root")!).render(


  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
      <App />
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
  
);
