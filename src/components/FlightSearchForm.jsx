import React from "react";
import { Paper, Box, Stack, Divider } from "@mui/material";
import TripTypeSelector from "./TripTypeSelector";
import PassengerSelector from "./PassengerSelector";
import CabinClassSelector from "./CabinClassSelector";
import LocationInputs from "./LocationInputs";
import DateInputs from "./DateInputs";
import SearchButton from "./SearchButton";

export default function FlightSearchForm({
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
    <Paper
      elevation={3}
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "rgba(33, 33, 33, 0.9)",
        color: "white",
        // Using container query support in MUI v6 for responsive design
        containerType: "inline-size",
      }}
    >
      {/* Trip type and passenger selection */}
      <Box
        sx={{
          p: 2,
          // Using MUI v6 container queries
          "@container (max-width: 600px)": {
            flexDirection: "column",
            alignItems: "stretch",
          },
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            // Container queries for responsive layout
            "@container (max-width: 600px)": {
              flexDirection: "column",
              alignItems: "stretch",
              gap: 2,
            },
          }}
        >
          <TripTypeSelector
            tripType={tripType}
            handleTripTypeChange={handleTripTypeChange}
          />

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.2)",
              "@container (max-width: 600px)": {
                display: "none",
              },
            }}
          />

          <PassengerSelector
            passengers={passengers}
            handlePassengerChange={handlePassengerChange}
          />

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.2)",
              "@container (max-width: 600px)": {
                display: "none",
              },
            }}
          />

          <CabinClassSelector
            cabinClass={cabinClass}
            handleCabinClassChange={handleCabinClassChange}
          />
        </Stack>
      </Box>

      {/* Destination inputs */}
      <Box sx={{ px: 2, pb: 2 }}>
        <LocationInputs
          from={from}
          to={to}
          setFrom={setFrom}
          setTo={setTo}
          handleSwapLocations={handleSwapLocations}
        />
      </Box>

      {/* Date selection */}
      <Box sx={{ px: 2, pb: 2 }}>
        <DateInputs tripType={tripType} />
      </Box>

      {/* Search button */}
      <Box sx={{ px: 2, pb: 3 }}>
        <SearchButton />
      </Box>
    </Paper>
  );
}
