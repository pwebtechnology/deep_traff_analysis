import React, { useEffect, useMemo, useState } from 'react';

import { AffilateData } from '../types/AffilateData';
import { getTotalAffiliatesData } from '../helpers/api';

type AffiliatesContextType = {
  affiliates: AffilateData[];
  isLoading: boolean;
  isError: boolean;
};

export const AffiliatesContext = React.createContext<AffiliatesContextType>({
  affiliates: [],
  isLoading: false,
  isError: false,
});

type Props = {
  children: React.ReactNode;
};

export const AffiliatesProvider: React.FC<Props> = ({ children }) => {
  const [affiliates, setAffiliates] = useState<AffilateData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log('vlados tu che')
    setIsLoading(true);
    setIsError(false);

    getTotalAffiliatesData()
      .then(setAffiliates)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  }, []);

  const value = useMemo(() => ({
    affiliates,
    isLoading,
    isError,
  }), [affiliates, isLoading]);

  return (
    <AffiliatesContext.Provider value={value}>
      {children}
    </AffiliatesContext.Provider>
  );
};