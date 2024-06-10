import axios from 'axios';

const BASE_URL = 'http://172.23.2.15:5000';
const HEADERS = {
  'ngrok-skip-browser-warning': true,
};

export const fetchReport = async (params: any) => {
  // const params = {
  //   page: pagination.pageIndex + 1,
  //   page_size: pagination.pageSize,
  //   ...filters,
  // };
  const { data } = await axios.get(`${BASE_URL}/get_builder_data_props`, {
    params,
  });
  return data;
};
