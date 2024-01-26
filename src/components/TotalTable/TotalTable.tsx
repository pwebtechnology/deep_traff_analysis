import { useContext, useState } from "react";
import { OrderOption, SortOptions } from "../../data/options/sort-options";
import { getHeadings, getRows, getTotalRows } from "../../helpers/table-render";
import { exceptionKeys } from "../../types/AffilateData"
import { getArrayWithoutKeys } from "./helper";
import { CurrentAffiliatesContext } from "../../context/CurrentAffiliatesContext";
import './TotalTable.scss';

export const TotalTable = () => {
  const { currentAffiliates, searchParams } = useContext(CurrentAffiliatesContext);
  const [isShowTotal, setIsShowTotal]  = useState(false);
  const sort: SortOptions = searchParams.get('sort') as SortOptions || '';
  const order: OrderOption = searchParams.get('order') as OrderOption || '';
  const affilateData = getArrayWithoutKeys(currentAffiliates, exceptionKeys);

  return (
    <div className="total-table">
      <table className="total-table__table" cellSpacing="0" cellPadding="0">
        <thead className="total-table__header">{getHeadings(sort, order)}</thead>
        <tbody className="total-table__content">{isShowTotal ? getTotalRows(affilateData) : getRows(affilateData)}</tbody>
      </table>

      <button
        className="total-table__button"
        onClick={() => setIsShowTotal(!isShowTotal)}
      >
        {isShowTotal ? 'Hide' : 'Expand'}
      </button>
    </div>
  )
};
