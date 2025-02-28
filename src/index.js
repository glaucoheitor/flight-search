import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { CssBaseline } from "@mui/material";
import { createTheme, CssVarsProvider } from "@mui/material/styles";

// Create theme with new MUI v6 features
const theme = createTheme({
  typography: {
    fontFamily: ['"Google Sans"', "Roboto", "Arial", "sans-serif"].join(","),
  },
  // Added example of the new theme.applyStyles() utility
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          // Base styles for light mode
          borderRadius: 8,
          ...theme.applyStyles("dark", {
            // Specific styles for dark mode
            boxShadow: "0 0 8px rgba(255, 255, 255, 0.2)",
          }),
        }),
      },
    },
  },
});

// React 19 requires createRoot
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Using CssVarsProvider for better theme support (new in MUI v6) */}
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
