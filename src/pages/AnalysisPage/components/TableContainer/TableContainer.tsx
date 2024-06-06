import { useContext } from "react";

import { Skeleton } from "@mui/material";
import { AffiliatesContext } from "../../../../setup/context/AffiliatesContext";
import { AnalysisFilters } from "../AnalysisFilters/AnalysisFilters";
import { TotalTable } from "../TotalTable/TotalTable";
import "./TableContainer.scss";

export const TableContainer = () => {
  const { isLoading } = useContext(AffiliatesContext);

  return (
    <div className="table-container">
      <div className="table-container__table">
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={400} />
        ) : (
          <TotalTable />
        )}
      </div>

      <div className="table-container__filters">
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={230} />
        ) : (
          <AnalysisFilters />
        )}
      </div>
    </div>
  );
};
