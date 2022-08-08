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

export default function TripTypeSelect({ passengers, setPassengers }) {
  return (
    <Select
      hiddenLabel
      disableUnderline
      variant="filled"
      size="small"
      id="tripType"
      value={tripType}
      onChange={(e) => setPassengers(e.target.value)}
      autoWidth
      sx={{
        mr: 1,
        mt: 0.75,
        mb: 1,
        height: "36px",
        backgroundColor: "transparent",
      }}
      renderValue={(value) => {
        return (
          <Typography
            sx={{
              fontSize: ".875rem",
              letterSpacing: ".0107142857em",
              fontWeight: 500,
              textTransform: "none",
              textOverflow: "ellipsis",
              display: "flex",
            }}
          >
            {value === "round" && (
              <>
                <SyncAltIcon
                  fontSize="small"
                  fontWeight={500}
                  sx={{
                    mr: 1.5,
                  }}
                />
                Round trip
              </>
            )}
          </Typography>
        );
      }}
    >
      <MenuItem value="round" key="round" selected={tripType === "round"}>
        <SyncAltIcon fontSize=".875rem" fontWeight={500} />
      </MenuItem>
      <MenuItem value="oneway" key="oneway" selected={tripType === "oneway"}>
        <SyncAltIcon fontSize=".875rem" fontWeight={500} />
        <Typography
          sx={{
            fontSize: ".875rem",
            letterSpacing: ".0107142857em",
            fontWeight: 500,
            textTransform: "none",
            textOverflow: "ellipsis",
          }}
        >
          One way
        </Typography>
      </MenuItem>
      <MenuItem value="multi" key="multi" selected={tripType === "multi"}>
        Multi-city
      </MenuItem>

      {Array.from({ length: 10 }, (v, i) => (
        <MenuItem key={`passengers-${i + 1}`} value={i + 1}>
          {i + 1}
        </MenuItem>
      ))}
    </Select>
  );
}
