import { SetURLSearchParams } from "react-router-dom";
import { getSearchWith } from "../../helpers/searchHelper";
import { Option } from '../../types/Option';

type SetSearchParams = SetURLSearchParams;

export const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>, setSearchParams: SetSearchParams, searchParams: URLSearchParams) => {
  const curQuery = event.target.value.trimStart() || null;

  setSearchParams(getSearchWith(searchParams, { query: curQuery }));
};

export const handleAffiliatesChange = (option: readonly Option[], setSearchParams: SetSearchParams, searchParams: URLSearchParams) => {
  const curAffiliate: string[] = Object.values(option).map(({ value }) => value);

  setSearchParams(getSearchWith(searchParams, { affiliates: curAffiliate }));
};

export const getOptionsForSelector = (data: string[]) => data.map(item => ({
  value: item,
  label: item
}));
