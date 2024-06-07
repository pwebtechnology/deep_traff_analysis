import { CompareAffilateData } from "../models/AffilateData";

export type Metrics_Options = keyof Omit<CompareAffilateData, "Affiliate">;
