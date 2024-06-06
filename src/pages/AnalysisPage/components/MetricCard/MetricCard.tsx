import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useContext } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import { getPercent } from "../../../../helpers/get-percent";
import { CurrentAffiliatesContext } from "../../../../setup/context/CurrentAffiliatesContext";
import { TotalMetric } from "../TotalMetrics/helper";
import "./MetricCard.scss";
import { getIcon, getVariant } from "./helper";

type Props = {
  currentMetric: TotalMetric;
  totalMetric: TotalMetric;
  prevDayMetric: TotalMetric | undefined;
  isTotal: boolean;
};

export const MetricCard: React.FC<Props> = ({
  currentMetric,
  totalMetric,
  prevDayMetric,
  isTotal,
}) => {
  const { searchParams } = useContext(CurrentAffiliatesContext);

  const affiliates: string[] =
    (searchParams.getAll("affiliates") as string[]) || [];

  const { key, value: currentValue, label } = currentMetric;

  const { value: totalValue } = totalMetric;

  const isCompare = isTotal && prevDayMetric;

  const compareOption = isCompare
    ? getPercent(((currentValue / prevDayMetric.value) * 100 - 100) / 100)
    : 0;
  const compareOptionDifferenceNumber = isCompare
    ? currentValue - prevDayMetric.value
    : 0;
  const compareOptionDifference = label.includes("%")
    ? getPercent(compareOptionDifferenceNumber)
    : Math.round(compareOptionDifferenceNumber).toLocaleString();

  const icon = getIcon(compareOption);
  const partInPercent = getPercent(currentValue / totalValue) || 0;
  const variant = getVariant(partInPercent);

  return (
    <div className="metric-card">
      <h3 className="metric-card__title">{key}</h3>

      <p className="metric-card__caption">
        Compared to {isCompare ? "previous day" : affiliates.join(", ")}
      </p>

      {isCompare ? (
        <div className="metric-card__value-container">
          <h2 className="metric-card__value metric-card__value--left">
            {label}
          </h2>

          <div
            className={classNames("metric-card__right", {
              "metric-card__right--up": compareOption > 0,
              "metric-card__right--down": compareOption < 0,
            })}
          >
            <i className="metric-card__icon">
              <FontAwesomeIcon icon={icon} />
            </i>

            {!!compareOption && (
              <p className="metric-card__compare">
                {" "}
                {compareOptionDifference} ({compareOption}%)
              </p>
            )}
          </div>
        </div>
      ) : (
        <>
          <h2
            className={classNames("metric-card__value", {
              "metric-card__value--bottom-margin": !isTotal,
            })}
          >
            {label}
          </h2>

          <ProgressBar
            className="metric-card__bar"
            variant={variant}
            now={partInPercent}
            label={`${partInPercent}%`}
          />
        </>
      )}
    </div>
  );
};
