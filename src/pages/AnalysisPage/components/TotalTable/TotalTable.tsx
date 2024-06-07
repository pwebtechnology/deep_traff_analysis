import { useContext, useState } from "react";

import {
  getHeadings,
  getRows,
  getTotalRows,
} from "../../../../helpers/table-render";
import { exceptionKeys } from "../../../../models/AffilateData";
import {
  OrderOption,
  SortOptions,
} from "../../../../models/data/options/sort-options";
import { CurrentAffiliatesContext } from "../../../../setup/context/CurrentAffiliatesContext";
import "./TotalTable.scss";
import { getArrayWithoutKeys } from "./helper";

export const TotalTable = () => {
  const { currentAffiliates, searchParams } = useContext(
    CurrentAffiliatesContext,
  );
  const [isShowTotal, setIsShowTotal] = useState(false);
  const sort: SortOptions = (searchParams.get("sort") as SortOptions) || "";
  const order: OrderOption = (searchParams.get("order") as OrderOption) || "";
  const affilateData = getArrayWithoutKeys(currentAffiliates, exceptionKeys);

  return (
    <div className="total-table">
      <table className="total-table__table" cellSpacing="0" cellPadding="0">
        <thead className="total-table__header">
          {getHeadings(sort, order)}
        </thead>
        <tbody className="total-table__content">
          {isShowTotal ? getTotalRows(affilateData) : getRows(affilateData)}
        </tbody>
      </table>

      <button
        className="total-table__button"
        onClick={() => setIsShowTotal(!isShowTotal)}
      >
        {isShowTotal ? "Hide" : "Expand"}
      </button>
    </div>
  );
};
