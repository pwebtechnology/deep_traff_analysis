import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { CSSTransition } from 'react-transition-group';

import { ReportFilterProps } from '../model';
import { ReportFilterListItem } from './ReportFilterListItem';

import '../../../assets/styles/layout/ReportPage.scss';

export const ReportFilterList = ({
  label,
  filterElements,
}: ReportFilterProps) => {
  const nodeRef = useRef<HTMLUListElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (nodeRef.current) {
      setHeight(isVisible ? `${nodeRef.current.scrollHeight}px` : '0px');
    }
  }, [isVisible]);

  return (
    <div className='report__filter'>
      <div
        onClick={() => setIsVisible((prev) => !prev)}
        className={`report__filter-title ${isVisible && 'opened'}`}>
        {label}
        <div className='report__filter-title__icon-wrapper'>
          {isVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <CSSTransition
        nodeRef={nodeRef}
        in={isVisible}
        timeout={200}
        classNames='list-node'>
        <ul ref={nodeRef} style={{ height }} className='report__filter-list'>
          {filterElements.map((filter) => (
            <ReportFilterListItem
              key={filter.value}
              filter={filter}
              filterName={label.toLocaleLowerCase()}
            />
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};
