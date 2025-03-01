import React from "react";
import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export default function LocationInputs({
  from,
  to,
  setFrom,
  setTo,
  handleSwapLocations,
}) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <TextField
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="Where from?"
        fullWidth
        size="medium"
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
        sx={{ color: "white", mx: 0.5 }}
      >
        <SwapHorizIcon />
      </IconButton>

      <TextField
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="Where to?"
        fullWidth
        size="medium"
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
  );
}
