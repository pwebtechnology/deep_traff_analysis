import { Dayjs } from "dayjs";
import { Metrics_Options } from "./MetricOptions";
import { DividerOptions } from "./data/options/divider-options";

export type Date = Dayjs | null;

export type DateProperty = keyof Pick<CohortsKeys, "startDate" | "endDate">;
export type ArrayProperty = keyof Pick<CohortsKeys, "affiliates" | "metrics">;

export type CohortsKeys = {
  startDate: Date;
  endDate: Date;
  affiliates: string[];
  divider: DividerOptions;
  metrics: Metrics_Options[];
};
