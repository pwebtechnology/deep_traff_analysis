import { ControlPanel } from '../ControlPanel/ControlPanel';
import './AffiliatesCompare.scss';
import { ChartsContainer } from '../ChartsContainer/ChartsContainer';

export const AffiliatesCompare = () => {
  return (
    <div className="affiliates-compare">
      <div className="affiliates-compare__control-panel">
        <ControlPanel />
      </div>

      <div className="affiliates-compare__charts-container">
        <ChartsContainer />
      </div>
    </div>
)};

