import { useContext, useEffect, useState } from "react";

import { Box, Skeleton } from "@mui/material";
import { getTotalAffiliatesDataPrevDay } from "../../../../api/api";
import { AffilateData } from "../../../../models/AffilateData";
import { AffiliatesContext } from "../../../../setup/context/AffiliatesContext";
import { CurrentAffiliatesContext } from "../../../../setup/context/CurrentAffiliatesContext";
import { MetricCard } from "../MetricCard/MetricCard";
import "./TotalMetrics.scss";
import { getTotalMetrics } from "./helper";

export const TotalMetrics = () => {
  const { affiliates, isLoading: isTotalLoading } =
    useContext(AffiliatesContext);
  const { currentAffiliates } = useContext(CurrentAffiliatesContext);
  const [prevDayData, setPrevDayData] = useState<AffilateData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getTotalAffiliatesDataPrevDay()
      .then(setPrevDayData)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const isEqual = affiliates.length === currentAffiliates.length;
  const isPrevError = isError || isLoading || !prevDayData.length;
  const currentMetric = getTotalMetrics(currentAffiliates);
  const totalMetric = getTotalMetrics(affiliates);
  const prevDayMetric = getTotalMetrics(prevDayData);

  return (
    <ul className="total-metrics">
      {currentMetric.map((metric, i) => (
        <li key={metric.key} className="total-metrics__item">
          {!isTotalLoading ? (
            <MetricCard
              currentMetric={metric}
              totalMetric={totalMetric[i]}
              prevDayMetric={isPrevError ? undefined : prevDayMetric[i]}
              isTotal={isEqual}
            />
          ) : (
            <Box sx={{ width: "100%" }}>
              {/* <Skeleton
              variant='text'
              sx={{ fontSize: '2rem', width: '50%'}}
            /> */}

              <Skeleton variant="rectangular" width="100%">
                <div style={{ paddingTop: "40%" }} />
              </Skeleton>
            </Box>
          )}
        </li>
      ))}
    </ul>
  );
};
