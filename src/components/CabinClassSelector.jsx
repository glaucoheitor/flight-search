import React from "react";
import { Box, Select, MenuItem } from "@mui/material";

export default function CabinClassSelector({
  cabinClass,
  handleCabinClassChange,
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", minWidth: 120 }}>
      <Select
        value={cabinClass}
        onChange={handleCabinClassChange}
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
      >
        <MenuItem value="economy">Economy</MenuItem>
        <MenuItem value="premiumEconomy">Premium economy</MenuItem>
        <MenuItem value="business">Business class</MenuItem>
        <MenuItem value="firstClass">First class</MenuItem>
      </Select>
    </Box>
  );
}
