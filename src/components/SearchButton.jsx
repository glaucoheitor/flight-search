import React from "react";
import { Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchButton() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        size="large"
        sx={{
          bgcolor: "#4285F4",
          borderRadius: 6,
          px: 4,
          "&:hover": {
            bgcolor: "#3367D6",
          },
        }}
      >
        Explore
      </Button>
    </Box>
  );
}
