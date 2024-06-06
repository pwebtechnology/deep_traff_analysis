import { ChartData } from "../models/ChartData";
import { CohortData } from "../models/CohortData";
import { Metrics_Options } from "../models/MetricOptions";

type TransformDataToChartFormat = (
  dataFromApi: CohortData,
  prop: Metrics_Options,
  affiliates: string[],
) => ChartData;

export const transformDataToChartFormat: TransformDataToChartFormat = (
  dataFromApi,
  prop,
  affiliates,
) => {
  const value = Object.values(dataFromApi);

  const series: ChartData = affiliates.reduce((result, affiliate) => {
    const data: number[] = value.reduce((total, row) => {
      const accurateValue = row.find((item) => item.Affiliate === affiliate);
      const valueToAdd = accurateValue ? accurateValue[prop] : 0;
      total.push(valueToAdd);
      // if (!row[i]) {
      //   total.push(0)
      // } else {
      //   total.push(row[i][prop])
      // }

      return total;
    }, [] as number[]);

    result[affiliate] = data;

    return result;
  }, {} as ChartData);

  return series;
};
