import { useMediaQuery } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Date } from "../../../../models/CohortsKeys";

import { LARGE_SCREEN } from "../../../../helpers/is-large";
import { getInputStyles } from "../../../../helpers/mui-styles";

import dayjs from "dayjs";

const MIN_DATE = dayjs("2020-01-01");

type Props = {
  label: string;
  value: Date;
  handleChange: (newValue: Date) => void;
  errorMessage: string;
};

export const CommonDatePicker: React.FC<Props> = ({
  label,
  value,
  handleChange,
  errorMessage,
}) => {
  const isLarge = useMediaQuery(LARGE_SCREEN);
  const styles = getInputStyles(isLarge);

  return (
    <DatePicker
      className="date-picker"
      minDate={MIN_DATE}
      views={["year", "month", "day"]}
      disableFuture
      slotProps={{
        textField: {
          error: !!errorMessage,
          helperText: errorMessage,
        },
      }}
      sx={styles}
      label={label}
      value={value}
      onChange={handleChange}
      format="YYYY-MM-DD"
    />
  );
};
