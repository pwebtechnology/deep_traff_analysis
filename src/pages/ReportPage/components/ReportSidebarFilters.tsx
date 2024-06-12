import { DIMENTIONS, METRICS } from '../utils';
import { ReportFilterList } from './ReportFilterList';

import '../../../assets/styles/layout/ReportPage.scss';
import { useReportContext } from '../../../setup/context/ReportContext';

export const ReportSidebarFilters = () => {
  const { error, isError } = useReportContext();
  if (isError) return <></>;
  return (
    <div className='report__sidebar'>
      <ReportFilterList filterElements={DIMENTIONS} label='Dimentions' />
      <ReportFilterList filterElements={METRICS} label='Metrics' />
    </div>
  );
};
