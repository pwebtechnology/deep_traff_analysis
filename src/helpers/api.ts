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

const API_URL = 'https://41fb-169-150-240-237.ngrok-free.app/';
const HEADERS = {
  headers: {
  'ngrok-skip-browser-warning': true,
  }
};

export const getTotalAffiliatesData: GetAffiliatsWithoutParams = async() => {
  return await axios.get(`${API_URL}total_data_no_params`, HEADERS)
    .then(res => res.data)
    .catch(err => {
      throw Error('Failed to fetch affiliates:' + err);
    });
};

export const getTotalAffiliatesDataPrevDay: GetAffiliatsWithoutParams = async() => {
  return await axios.get(`${API_URL}total_data_prev_day`, HEADERS)
    .then(res => res.data)
    .catch(err => {
      throw Error('Failed to fetch affiliates:' + err);
    });
}

export const getAffiliatesDataCompare: GetAffiliatesDataCompare = async(params) => {
  return await axios.get(`${API_URL}total_data_compare`, { params, headers: HEADERS.headers })
    .then(res => res.data)
    .catch(err => {
      throw Error('Failed to fetch affiliates:' + err);
    });
};
