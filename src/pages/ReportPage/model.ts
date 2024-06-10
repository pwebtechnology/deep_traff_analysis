export type ReportFilterItem = {
  value: string;
  label: string;
};

export type ReportFilterProps = {
  label: string;
  filterElements: ReportFilterItem[];
};

export type ReportFilterListItemProps = {
  filter: ReportFilterItem;
  filterName: string;
};

export type TraderMetric = {
  WD: number;
  CR: number;
  NA: number;
  PV: number;
  Net: number;
  FTDs: number;
  STDs: number;
  Leads: number;
  Login: number;
  Trader: number;
  AnRate: number;
  Autologin: number;
  'WD Rate': number;
  'STD Rate': number;
  'NA Counters': number;
  'Calls per FTD': number;
  'UnAssigned Leads': number;
  'UnAssigned Tickets': number;
  'Pool Customers VS Assigned': number;
};
