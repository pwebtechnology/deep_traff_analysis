import { useEffect, useState } from 'react';
import { VscCheck } from 'react-icons/vsc';
import { ReportFilterListItemProps } from '../model';

import { useReportContext } from '../../../setup/context/ReportContext';
import { ReportFilters } from '../utils';

import '../../../assets/styles/layout/ReportPage.scss';

export const ReportFilterListItem = ({
  filter,
  filterName,
}: ReportFilterListItemProps) => {
  const { setFilters } = useReportContext();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(
    () =>
      setFilters((prev: ReportFilters) => {
        return {
          ...prev,
          [filterName]: isSelected
            ? [...prev[filterName as keyof ReportFilters], filter.value]
            : prev[filterName as keyof ReportFilters].filter(
                (elem) => elem !== filter.value,
              ),
        };
      }),
    [isSelected],
  );

  return (
    <li
      className={`report__filter-item ${isSelected ? 'selected' : ''}`}
      onClick={() => setIsSelected((prev) => !prev)}>
      {filter.value}
      <div className='report__filter-item__icon-wrapper'>
        {isSelected && <VscCheck size='20px' />}
      </div>
    </li>
  );
};
