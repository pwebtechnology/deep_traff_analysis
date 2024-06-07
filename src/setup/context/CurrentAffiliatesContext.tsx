import React, { useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { AffilateData } from "../../models/AffilateData";
import {
  OrderOption,
  SortOptions,
} from "../../models/data/options/sort-options";
import { AffiliatesContext } from "./AffiliatesContext";

type CurrentAffiliatesContextType = {
  currentAffiliates: AffilateData[];
  searchParams: URLSearchParams;
};

type Props = {
  children: React.ReactNode;
};

export const CurrentAffiliatesContext =
  React.createContext<CurrentAffiliatesContextType>({
    currentAffiliates: [],
    searchParams: new URLSearchParams(),
  });

export const CurrentAffiliatesProvider: React.FC<Props> = ({ children }) => {
  const [currentAffiliates, setCurrentAffiliates] = useState<AffilateData[]>(
    [],
  );
  const [searchParams] = useSearchParams();
  const { affiliates: totalData } = useContext(AffiliatesContext);

  const query: string = searchParams.get("query") || "";
  const affiliates: string[] =
    (searchParams.getAll("affiliates") as string[]) || [];
  const sort: SortOptions = (searchParams.get("sort") as SortOptions) || "";
  const order: OrderOption = (searchParams.get("order") as OrderOption) || "";

  useEffect(() => {
    console.log("I was rendered xDDDDD");
    let newList = [...totalData];

    if (affiliates.length) {
      newList = newList.filter((affiliateRow) =>
        affiliates.includes(affiliateRow.Affiliate),
      );
    }

    if (query) {
      const normalizedQuery = query.toLowerCase();

      newList = newList.filter((affiliate) =>
        affiliate.Affiliate.toLowerCase().includes(normalizedQuery),
      );
    }

    if (sort) {
      if (sort) {
        newList.sort((firstAffiliate, secondAffiliate) => {
          if (sort === SortOptions.AFFILIATE) {
            return (
              (order ? 1 : -1) *
              firstAffiliate[sort].localeCompare(secondAffiliate[sort])
            );
          }

          if (Object.values(SortOptions).includes(sort)) {
            return (
              (order ? 1 : -1) * (firstAffiliate[sort] - secondAffiliate[sort])
            );
          }

          return 0;
        });
      }
    }

    setCurrentAffiliates(newList);
  }, [totalData, query, sort, order, affiliates.length]);

  const value = useMemo(
    () => ({
      currentAffiliates,
      searchParams,
    }),
    [currentAffiliates, searchParams],
  );

  return (
    <CurrentAffiliatesContext.Provider value={value}>
      {children}
    </CurrentAffiliatesContext.Provider>
  );
};
