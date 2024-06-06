import { DividerOptions } from "./data/options/divider-options";
import { Metrics_Options } from "./MetricOptions";

export type ChartData = Record<string, number[]>;

export type CohortsParams = {
  startDate: string;
  endDate: string;
  affiliates: string[];
  divider: DividerOptions;
  metrics: Metrics_Options[];
};
