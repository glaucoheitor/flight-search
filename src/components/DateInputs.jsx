import React, { useState } from "react";
import { Stack, InputAdornment, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { format } from "date-fns";

// Custom footer component for calendar to add the Done button
const CustomActionBar = ({ onAccept, onCancel }) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      padding={2}
      spacing={1}
      sx={{
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
        mt: 1,
      }}
    >
      <Button
        variant="contained"
        onClick={onAccept}
        sx={{
          bgcolor: "#4285F4",
          "&:hover": {
            bgcolor: "#3367D6",
          },
        }}
      >
        Done
      </Button>
    </Stack>
  );
};

export default function DateInputs({ tripType }) {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [openDeparture, setOpenDeparture] = useState(false);
  const [openReturn, setOpenReturn] = useState(false);

  // Custom day renderer for highlighting the selected range
  const renderDay = (day, _selectedDays, pickersDayProps) => {
    const isInRange =
      departureDate && returnDate && day >= departureDate && day <= returnDate;
    const isStartOrEnd =
      (departureDate && day.getTime() === departureDate.getTime()) ||
      (returnDate && day.getTime() === returnDate.getTime());

    return (
      <PickersDay
        {...pickersDayProps}
        disableMargin
        sx={{
          ...(isInRange && {
            backgroundColor: "rgba(66, 133, 244, 0.1)",
            borderRadius: 0,
          }),
          ...(isStartOrEnd && {
            "&.Mui-selected": {
              backgroundColor: "#4285F4",
              borderRadius: "50%",
              color: "white",
            },
          }),
        }}
      />
    );
  };

  const handleDepartureDateChange = (newDate) => {
    setDepartureDate(newDate);

    // If return date exists but is before the new departure date, reset it
    if (returnDate && newDate && returnDate < newDate) {
      setReturnDate(null);
    }

    // If return field is empty and we're in round trip mode, auto-open return picker
    if (tripType === "roundTrip" && !returnDate && newDate) {
      setTimeout(() => {
        setOpenDeparture(false);
        setOpenReturn(true);
      }, 400);
    }
  };

  const formatDisplayDate = (date) => {
    if (!date) return "";
    return format(date, "MMM d");
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ height: "100%", alignItems: "center" }}
    >
      <DatePicker
        value={departureDate}
        onChange={handleDepartureDateChange}
        open={openDeparture}
        onOpen={() => setOpenDeparture(true)}
        onClose={() => setOpenDeparture(false)}
        label=""
        slots={{
          day: renderDay,
          actionBar: CustomActionBar,
        }}
        slotProps={{
          textField: {
            placeholder: "Departure",
            fullWidth: true,
            size: "medium",
            value: formatDisplayDate(departureDate),
            onClick: () => setOpenDeparture(true),
            InputProps: {
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
              sx: {
                color: "white",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                },
              },
              readOnly: true,
            },
            sx: {
              "& .MuiInputBase-input": {
                color: "white",
                cursor: "pointer",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "rgba(255, 255, 255, 0.7)",
                opacity: 1,
              },
            },
          },
          desktopPaper: {
            sx: {
              borderRadius: 2,
              width: "auto",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              "& .MuiDialogContent-root": {
                display: "flex",
                flexDirection: "row",
                p: 2,
              },
            },
          },
          layout: {
            sx: {
              width: "auto",
              ".MuiPickersLayout-contentWrapper": {
                overflow: "visible",
              },
            },
          },
          day: {
            sx: {
              fontWeight: 400,
              fontSize: "0.875rem",
            },
          },
        }}
        dayOfWeekFormatter={(day) => day.charAt(0).toUpperCase()}
        showDaysOutsideCurrentMonth
        closeOnSelect={false}
        views={["day"]}
        calendars={2}
      />

      {tripType === "roundTrip" && (
        <DatePicker
          value={returnDate}
          onChange={(newDate) => setReturnDate(newDate)}
          open={openReturn}
          onOpen={() => setOpenReturn(true)}
          onClose={() => setOpenReturn(false)}
          label=""
          minDate={departureDate}
          slots={{
            day: renderDay,
            actionBar: CustomActionBar,
          }}
          slotProps={{
            textField: {
              placeholder: "Return",
              fullWidth: true,
              size: "medium",
              value: formatDisplayDate(returnDate),
              onClick: () => setOpenReturn(true),
              InputProps: {
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon sx={{ color: "white" }} />
                  </InputAdornment>
                ),
                sx: {
                  color: "white",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                  },
                },
                readOnly: true,
              },
              sx: {
                "& .MuiInputBase-input": {
                  color: "white",
                  cursor: "pointer",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(255, 255, 255, 0.7)",
                  opacity: 1,
                },
              },
            },
            desktopPaper: {
              sx: {
                borderRadius: 2,
                width: "auto",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                "& .MuiDialogContent-root": {
                  display: "flex",
                  flexDirection: "row",
                  p: 2,
                },
              },
            },
            layout: {
              sx: {
                width: "auto",
                ".MuiPickersLayout-contentWrapper": {
                  overflow: "visible",
                },
              },
            },
            day: {
              sx: {
                fontWeight: 400,
                fontSize: "0.875rem",
              },
            },
          }}
          dayOfWeekFormatter={(day) => day.charAt(0).toUpperCase()}
          showDaysOutsideCurrentMonth
          closeOnSelect={false}
          views={["day"]}
          calendars={2}
        />
      )}
    </Stack>
  );
}
