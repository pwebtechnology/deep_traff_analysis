import { Skeleton } from '@mui/material';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo } from 'react';

import {
  PiArrowLeft,
  PiArrowLineLeft,
  PiArrowLineRight,
  PiArrowRight,
} from 'react-icons/pi';

import { useReportContext } from '../../../setup/context/ReportContext';
import { REPORT_BUILDER_COLUMNS } from '../utils';

export const ReportTable = () => {
  const { data, error, isError, isFetching, pagination, setPagination } =
    useReportContext();

  const defaultData = useMemo(
    () => Array(pagination?.pageSize).fill({}),
    [pagination],
  );

  const columns = useMemo(
    () =>
      isFetching
        ? REPORT_BUILDER_COLUMNS.map((column) => ({
            ...column,
            cell: () => <Skeleton />,
          }))
        : REPORT_BUILDER_COLUMNS,
    [isFetching],
  );

  const table = useReactTable({
    data: isFetching ? defaultData : data?.data,
    columns,
    rowCount: data?.pagination?.total_items,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  if (isError) return <div>{`Something went wrong: "${error.message}"`}</div>;

  return (
    <div className='report__table-wrapper'>
      <table className='report__table'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='report__table-pagination'>
        <button
          className='table__pagination-button'
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}>
          <PiArrowLineLeft />
        </button>
        <button
          className='table__pagination-button'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          <PiArrowLeft />
        </button>
        <span className='table__pagination-mark'>
          {`Page: ${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}
        </span>
        <button
          className='table__pagination-button'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          <PiArrowRight />
        </button>
        <button
          className='table__pagination-button'
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}>
          <PiArrowLineRight />
        </button>
        <select
          className='table__pagination-select'
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}>
          {[20, 40, 80].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
