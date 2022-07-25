import React from "react";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import Image from "mui-image";

import SearchCard from "../components/SearchCard";

export default function Home() {
  return (
    <Container disableGutters>
      <Box
        sx={{
          maxWidth: "1248px",
          position: "relative",
          margin: "0 auto 40px",
          "@media screen and (max-width: 768px)": {
            mb: 0,
          },
        }}
      >
        <Box
          pb={2}
          sx={{
            maxWidth: "1248px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src="//www.gstatic.com/travel-frontend/animation/hero/flights_3.svg"
            errorIcon={null}
            wrapperStyle={{
              height: "calc(100vw*0.233)",
              position: "relative",
              maxHeight: "272px",
              minHeight: "128px",
            }}
            sx={{
              height: "calc(100vw*0.239)",
              display: "block",
              left: "50%",
              maxHeight: "299px",
              minHeight: "136px",
              position: "absolute",
              top: "0",
              transform: "translate3d(-50%,0,0)",
            }}
          />
          <Typography
            align="center"
            variant="h4"
            component="h2"
            sx={{
              position: "absolute",
              display: "block",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            Flights
          </Typography>
        </Box>
      </Box>
      <SearchCard />
    </Container>
  );
}
