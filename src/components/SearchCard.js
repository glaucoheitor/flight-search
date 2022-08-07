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
  Input,
  SvgIcon,
  InputAdornment,
  ButtonBase,
} from "@mui/material";

import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

import TripTypeSelect from "./selects/TripTypeSelect";

import { alpha, styled } from "@mui/material/styles";

const TripToFromIcon = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  border: "1px solid #dadce0",
  borderRadius: "50%",
  boxSizing: "border-box",
  height: "36px",
  position: "absolute",
  top: "6px",
  width: "36px",
}));

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
          <Box
            sx={{
              flex: "1 1 388px",
              display: "flex",
              position: "relative",
              "&:before": {
                bottom: "9px",
                content: '""',
                position: "absolute",
                top: "9px",
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                flex: "1 1 100px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Input
                disableUnderline
                startAdornment={
                  <InputAdornment position="start">
                    <TripOriginIcon fontSize="small" />
                  </InputAdornment>
                }
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  backgroundClip: "border-box",
                  backgroundColor: "transparent",
                  border: "1px solid #dadce0",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                  color: "#3c4043",
                  outline: "none",
                  padding: "8px 16px",
                  pl: 2,
                  pr: 3.5,
                  width: "100%",
                  height: "48px",
                  fontSize: "16px",
                  appearance: "none",
                  "&:hover": {
                    borderColor: "#9aa0a6",
                  },
                }}
              >
                Input 1
              </Input>
              <TripToFromIcon
                sx={{
                  right: "-22px",
                }}
              />
            </Box>
            <Box>
              <ButtonBase
                disabled
                sx={{
                  color: "#3c4043",
                  height: "32px",
                  margin: "8px -12px",
                  padding: "4px",
                  width: "32px",
                  minWidth: "32px",
                  borderRadius: "50%",
                  transition: "transform 150ms ease 0ms",
                  //zIndex: -1,
                  fontSize: "24px",
                  display: "inline-block",
                  position: "relative",
                  boxSizing: "border-box",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fill: "currentColor",
                  textDecoration: "none",
                  cursor: "pointer",
                  "-webkit-user-select": "none",
                  zIndex: 1,
                  overflow: "visible",
                }}
              >
                <SwapHorizRoundedIcon width="24px" height="24px" />
              </ButtonBase>
            </Box>
            <Box
              sx={{
                flex: "1 1 100px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Input
                disableUnderline
                startAdornment={
                  <InputAdornment position="start">
                    <PlaceOutlinedIcon fontSize="small" />
                  </InputAdornment>
                }
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  backgroundClip: "border-box",
                  backgroundColor: "transparent",
                  border: "1px solid #dadce0",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                  color: "#3c4043",
                  outline: "none",
                  padding: "8px 16px",
                  pl: 2,
                  pr: 3.5,
                  width: "100%",
                  height: "48px",
                  fontSize: "16px",
                  appearance: "none",
                  "&:hover": {
                    borderColor: "#9aa0a6",
                  },
                }}
              >
                Input 2
              </Input>
              <TripToFromIcon
                sx={{
                  left: "-22px",
                }}
              />
            </Box>
          </Box>
          <Box>
            <Input>Input 3</Input>
            <Input>Input 3</Input>
          </Box>
        </Grid>
      </Card>
    </Box>
  );
}
