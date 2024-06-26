import {
  UseQueryResult,
  keepPreviousData,
  useQuery,
} from '@tanstack/react-query';
import React, { createContext, useContext, useState } from 'react';
import { fetchReport } from '../../api/report-api';
import { TraderMetric } from '../../pages/ReportPage/model';

type ReportContextType = UseQueryResult<TraderMetric[], Error> | null;

type ReportContextProviderProps = {
  children: React.ReactNode;
};

export const useReportContext = () => {
  const exportContext = useContext(ReportContext);

  if (!exportContext) {
    throw new Error(
      'useReportContext must be used within a ReportContextProvider',
    );
  }

  return exportContext;
};

export const ReportContext = createContext<any>(null);

export default function ReportContextProvider({
  children,
}: ReportContextProviderProps) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 20,
  });

  const reportQuery = useQuery<TraderMetric[]>({
    queryKey: ['report', pagination],
    queryFn: ({ signal }) => fetchReport(pagination, signal),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  return (
    <ReportContext.Provider
      value={{ ...reportQuery, pagination, setPagination }}>
      {children}
    </ReportContext.Provider>
  );
}
