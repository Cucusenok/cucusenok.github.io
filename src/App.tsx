import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {BaseBackground} from "./Components/Containers/BaseBackground";
import {Home} from "./Pages/Home";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

const theme = createTheme({

  components: {
  },

  palette: {
    primary: {
      main: '#ffffff',
    },

  },

  typography: {
    fontFamily: 'Sora',

    h1: {
      fontSize: "2.5rem",
      color: "white",
      fontWeight: "bold",
      padding: "0px",
      margin: "0px",
      lineHeight: "2.5rem"
    },
    h2: {
      fontSize: "2rem",
      lineHeight: "2rem",
      color: "white",
      fontWeight: "bold",
      padding: "0px",
      margin: "0px"
    },
    h4: {
      fontSize: "1rem",
      color: "white",
      fontWeight: "bold",
      padding: "0px",
      margin: "0px"
    },
    h5: {
      fontSize: "0.8rem",
      color: "white",
      fontWeight: "bold",
      padding: "0px",
      margin: "0px"
    },

  }
});


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <BaseBackground>
            <RouterProvider router={router} />
          </BaseBackground>
        </ThemeProvider>
    </div>
  );
}

export default App;
