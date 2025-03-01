import React from "react";
import { Paper, Box, Stack, Divider, Grid } from "@mui/material";
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
        containerType: "inline-size",
      }}
    >
      {/* Trip type and passenger selection */}
      <Box
        sx={{
          p: 2,
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

      {/* Main inputs section - all on same line */}
      <Grid container spacing={2} sx={{ px: 2, pb: 2 }}>
        {/* Location inputs - takes 60% of space */}
        <Grid item xs={12} md={7}>
          <LocationInputs
            from={from}
            to={to}
            setFrom={setFrom}
            setTo={setTo}
            handleSwapLocations={handleSwapLocations}
          />
        </Grid>

        {/* Date inputs - takes 40% of space */}
        <Grid item xs={12} md={5}>
          <DateInputs tripType={tripType} />
        </Grid>
      </Grid>

      {/* Search button */}
      <Box sx={{ px: 2, pb: 3, mt: 2 }}>
        <SearchButton />
      </Box>
    </Paper>
  );
}
