import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function App() {
  // State for the form fields
  const [tripType, setTripType] = React.useState("roundTrip");
  const [passengers, setPassengers] = React.useState(1);
  const [cabinClass, setCabinClass] = React.useState("economy");
  const [from, setFrom] = React.useState("Santa Ana");
  const [to, setTo] = React.useState("");

  // Handle trip type change
  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  // Handle cabin class change
  const handleCabinClassChange = (event) => {
    setCabinClass(event.target.value);
  };

  // Handle passenger count change
  const handlePassengerChange = (event) => {
    setPassengers(event.target.value);
  };

  // Handle origin swap with destination
  const handleSwapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#1E1E1E",
        backgroundImage: "url('/flight-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Hero section with mountains and heading */}
      <Box
        sx={{
          pt: 10,
          pb: 15,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Flights
        </Typography>

        {/* Search container */}
        <Container maxWidth="md">
          <Paper
            elevation={3}
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              bgcolor: "rgba(33, 33, 33, 0.9)",
              color: "white",
            }}
          >
            {/* Trip type and passenger selection */}
            <Box sx={{ p: 2 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{ display: "flex", alignItems: "center", minWidth: 140 }}
                >
                  <Select
                    value={tripType}
                    onChange={handleTripTypeChange}
                    sx={{
                      color: "white",
                      ".MuiOutlinedInput-notchedOutline": { border: "none" },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      ".MuiSvgIcon-root": { color: "white" },
                    }}
                    displayEmpty
                    startAdornment={
                      <InputAdornment position="start">
                        <SwapHorizIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    }
                  >
                    <MenuItem value="roundTrip">Round trip</MenuItem>
                    <MenuItem value="oneWay">One way</MenuItem>
                    <MenuItem value="multiCity">Multi-city</MenuItem>
                  </Select>
                </Box>

                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ bgcolor: "rgba(255, 255, 255, 0.2)" }}
                />

                <Box
                  sx={{ display: "flex", alignItems: "center", minWidth: 100 }}
                >
                  <Select
                    value={passengers}
                    onChange={handlePassengerChange}
                    sx={{
                      color: "white",
                      ".MuiOutlinedInput-notchedOutline": { border: "none" },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      ".MuiSvgIcon-root": { color: "white" },
                    }}
                    displayEmpty
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    }
                  >
                    <MenuItem value={1}>1 passenger</MenuItem>
                    <MenuItem value={2}>2 passengers</MenuItem>
                    <MenuItem value={3}>3 passengers</MenuItem>
                    <MenuItem value={4}>4 passengers</MenuItem>
                    <MenuItem value={5}>5+ passengers</MenuItem>
                  </Select>
                </Box>

                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ bgcolor: "rgba(255, 255, 255, 0.2)" }}
                />

                <Box
                  sx={{ display: "flex", alignItems: "center", minWidth: 120 }}
                >
                  <Select
                    value={cabinClass}
                    onChange={handleCabinClassChange}
                    sx={{
                      color: "white",
                      ".MuiOutlinedInput-notchedOutline": { border: "none" },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      ".MuiSvgIcon-root": { color: "white" },
                    }}
                    displayEmpty
                  >
                    <MenuItem value="economy">Economy</MenuItem>
                    <MenuItem value="premiumEconomy">Premium economy</MenuItem>
                    <MenuItem value="business">Business class</MenuItem>
                    <MenuItem value="firstClass">First class</MenuItem>
                  </Select>
                </Box>
              </Stack>
            </Box>

            {/* Destination inputs */}
            <Box sx={{ px: 2, pb: 2 }}>
              <Stack direction="row" spacing={2}>
                <TextField
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Where from?"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlightTakeoffIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    ),
                    sx: {
                      color: "white",
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiInputBase-input::placeholder": {
                      color: "rgba(255, 255, 255, 0.7)",
                    },
                  }}
                />

                <IconButton
                  onClick={handleSwapLocations}
                  sx={{ color: "white" }}
                >
                  <SwapHorizIcon />
                </IconButton>

                <TextField
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Where to?"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlightLandIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    ),
                    sx: {
                      color: "white",
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiInputBase-input::placeholder": {
                      color: "rgba(255, 255, 255, 0.7)",
                    },
                  }}
                />
              </Stack>
            </Box>

            {/* Date selection */}
            <Box sx={{ px: 2, pb: 2 }}>
              <Stack direction="row" spacing={2}>
                <TextField
                  placeholder="Departure"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonthIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    ),
                    sx: {
                      color: "white",
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiInputBase-input::placeholder": {
                      color: "rgba(255, 255, 255, 0.7)",
                    },
                  }}
                />

                {tripType === "roundTrip" && (
                  <TextField
                    placeholder="Return"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarMonthIcon sx={{ color: "white" }} />
                        </InputAdornment>
                      ),
                      sx: {
                        color: "white",
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "rgba(255, 255, 255, 0.3)",
                        },
                      },
                    }}
                    sx={{
                      "& .MuiInputBase-input::placeholder": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                    }}
                  />
                )}
              </Stack>
            </Box>

            {/* Search button */}
            <Box
              sx={{ px: 2, pb: 3, display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                size="large"
                sx={{
                  bgcolor: "#4285F4",
                  borderRadius: 6,
                  px: 4,
                  "&:hover": {
                    bgcolor: "#3367D6",
                  },
                }}
              >
                Explore
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
