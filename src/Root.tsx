import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { App } from './App';
import { AnalysisPage } from './pages/AnalysisPage/AnalysisPage';
import { InvalidPage } from './pages/InvalidPage/InvalidPage';
import { AffiliatesProvider } from './context/AffiliatesContext';
import { CurrentAffiliatesProvider } from './context/CurrentAffiliatesContext';

export const Root = () => (
  <Router>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AffiliatesProvider>
        <CurrentAffiliatesProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<AnalysisPage />} />
              <Route path="*" element={<InvalidPage />}/>
            </Route>
          </Routes>
        </CurrentAffiliatesProvider>
      </AffiliatesProvider>
    </LocalizationProvider>
  </Router>
)