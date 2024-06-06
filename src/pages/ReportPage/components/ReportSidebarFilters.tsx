import { DIMENTIONS, METRICS } from "../utils";
import { ReportFilterList } from "./ReportFilterList";

import "../../../assets/styles/layout/ReportPage.scss";

export const ReportSidebarFilters = () => {
  return (
    <div className="report__sidebar">
      <ReportFilterList filterElements={DIMENTIONS} label="Dimentions" />
      <ReportFilterList filterElements={METRICS} label="Metrics" />
    </div>
  );
};
