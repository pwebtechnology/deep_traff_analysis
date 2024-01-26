import axios from 'axios';
import { AffilateData } from '../types/AffilateData';
import { CohortData } from '../types/CohortData';

type GetAffiliatsWithoutParams = () => Promise<AffilateData[]>;

type CompareParams = {
  startDate: string,
  endDate: string,
  affiliates: string[],
  divider: string,
};
type GetAffiliatesDataCompare = (compareParams: CompareParams) => Promise<CohortData>;

export const getTotalAffiliatesData: GetAffiliatsWithoutParams = async() => {
  return await axios.get('http://172.23.2.15:5000/total_data_no_params')
    .then(res => res.data)
    .catch(err => {
      throw Error('Failed to fetch affiliates:' + err);
    });
};

export const getTotalAffiliatesDataPrevDay: GetAffiliatsWithoutParams = async() => {
  return await axios.get('http://172.23.2.15:5000/total_data_prev_day')
    .then(res => res.data)
    .catch(err => {
      throw Error('Failed to fetch affiliates:' + err);
    });
}

export const getAffiliatesDataCompare: GetAffiliatesDataCompare = async(params) => {
  return await axios.get('http://172.23.2.15:5000/total_data_compare', { params })
    .then(res => res.data)
    .catch(err => {
      throw Error('Failed to fetch affiliates:' + err);
    });
};
