import { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import FlightSearchForm from "./components/FlightSearchForm";

export default function App() {
  // State for the form fields
  const [tripType, setTripType] = useState("roundTrip");
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState("economy");
  const [from, setFrom] = useState("Santa Ana");
  const [to, setTo] = useState("");

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
          <FlightSearchForm
            tripType={tripType}
            handleTripTypeChange={handleTripTypeChange}
            passengers={passengers}
            handlePassengerChange={handlePassengerChange}
            cabinClass={cabinClass}
            handleCabinClassChange={handleCabinClassChange}
            from={from}
            to={to}
            setFrom={setFrom}
            setTo={setTo}
            handleSwapLocations={handleSwapLocations}
          />
        </Container>
      </Box>
    </Box>
  );
}
