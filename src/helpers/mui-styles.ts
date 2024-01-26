const fontMedium = {
  fontSize: '16px',
  lineHeight: '21px',
};

const fontLarge= {
  fontSize: '21px',
  lineHeight: '32px',
};

type GetDataStyles = (isData: boolean, isLarge?: boolean) => object;
type GetStyles = (isLarge: boolean) => object;

export const getInputStyles: GetStyles = isLarge => ({
  '& .MuiOutlinedInput-input': isLarge ? fontLarge : fontMedium,
  '& .MuiPickersDay': isLarge ? fontLarge : fontMedium,
});

export const getDividerStyles: GetStyles = isLarge => ({
  '& .MuiSelect-outlined': isLarge ? fontLarge : fontMedium,
});

export const getMenuItemStyles: GetStyles = isLarge => isLarge ? fontLarge : fontMedium;

export const getMultiselectStyles: GetDataStyles = (isData, isLarge) => ({
  width: '100%',
  '& .MuiSelect-iconOutlined': {
    display: isData ? 'none' : ''
  },
  '&.Mui-focused .MuiIconButton-root': {
    color: 'primary.main'
  },
  '& .MuiChip-root': isLarge ? fontLarge : fontMedium
});

export const getMultiselectClearStyles: GetDataStyles = (isData) => ({ visibility: isData ? 'visible' : 'hidden'})
