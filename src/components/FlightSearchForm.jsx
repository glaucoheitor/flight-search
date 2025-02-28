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
      }}
    >
      {/* Trip type and passenger selection */}
      <Box sx={{ p: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <TripTypeSelector
            tripType={tripType}
            handleTripTypeChange={handleTripTypeChange}
          />

          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "rgba(255, 255, 255, 0.2)" }}
          />

          <PassengerSelector
            passengers={passengers}
            handlePassengerChange={handlePassengerChange}
          />

          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "rgba(255, 255, 255, 0.2)" }}
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
