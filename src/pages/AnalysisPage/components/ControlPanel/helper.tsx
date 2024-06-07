import { Box, Chip, SelectChangeEvent } from "@mui/material";

import { CohortError } from "../../../../models/CohortError";
import {
  ArrayProperty,
  CohortsKeys as CohortData,
  Date,
  DateProperty,
} from "../../../../models/CohortsKeys";
import { DividerOptions } from "../../../../models/data/options/divider-options";
import { EMPTY_FIELD, END_DATE } from "./variables";

type SetCohortData = (value: React.SetStateAction<CohortData>) => void;
type SetError = (value: React.SetStateAction<CohortError>) => void;

type ChangeEventHandler<T> = (
  event: SelectChangeEvent<T>,
  setCohortData: SetCohortData,
  cohortData: CohortData,
  setError: SetError,
  property?: ArrayProperty,
) => void;

type HandleStringArrayChange = ChangeEventHandler<string[]>;
type HanldeDividerChange = ChangeEventHandler<DividerOptions>;
type HandleDateChange = (
  newValue: Date,
  dateProperty: DateProperty,
  setCohortData: SetCohortData,
  cohortData: CohortData,
  setError: SetError,
) => void;
type HandleError = (cohortData: CohortData, setError: SetError) => void;
type HandleClearMultiselect = (
  setCohortData: SetCohortData,
  cohortData: CohortData,
  setError: SetError,
  property?: ArrayProperty,
) => void;

const handleStartDateError: HandleError = (cohortData, setError) => {
  const { startDate } = cohortData;

  if (!startDate) {
    setError((currentError) => ({ ...currentError, startDate: EMPTY_FIELD }));
  } else {
    setError((currentError) => ({ ...currentError, startDate: "" }));
  }
};

const handleEndDateError: HandleError = (cohortData, setError) => {
  const { startDate, endDate } = cohortData;

  if (!endDate) {
    setError((currentError) => ({ ...currentError, endDate: EMPTY_FIELD }));
  } else if (endDate.isBefore(startDate)) {
    setError((currentError) => ({ ...currentError, endDate: END_DATE }));
  } else {
    setError((currentError) => ({ ...currentError, endDate: "" }));
  }
};

const handleDividerError: HandleError = (cohortData, setError) => {
  const { divider } = cohortData;

  if (!divider) {
    setError((currentError) => ({ ...currentError, divider: EMPTY_FIELD }));
  } else {
    setError((currentError) => ({ ...currentError, divider: "" }));
  }
};

const handleAffiliatesError: HandleError = (cohortData, setError) => {
  const { affiliates } = cohortData;

  if (!affiliates.length) {
    setError((currentError) => ({ ...currentError, affiliates: EMPTY_FIELD }));
  } else {
    setError((currentError) => ({ ...currentError, affiliates: "" }));
  }
};

const handleMetricsError: HandleError = (cohortData, setError) => {
  const { metrics } = cohortData;

  if (!metrics.length) {
    setError((currentError) => ({ ...currentError, metrics: EMPTY_FIELD }));
  } else {
    setError((currentError) => ({ ...currentError, metrics: "" }));
  }
};

export const handleError: HandleError = (cohortData, setError) => {
  handleStartDateError(cohortData, setError);
  handleEndDateError(cohortData, setError);
  handleAffiliatesError(cohortData, setError);
  handleDividerError(cohortData, setError);
};

export const handleClearMultiselect: HandleClearMultiselect = (
  setCohortData,
  cohortData,
  setError,
  arrayProperty,
) => {
  if (!arrayProperty) {
    return;
  }

  const newCohortData = {
    ...cohortData,
    [arrayProperty]: [],
  };

  setCohortData(newCohortData);

  if (arrayProperty === "affiliates") {
    handleAffiliatesError(newCohortData, setError);
  }
  if (arrayProperty === "metrics") {
    handleMetricsError(newCohortData, setError);
  }
};

export const handleArrayChange: HandleStringArrayChange = (
  event,
  setCohortData,
  cohortData,
  setError,
  arrayProperty,
) => {
  if (!arrayProperty) {
    return;
  }

  const {
    target: { value },
  } = event;

  const newCohortData = {
    ...cohortData,
    [arrayProperty]: typeof value === "string" ? value.split(",") : value,
  };

  setCohortData(newCohortData);

  if (arrayProperty === "affiliates") {
    handleAffiliatesError(newCohortData, setError);
  }
  if (arrayProperty === "metrics") {
    handleMetricsError(newCohortData, setError);
  }
};

export const hanldeDividerChange: HanldeDividerChange = (
  event,
  setCohortData,
  cohortData,
  setError,
) => {
  const newDivider: DividerOptions = event.target.value as DividerOptions;
  const newCohortDate = {
    ...cohortData,
    divider: newDivider,
  };

  setCohortData(newCohortDate);
  handleDividerError(newCohortDate, setError);
};

export const handleDateChange: HandleDateChange = (
  newValue,
  dateProperty,
  setCohortData,
  cohortData,
  setError,
) => {
  const newCohortData = { ...cohortData, [dateProperty]: newValue };

  setCohortData(newCohortData);

  if (dateProperty === "endDate") {
    handleEndDateError(newCohortData, setError);
  }
  if (dateProperty === "startDate") {
    handleStartDateError(newCohortData, setError);
  }
};

export const renderValue = (selected: string[]) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
    {selected.map((value) => (
      <Chip key={value} label={value} />
    ))}
  </Box>
);
