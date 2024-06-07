import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useMediaQuery } from "@mui/material";

import { getAffiliatesDataCompare } from "../../../../api/api";
import { compareArrays } from "../../../../helpers/compare-arrays";
import { LARGE_SCREEN } from "../../../../helpers/is-large";
import { transformDataToChartFormat } from "../../../../helpers/transform-to-chart";
import { CohortsParams } from "../../../../models/ChartData";
import { CohortData } from "../../../../models/CohortData";
import { Metrics_Options } from "../../../../models/MetricOptions";
import { DividerOptions } from "../../../../models/data/options/divider-options";
import { DEFAULT_METRICS } from "../ControlPanel/variables";
import "./ChartsContainer.scss";
import { spliceYear, validateData } from "./helper";

export const ChartsContainer = () => {
  const [searchParams] = useSearchParams();
  const isLarge = useMediaQuery(LARGE_SCREEN);
  const [compareAffiliates, setCompareAffiliates] = useState<CohortData>({});
  const [cohortParams, setCohortParams] = useState<CohortsParams>({
    startDate: searchParams.get("startDate") || "",
    endDate: searchParams.get("endDate") || "",
    affiliates: searchParams.getAll("compareAffiliates") || [],
    divider:
      (searchParams.get("divider") as DividerOptions) || DividerOptions.EMPTY,
    metrics: searchParams.getAll("metrics") as Metrics_Options[],
  });

  const { startDate, endDate, affiliates, divider, metrics } = cohortParams;

  const [isError, setIsError] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    const startDate: string = searchParams.get("startDate") || "";
    const endDate: string = searchParams.get("endDate") || "";
    const affiliates: string[] = searchParams.getAll("compareAffiliates") || [];
    const divider: DividerOptions =
      (searchParams.get("divider") as DividerOptions) || DividerOptions.EMPTY;
    const metrics: Metrics_Options[] = searchParams.getAll("metrics").length
      ? (searchParams.getAll("metrics") as Metrics_Options[])
      : DEFAULT_METRICS;

    setCohortParams((prevParams) => ({
      startDate:
        prevParams.startDate === startDate ? prevParams.startDate : startDate,
      endDate: prevParams.endDate === endDate ? prevParams.endDate : endDate,
      affiliates: compareArrays(prevParams.affiliates, affiliates)
        ? prevParams.affiliates
        : affiliates,
      divider: prevParams.divider === divider ? prevParams.divider : divider,
      metrics: compareArrays(prevParams.metrics, metrics)
        ? prevParams.metrics
        : metrics,
    }));
  }, [searchParams]);

  useEffect(() => {
    if (validateData(startDate, endDate, affiliates, divider)) {
      getAffiliatesDataCompare({ startDate, endDate, affiliates, divider })
        .then(setCompareAffiliates)
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }
  }, [startDate, endDate, affiliates, divider]);

  const cohorts = Object.keys(compareAffiliates);

  return (
    <div className="charts-container">
      {metrics.map((metric) => (
        <div className="charts-container__chart-container" key={metric}>
          <h3 className="charts-container__title">{metric}</h3>

          <div className="charts-container__chart">
            <LineChart
              xAxis={[
                {
                  id: "Cohorts",
                  data: cohorts,
                  scaleType: "band",
                  valueFormatter: spliceYear,
                  tickLabelStyle: {
                    angle: 60,
                    textAnchor: "start",
                    fontSize: isLarge ? 20 : 10,
                  },
                },
              ]}
              yAxis={[
                {
                  tickLabelStyle: {
                    fontSize: isLarge ? 20 : 10,
                  },
                },
              ]}
              series={Object.entries(
                transformDataToChartFormat(
                  compareAffiliates,
                  metric,
                  affiliates,
                ),
              ).map(([affiliate, data]) => ({
                id: affiliate,
                label: affiliate,
                data: data,
                showMark: false,
              }))}
              slotProps={{
                legend: {
                  labelStyle: {
                    fontSize: isLarge ? 30 : 15,
                  },
                },
              }}
              sx={{
                width: "100%",
                height: "100%",
                fontSize: isLarge ? 300 : 300,
              }}
              margin={{ left: 100, bottom: isLarge ? 140 : 70 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
