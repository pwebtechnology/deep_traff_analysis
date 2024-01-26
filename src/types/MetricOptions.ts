import { CompareAffilateData } from '../types/AffilateData';

export type Metrics_Options = keyof Omit<CompareAffilateData, 'Affiliate'>;
