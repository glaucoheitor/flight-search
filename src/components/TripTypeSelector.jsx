import React from "react";
import { Box, InputAdornment, Select, MenuItem } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export default function TripTypeSelector({ tripType, handleTripTypeChange }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", minWidth: 140 }}>
      <Select
        value={tripType}
        onChange={handleTripTypeChange}
        sx={{
          color: "white",
          // Updated styling for MUI v6
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
  );
}
