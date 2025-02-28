import React from "react";
import { Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchButton() {
  // In MUI v6, we can use the Button component directly with loading functionality
  // instead of LoadingButton from the lab
  const [loading, setLoading] = React.useState(false);

  const handleSearch = () => {
    setLoading(true);
    // Simulate a search delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        size="large"
        loading={loading}
        onClick={handleSearch}
        sx={{
          bgcolor: "#4285F4",
          borderRadius: 6,
          px: 4,
          "&:hover": {
            bgcolor: "#3367D6",
          },
        }}
      >
        {loading ? "Searching..." : "Explore"}
      </Button>
    </Box>
  );
}
