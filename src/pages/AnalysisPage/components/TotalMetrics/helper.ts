import { getPercent } from "../../../../helpers/get-percent";
import { AffilateData } from "../../../../models/AffilateData";

export type TotalMetric = {
  key: string;
  value: number;
  label: string;
};

type GetTotalMetrics = (affilateData: AffilateData[]) => TotalMetric[];

export const getTotalMetrics: GetTotalMetrics = (affilateData) => {
  const preparedData = affilateData.reduce(
    (total, affilate) => {
      total.net += affilate.Net;
      total.ftds += affilate.FTDs;
      total.stds += affilate.STDs;
      total.leads += affilate.Leads;
      total.login += affilate.Login;
      total.na_counters += affilate["NA Counters"];

      return total;
    },
    {
      net: 0,
      stds: 0,
      ftds: 0,
      leads: 0,
      login: 0,
      na_counters: 0,
    },
  );

  const { net, ftds, stds, leads, login, na_counters } = preparedData;

  const preparedResult = {
    "Total Leads": {
      value: leads,
      label: leads.toLocaleString(),
    },
    "Total NET": {
      value: net,
      label: `${net.toLocaleString()} $`,
    },
    Autologin: {
      value: leads ? login / leads : 0,
      label: `${getPercent(leads ? login / leads : 0)}%`,
    },
    PV: {
      value: ftds ? net / ftds : 0,
      label: `${Math.round(ftds ? net / ftds : 0).toLocaleString()} $`,
    },
    "Total FTDs": {
      value: ftds,
      label: ftds.toLocaleString(),
    },
    "STD Rate": {
      value: ftds ? stds / ftds : 0,
      label: `${getPercent(ftds ? stds / ftds : 0)} %`,
    },
    NA: {
      value: leads ? na_counters / leads : 0,
      label: `${getPercent(leads ? na_counters / leads : 0)} %`,
    },
    CR: {
      value: leads ? ftds / leads : 0,
      label: `${getPercent(leads ? ftds / leads : 0)} %`,
    },
  };

  const result = Object.entries(preparedResult).map(([key, data]) => ({
    key,
    ...data,
  }));

  return result;
};
