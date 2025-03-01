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
    // Date picker components customization
    MuiPickersDay: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.Mui-selected": {
            backgroundColor: "#4285F4",
            "&:hover": {
              backgroundColor: "#3367D6",
            },
          },
          "&:hover": {
            backgroundColor: "rgba(66, 133, 244, 0.1)",
          },
        },
        today: {
          border: "1px solid #4285F4",
        },
      },
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          width: "auto",
          backgroundColor: "#fff",
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
        },
        label: {
          fontWeight: "bold",
          fontSize: "1rem",
        },
        switchViewButton: {
          color: "#4285F4",
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        header: {
          justifyContent: "center",
        },
        weekContainer: {
          justifyContent: "center",
        },
      },
    },
  },
});

export default theme;
