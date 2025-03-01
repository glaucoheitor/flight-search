import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { CssBaseline } from "@mui/material";
import { CssVarsProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

import theme from "./theme/theme";

// React 19 requires createRoot
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Using CssVarsProvider for better theme support (new in MUI v6) */}
    <CssVarsProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <App />
      </LocalizationProvider>
    </CssVarsProvider>
  </React.StrictMode>
);
