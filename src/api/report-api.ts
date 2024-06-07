import axios from 'axios';

const BASE_URL = 'http://172.23.2.15:5000';
const HEADERS = {
  'ngrok-skip-browser-warning': true,
};

export const fetchReport = async (pagination: any, signal: AbortSignal) => {
  const params = {
    page: pagination.pageIndex + 1,
    page_size: pagination.pageSize,
  };
  const { data } = await axios.get(`${BASE_URL}/get_builder_data_props`, {
    params,
    signal,
  });
  return data;
};
