import './AnalysisPage.scss';
import { AnalysisTotal } from '../../components/AnalysisTotal/AnalysisTotal';
import { AffiliatesCompare } from '../../components/AffiliatesCompare/AffiliatesCompare';

export const AnalysisPage = () => {
 

  return (
    <div className="analysis-page">
      <h1 className="analysis-page__title">Deep traffic analysis</h1>

      <div className="analysis-page__total">
        <h2 className="analysis-page__subtitle">Total data summary by affiliate</h2>

        <AnalysisTotal />
      </div>

      <div className="analysis-page__compare" id="compare-table">
        <h2 className="analysis-page__subtitle">Cohort affilates compare</h2>

        <AffiliatesCompare />
      </div>
    </div>
  )
}
