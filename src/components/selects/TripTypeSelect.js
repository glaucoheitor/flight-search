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

import {
  SyncAlt as SyncAltIcon,
  ArrowRightAlt as ArrowRightAltIcon,
  MultipleStop as MultipleStopIconv,
  Check as CheckIcon,
} from "@mui/icons-material";

export default function TripTypeSelect({ tripType, setTripType }) {
  return (
    <Select
      hiddenLabel
      disableUnderline
      variant="filled"
      size="small"
      id="tripType"
      value={tripType}
      onChange={(e) => setTripType(e.target.value)}
      autoWidth
      sx={{
        mr: 1,
        mt: 0.75,
        mb: 1,
        //height: "36px",
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
            {value === "oneway" && (
              <>
                <ArrowRightAltIcon
                  fontSize="small"
                  fontWeight={500}
                  sx={{
                    mr: 1.5,
                  }}
                />
                One way
              </>
            )}
            {value === "multi" && (
              <>
                <SyncAltIcon
                  fontSize="small"
                  fontWeight={500}
                  sx={{
                    mr: 1.5,
                  }}
                />
                Multi-city
              </>
            )}
          </Typography>
        );
      }}
    >
      <MenuItem value="round" key="round" selected={tripType === "round"}>
        <CheckIcon
          fontSize=".875rem"
          fontWeight={500}
          sx={{
            visibility: tripType === "round" ? "visible" : "hidden",
          }}
        />
        <Typography
          sx={{
            pl: 1,
            fontSize: ".875rem",
            letterSpacing: ".0107142857em",
            fontWeight: 500,
            textTransform: "none",
            textOverflow: "ellipsis",
          }}
        >
          Round Trip
        </Typography>
      </MenuItem>
      <MenuItem value="oneway" key="oneway" selected={tripType === "oneway"}>
        <CheckIcon
          fontSize=".875rem"
          fontWeight={500}
          sx={{
            visibility: tripType === "oneway" ? "visible" : "hidden",
          }}
        />
        <Typography
          sx={{
            pl: 1,
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
        <CheckIcon
          fontSize=".875rem"
          fontWeight={500}
          sx={{
            visibility: tripType === "multi" ? "visible" : "hidden",
          }}
        />
        <Typography
          sx={{
            pl: 1,
            fontSize: ".875rem",
            letterSpacing: ".0107142857em",
            fontWeight: 500,
            textTransform: "none",
            textOverflow: "ellipsis",
          }}
        >
          Multi-city
        </Typography>
      </MenuItem>
    </Select>
  );
}
