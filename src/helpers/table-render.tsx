import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { RenderData } from '../types/AffilateData';
import { SearchLink } from '../components/SearchLink';
import { OrderOption, SortOptions } from '../data/options/sort-options';

const sortParams = (option: SortOptions, sort: SortOptions, order: OrderOption) => {
  if (!sort || sort !== option) {
    return { sort: option, order: null };
  }

  if (sort === option && !order) {
    return { sort: option, order: 'desc' };
  }

  return { sort: null, order: null };
};

export const getHeadings = (sort: SortOptions, order: OrderOption) => {
  return <tr>
      {Object.values(SortOptions).map((option, i) => (
        <th
          key={i}
          className='total-table__header-item'>
            <span className='sort-option'>
              <span className='sort-option__text'>
                {option}
              </span>
              <SearchLink className='sort-option__icon' params={sortParams(option, sort, order)}>
                {sort !== option && <FontAwesomeIcon icon={faSort} />}
                {sort === option && !order && <FontAwesomeIcon icon={faSortUp} />}
                {sort === option && order  && <FontAwesomeIcon icon={faSortDown} />}
              </SearchLink>
            </span>
        </th>
      ))}
    </tr>;
}

export const getRows = (data: RenderData[] = []) => data.slice(0, 10).map((obj, i) => <tr key={i} className='total-table__row'>{getCells(obj)}</tr>);
export const getTotalRows = (data: RenderData[] = []) => data.map((obj, i) => <tr key={i} className='total-table__row'>{getCells(obj)}</tr>);
export const getCells = (obj: RenderData) => Object.values(obj).map((value: any, i) => <td key={i} className='total-table__item'>{value.toLocaleString()}</td>);
