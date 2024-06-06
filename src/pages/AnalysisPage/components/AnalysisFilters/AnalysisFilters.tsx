import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";

import { AffiliatesContext } from "../../../../setup/context/AffiliatesContext";
import { SearchLink } from "../SearchLink";
import "./AnalysisFilters.scss";
import {
  getOptionsForSelector,
  handleAffiliatesChange,
  handleQueryChange,
} from "./helper";

export const AnalysisFilters = () => {
  const resetParams = {
    affiliates: null,
    query: null,
  };

  const { affiliates: totalData } = useContext(AffiliatesContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const query: string = searchParams.get("query") || "";
  const affiliates: string[] =
    (searchParams.getAll("affiliates") as string[]) || [];

  const affiliatesList = totalData.map((row) => row.Affiliate);
  const affilaitesOptions = getOptionsForSelector(affiliatesList);
  const affiliatesValues = getOptionsForSelector(affiliates);

  return (
    <nav className="analysis-filters">
      <p className="analysis-filters__title">Filters</p>

      <div className="analysis-filters__block">
        <p className="analysis-filters__control control">
          <span className="analysis-filters__icon icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>

          <input
            type="search"
            className="analysis-filters__input input"
            placeholder="Search affiliate"
            onChange={(event) =>
              handleQueryChange(event, setSearchParams, searchParams)
            }
            value={query}
          />
        </p>
      </div>

      <div className="analysis-filters__block">
        <div className="analysis-filters__select">
          <Select
            className="analysis-filters__select-options"
            isMulti
            options={affilaitesOptions}
            value={affiliatesValues}
            onChange={(event) =>
              handleAffiliatesChange(event, setSearchParams, searchParams)
            }
          />
        </div>
      </div>

      <div className="analysis-filters__block">
        <SearchLink
          className="button button__is-outlined button__is-fullwidth"
          params={resetParams}
        >
          Reset all filters
        </SearchLink>
      </div>
    </nav>
  );
};
