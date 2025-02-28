import React from "react";
import { Box, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        pt: 10,
        pb: 5,
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Flights
      </Typography>
    </Box>
  );
}
