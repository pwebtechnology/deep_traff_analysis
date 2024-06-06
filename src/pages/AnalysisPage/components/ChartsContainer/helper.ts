import { DividerOptions } from "../../../../models/data/options/divider-options";

type ValidateDate = (
  startDate: string,
  endDate: string,
  affiliates: string[],
  divider: DividerOptions,
) => boolean;

export const validateData: ValidateDate = (
  startDate,
  endDate,
  affiliates,
  divider,
) => !!startDate && !!endDate && !!affiliates.length && !!divider;

export const spliceYear = (value: any) =>
  typeof value === "string"
    ? value
        .split(" - ")
        .map((item) => item.split(".").slice(0, -1).join("."))
        .join(" - ")
    : value;
