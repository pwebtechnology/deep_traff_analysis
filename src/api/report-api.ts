import axios from 'axios';

const BASE_URL = 'http://172.23.2.15:5000';
const HEADERS = {
  'ngrok-skip-browser-warning': true,
};

export const fetchReport = async (pagination: any, filters: any) => {
  const params = {
    pageIndex: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
    ...filters,
  };
  const { data } = await axios.get(`${BASE_URL}/get_builder_data_props`, {
    params,
  });
  return data;
};
