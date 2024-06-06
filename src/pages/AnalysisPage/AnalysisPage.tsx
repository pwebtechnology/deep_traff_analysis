import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { AffiliatesCompare } from './components/AffiliatesCompare/AffiliatesCompare';
import { AnalysisTotal } from './components/AnalysisTotal/AnalysisTotal';

import { AffiliatesProvider } from '../../setup/context/AffiliatesContext';
import { CurrentAffiliatesProvider } from '../../setup/context/CurrentAffiliatesContext';

import '../../assets/styles/layout/AnalysisPage.scss';

const AnalysisPage = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AffiliatesProvider>
        <CurrentAffiliatesProvider>
          <div className='analysis-page'>
            <h1 className='analysis-page__title'>Deep traffic analysis</h1>

            <div className='analysis-page__total'>
              <h2 className='analysis-page__subtitle'>
                Total data summary by affiliate
              </h2>

              <AnalysisTotal />
            </div>

            <div className='analysis-page__compare' id='compare-table'>
              <h2 className='analysis-page__subtitle'>
                Cohort affilates compare
              </h2>

              <AffiliatesCompare />
            </div>
          </div>
        </CurrentAffiliatesProvider>
      </AffiliatesProvider>
    </LocalizationProvider>
  );
};

export default AnalysisPage;
