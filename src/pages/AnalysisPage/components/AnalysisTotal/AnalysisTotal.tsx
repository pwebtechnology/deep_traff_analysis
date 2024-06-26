import { useContext } from "react";

import { AffiliatesContext } from "../../../../setup/context/AffiliatesContext";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { TableContainer } from "../TableContainer/TableContainer";
import { TotalMetrics } from "../TotalMetrics/TotalMetrics";
import "./AnalysisTotal.scss";

export const AnalysisTotal = () => {
  const { isLoading, isError } = useContext(AffiliatesContext);

  return (
    <>
      {!isLoading && isError && <ErrorMessage />}

      {!isError && (
        <>
          <div className="analysis-total__table-container" id="total-table">
            <TableContainer />
          </div>

          <div className="analysis-total__metrics" id="summary-charts">
            <h2 className="analysis-total__title">Key metrics summary</h2>

            <TotalMetrics />
          </div>
        </>
      )}
    </>
  );
};
