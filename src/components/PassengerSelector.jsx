import React from "react";
import { Box, InputAdornment, Select, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function PassengerSelector({
  passengers,
  handlePassengerChange,
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", minWidth: 100 }}>
      <Select
        value={passengers}
        onChange={handlePassengerChange}
        sx={{
          color: "white",
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
            <PersonIcon sx={{ color: "white" }} />
          </InputAdornment>
        }
      >
        <MenuItem value={1}>1 passenger</MenuItem>
        <MenuItem value={2}>2 passengers</MenuItem>
        <MenuItem value={3}>3 passengers</MenuItem>
        <MenuItem value={4}>4 passengers</MenuItem>
        <MenuItem value={5}>5+ passengers</MenuItem>
      </Select>
    </Box>
  );
}
