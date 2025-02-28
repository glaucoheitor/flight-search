import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "./HeroSection";
import FlightSearchForm from "./FlightSearchForm";

export default function FlightSearchSection({
  tripType,
  handleTripTypeChange,
  passengers,
  handlePassengerChange,
  cabinClass,
  handleCabinClassChange,
  from,
  to,
  setFrom,
  setTo,
  handleSwapLocations,
}) {
  return (
    <Box
      sx={{
        pt: 5,
        pb: 15,
        color: "white",
        textAlign: "center",
      }}
    >
      <HeroSection />

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
  );
}
