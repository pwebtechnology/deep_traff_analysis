export type AffilateData = {
  Affiliate: string;
  FTDs: number;
  Leads: number;
  CR: number;
  NA: number;
  AnRate: number;
  'UnAssigned Leads':  number;
  'Calls per FTD':  number;
  'Pool VS Assigned':  number;
  Autologin: number;
  Login: number;
  'NA Counters': number;
  WD:  number;
  Net: number;
  PV:  number;
  STDs: number;
  'STD Rate':  number;
  'WD Rate': number;
  'UnAssigned Tickets':  number;
  ROMI:  number;
  'CPA actual': number;
}

export const exceptionKeys = ['STDs', 'Login', 'NA Counters'];

export type CompareAffilateData = Omit<AffilateData, 'STDs' | 'Login' | 'NA Counters'>

export type RenderData = Omit<AffilateData, string>;
