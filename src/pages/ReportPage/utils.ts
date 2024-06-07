import { createColumnHelper } from '@tanstack/react-table';
import { ReportFilterItem, TraderMetric } from './model';

export const DIMENTIONS: ReportFilterItem[] = [
  {
    value: 'Broker_Ret',
    label: '',
  },
  {
    value: 'Desk_Retention',
    label: '',
  },
  {
    value: 'Desk_Conversion',
    label: '',
  },
  {
    value: 'Brand_Ret',
    label: '',
  },
  {
    value: 'Brand_Conv',
    label: '',
  },
  {
    value: 'Broker_Conv',
    label: '',
  },
  {
    value: 'Country',
    label: '',
  },
  {
    value: 'GEO',
    label: '',
  },
  {
    value: 'Project',
    label: '',
  },
  {
    value: 'Team',
    label: '',
  },
  {
    value: 'Main_stage',
    label: '',
  },
  {
    value: 'Customer_ID',
    label: '',
  },
  {
    value: 'Is_removed',
    label: '',
  },
  {
    value: 'Potential',
    label: '',
  },
  {
    value: 'Is_no_ftd',
    label: '',
  },
  {
    value: 'Source',
    label: '',
  },
  {
    value: 'Campaign',
    label: '',
  },
  {
    value: 'Sale_status',
    label: '',
  },
  {
    value: 'Method',
    label: '',
  },
  {
    value: 'Registered_At',
    label: '',
  },
  {
    value: 'Created_At',
    label: '',
  },
  {
    value: 'FTD_Date',
    label: '',
  },
  {
    value: 'Last_login',
    label: '',
  },
];

export const METRICS: ReportFilterItem[] = [
  {
    value: '#ftds',
    label: '',
  },
  {
    value: '$ftds',
    label: '',
  },
  {
    value: '#std',
    label: '',
  },
  {
    value: '$std ',
    label: '',
  },
  {
    value: '#rdp',
    label: '',
  },
  {
    value: '$rdp',
    label: '',
  },
  {
    value: '$Total_deposit',
    label: '',
  },
  {
    value: '$WD',
    label: '',
  },
  {
    value: '$Net',
    label: '',
  },
  {
    value: 'PV',
    label: '',
  },
  {
    value: 'STD_rate%',
    label: '',
  },
  {
    value: 'CR%',
    label: '',
  },
  {
    value: 'ROMI$',
    label: '',
  },
  {
    value: 'ROI$',
    label: '',
  },
  {
    value: 'CPA%',
    label: '',
  },
  {
    value: 'CRG%',
    label: '',
  },
  {
    value: 'CRDC%',
    label: '',
  },
  {
    value: '#Leads',
    label: '',
  },
  {
    value: 'InCR%',
    label: '',
  },
  {
    value: 'InTRV$',
    label: '',
  },
  {
    value: 'NA%',
    label: '',
  },
  {
    value: 'Autologin%',
    label: '',
  },
  {
    value: 'CallAgain%',
    label: '',
  },
  {
    value: 'CallBack%',
    label: '',
  },
];

const columnHelper = createColumnHelper<TraderMetric>();

export const REPORT_BUILDER_COLUMNS = [
  columnHelper.accessor('WD', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('CR', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('NA', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('PV', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('Net', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('FTDs', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('STDs', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('Leads', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('Login', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('Trader', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('AnRate', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('WD Rate', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('STD Rate', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('Autologin', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('NA Counters', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('Calls per FTD', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('UnAssigned Leads', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('UnAssigned Tickets', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('Pool Customers VS Assigned', {
    cell: (info) => info.getValue(),
  }),
];
