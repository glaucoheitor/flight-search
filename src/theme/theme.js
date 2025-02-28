import { extendTheme } from "@mui/material/styles";

// Create theme with new MUI v6 features
const theme = extendTheme({
  typography: {
    fontFamily: ['"Google Sans"', "Roboto", "Arial", "sans-serif"].join(","),
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#4285F4",
        },
        background: {
          default: "#ffffff",
          paper: "#f5f5f5",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#4285F4",
        },
        background: {
          default: "#1e1e1e",
          paper: "rgba(33, 33, 33, 0.9)",
        },
      },
    },
  },
  // Components with new theme.applyStyles() utility
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 6,
          transition: "background-color 0.3s",
          ...theme.applyStyles("dark", {
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
          }),
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.applyStyles("dark", {
            backgroundImage:
              "linear-gradient(rgba(33, 33, 33, 0.97), rgba(33, 33, 33, 0.95))",
          }),
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.applyStyles("dark", {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
          }),
        }),
      },
    },
  },
});

export default theme;
