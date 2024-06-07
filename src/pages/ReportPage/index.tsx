import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ReportContextProvider from '../../setup/context/ReportContext';
import { ReportSidebarFilters } from './components/ReportSidebarFilters';
import { ReportTable } from './components/ReportTable';

import '../../assets/styles/layout/ReportPage.scss';

const queryClient = new QueryClient();

const ReportPage = () => {
  return (
    <div className='report__wrapper'>
      <QueryClientProvider client={queryClient}>
        <ReportContextProvider>
          <ReportSidebarFilters />
          <ReportTable />
        </ReportContextProvider>
      </QueryClientProvider>
    </div>
  );
};

export default ReportPage;
