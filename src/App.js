import { useState } from "react";
import { Box } from "@mui/material";
import FlightSearchSection from "./components/FlightSearchSection";

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
    setFrom(to);
    setTo(from);
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
      <FlightSearchSection
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
    </Box>
  );
}
