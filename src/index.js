import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ['"Google Sans"', "Roboto", "Arial", "sans-serif"].join(","),
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
