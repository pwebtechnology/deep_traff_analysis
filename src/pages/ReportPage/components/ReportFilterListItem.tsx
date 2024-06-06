import { useState } from "react";
import { VscCheck } from "react-icons/vsc";
import { ReportFilterListItemProps } from "../model";

import "../../../assets/styles/layout/ReportPage.scss";

export const ReportFilterListItem = ({ filter }: ReportFilterListItemProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <li
      className={`report__filter-item ${isSelected ? "selected" : ""}`}
      onClick={() => setIsSelected((prev) => !prev)}
    >
      {filter.value}
      <div className="report__filter-item__icon-wrapper">
        {isSelected && <VscCheck size="20px" />}
      </div>
    </li>
  );
};
