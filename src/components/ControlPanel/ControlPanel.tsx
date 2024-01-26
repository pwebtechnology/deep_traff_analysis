import { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';
import Select from '@mui/material/Select';
import { FormControl, FormHelperText, IconButton, InputLabel, MenuItem, OutlinedInput, useMediaQuery } from '@mui/material';

import { handleArrayChange, handleClearMultiselect, handleDateChange, handleError, hanldeDividerChange, renderValue } from './helper';
import { AffiliatesContext } from '../../context/AffiliatesContext';
import { DividerOptions } from '../../data/options/divider-options';
import { Metrics_Options } from '../../types/MetricOptions';
import { CohortsKeys, Date } from '../../types/CohortsKeys';
import { MenuProps, DEFAULT_METRICS, METRICS_OPTIONS } from './variables';
import { CommonDatePicker } from '../CommonDatePicker/CommonDatePicker';
import { SearchLink } from '../SearchLink';
import { CohortError } from '../../types/CohortError';
import './ControlPanel.scss';
import { ClearIcon } from '@mui/x-date-pickers';
import { getDividerStyles, getMenuItemStyles, getMultiselectClearStyles, getMultiselectStyles } from '../../helpers/mui-styles';
import { LARGE_SCREEN } from '../../helpers/is-large';

export const ControlPanel = () => {
  const [searchParams] = useSearchParams();
  const isLarge = useMediaQuery(LARGE_SCREEN);

  const startDate: Date = dayjs(searchParams.get('startDate')) || null;
  const endDate: Date = dayjs(searchParams.get('endDate')) || null;
  const affiliates: string[] = searchParams.getAll('compareAffiliates') || [];
  const divider: DividerOptions = searchParams.get('divider') as DividerOptions || DividerOptions.EMPTY;
  const metrics: Metrics_Options[] = searchParams.getAll('metrics').length ? searchParams.getAll('metrics') as Metrics_Options[] : DEFAULT_METRICS;
  
  const [cohortData, setCohortData] = useState<CohortsKeys>({
    startDate,
    endDate,
    affiliates,
    divider,
    metrics,
  });

  const [error, setError] = useState<CohortError>({
    startDate: '',
    endDate: '',
    affiliates: '',
    divider: '',
    metrics: '',
  });

  const { affiliates: totalData } = useContext(AffiliatesContext);
  const affiliatesList = totalData.map(row => row.Affiliate);
  const metricsList = METRICS_OPTIONS;

  const updateParams = {
    startDate: cohortData.startDate?.format('YYYY-MM-DD') || null,
    endDate: cohortData.endDate?.format('YYYY-MM-DD') || null,
    compareAffiliates: cohortData.affiliates,
    divider: cohortData.divider || null,
    metrics: cohortData.metrics,
  };

  return (
    <div className="control-panel">
      <h3 className="control-panel__title">Filters</h3>

      <div className="control-panel__option">
        <CommonDatePicker
          label="Start date"
          value={cohortData.startDate}
          handleChange={(newValue) => handleDateChange(newValue, 'startDate', setCohortData, cohortData, setError)}
          errorMessage={error.startDate}
        />
      </div>

      <div className="control-panel__option">
        <CommonDatePicker
          label="End date"
          value={cohortData.endDate}
          handleChange={(newValue) => handleDateChange(newValue, 'endDate', setCohortData, cohortData, setError)}
          errorMessage={error.endDate}
        />
      </div>

      <div className="control-panel__option">
        <FormControl sx={{ width: '100%' }} error={!!error.affiliates}>
          <InputLabel id="affiliates-label">Select affiliates</InputLabel>

          <Select
            labelId='affiliates-label'
            label="Select affiliates"
            sx={getMultiselectStyles(!!cohortData.affiliates.length, isLarge)}
            multiple
            value={cohortData.affiliates}
            onChange={event => handleArrayChange(event, setCohortData, cohortData, setError, 'affiliates')}
            input={<OutlinedInput label="Select affiliates" />}
            renderValue={renderValue}
            MenuProps={MenuProps}
            endAdornment={
              <IconButton
                onClick={() => handleClearMultiselect(setCohortData, cohortData, setError, 'affiliates')}
                sx={getMultiselectClearStyles(!!cohortData.affiliates.length)}>
                  <ClearIcon />
              </IconButton>
            }
          >
            {affiliatesList.map((affiliate) => (
              <MenuItem
                key={affiliate}
                value={affiliate}
                sx={getMenuItemStyles(isLarge)}
              >
                {affiliate}
              </MenuItem>
            ))}
          </Select>

          {error.affiliates && <FormHelperText>{error.affiliates}</FormHelperText>}
        </FormControl>
      </div>

      <div className="control-panel__option">
        <FormControl sx={{ width: '100%' }} error={!!error.divider}>
          <InputLabel id="divider-label">Select divider</InputLabel>

          <Select
            labelId="divider-label"
            label="Select divider"
            value={cohortData.divider}
            onChange={(event) => {
              hanldeDividerChange(event, setCohortData, cohortData, setError);
            }}
            sx={getDividerStyles(isLarge)}
          >
            {Object.entries(DividerOptions).map(([key, label]) => (
              <MenuItem
                key={key}
                value={label}
                disabled={label === DividerOptions.EMPTY}
                sx={getMenuItemStyles(isLarge)}
              >
                {label}
              </MenuItem>
            ))}
          </Select>

          {error.divider && <FormHelperText>{error.divider}</FormHelperText>}
        </FormControl>
      </div>

      <div className="control-panel__option">
        <FormControl sx={{ width: '100%' }} error={!!error.metrics}>
          <InputLabel id="metrics-label">Select metrics</InputLabel>

          <Select
            labelId='metrics-label'
            label="Select metrics"
            sx={getMultiselectStyles(!!cohortData.metrics.length, isLarge)}
            multiple
            value={cohortData.metrics}
            onChange={event => handleArrayChange(event, setCohortData, cohortData, setError, 'metrics')}
            input={<OutlinedInput label="Select metrics" />}
            renderValue={renderValue}
            MenuProps={MenuProps}
            endAdornment={
              <IconButton
                onClick={() => handleClearMultiselect(setCohortData, cohortData, setError, 'metrics')}
                sx={getMultiselectClearStyles(!!cohortData.metrics.length)}>
                  <ClearIcon />
              </IconButton>
            }
          >
            {metricsList.map(metric => (
              <MenuItem
                key={metric}
                value={metric}
                sx={getMenuItemStyles(isLarge)}
              >
                {metric}
              </MenuItem>
            ))}
          </Select>

          {error.metrics && <FormHelperText>{error.metrics}</FormHelperText>}
        </FormControl>
      </div>

      <div className="control-panel__option">
        <SearchLink
          className="button button__is-outlined button__is-fullwidth"
          params={updateParams}
          onClick={() => handleError(cohortData, setError)}
        >
          Confirm
        </SearchLink>
      </div>
    </div>
  )
};
