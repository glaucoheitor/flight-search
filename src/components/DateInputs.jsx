import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function DateInputs({ tripType }) {
  return (
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
  );
}
