import { DateFormat } from "./data/date-format";

export type PropsFromUser = {
  startDate: DateFormat.UTC;
  endDate: DateFormat.UTC;
  affilates: string[];
};
