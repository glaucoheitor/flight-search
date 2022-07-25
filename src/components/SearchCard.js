import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
  TextField,
  SvgIcon,
} from "@mui/material";

import SyncAltIcon from "@mui/icons-material/SyncAlt";
import TripTypeSelect from "./selects/TripTypeSelect";

export default function SearchCard() {
  const [tripType, setTripType] = React.useState("round");
  const [passengers, setPassengers] = React.useState(1);
  const [classType, setClassType] = React.useState("economy");

  return (
    <Box>
      <Card
        sx={{
          //width: 343,
          maxWidth: "100%",
          borderRadius: "12px",
          px: 2,
          pb: 1.5,
          //boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
          //backgroundColor: "blue",
        }}
      >
        <Grid container spacing={0}>
          <TripTypeSelect tripType={tripType} setTripType={setTripType} />

          <Select
            hiddenLabel
            variant="filled"
            size="small"
            id="passengers"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            autoWidth
            sx={{
              fontSize: ".875rem",
              letterSpacing: ".0107142857em",
              fontWeight: 500,
              textTransform: "none",
              textOverflow: "ellipsis",
            }}
          >
            {Array.from({ length: 10 }, (v, i) => (
              <MenuItem key={`passengers-${i + 1}`} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>

          <Select
            hiddenLabel
            variant="filled"
            size="small"
            id="classType"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            autoWidth
            sx={{
              fontSize: ".875rem",
              letterSpacing: ".0107142857em",
              fontWeight: 500,
              textTransform: "none",
              textOverflow: "ellipsis",
            }}
          >
            <MenuItem value="economy">Economy</MenuItem>
            <MenuItem value="premium">Premium economny</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="First">First</MenuItem>
          </Select>
        </Grid>
        <Grid container spacing={0}>
          <Stack direction="row" spacing={2}>
            <TextField>TextField 1</TextField>
            <TextField>TextField 2</TextField>
            <TextField>TextField 3</TextField>
            <TextField>TextField 3</TextField>
          </Stack>
        </Grid>
      </Card>
    </Box>
  );
}
