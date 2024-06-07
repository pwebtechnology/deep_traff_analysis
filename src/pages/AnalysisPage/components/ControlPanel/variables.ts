import { Metrics_Options } from "../../../../models/MetricOptions";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const COHORT_WIDTH = 200;
export const EMPTY_FIELD = "Empty field is not allowed.";
export const END_DATE = "Start date cannot be greater than end date.";
export const METRICS_OPTIONS: Metrics_Options[] = [
  "FTDs",
  "PV",
  "Net",
  "STD Rate",
  "Leads",
  "CR",
  "NA",
  "AnRate",
  "UnAssigned Leads",
  "Calls per FTD",
  "Pool VS Assigned",
  "Autologin",
  "WD",
  "WD Rate",
  "UnAssigned Tickets",
  "ROMI",
  "CPA actual",
];
export const DEFAULT_METRICS: Metrics_Options[] = METRICS_OPTIONS.slice(0, 4);

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
