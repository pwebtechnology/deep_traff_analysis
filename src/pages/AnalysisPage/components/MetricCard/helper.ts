import { faCaretDown, faCaretUp, faGripLines } from '@fortawesome/free-solid-svg-icons';

type Variant = 'success' | 'danger';
type getVariant = (partInPercent: number) => Variant

export const getIcon = (option: number) => {
  if (option > 0) {
    return faCaretUp;
  }

  if (option < 0) {
    return faCaretDown;
  }

  return faGripLines;
}

export const getVariant: getVariant = (partInPercent) => {
  const isSuccess = partInPercent >= 100;
  const variant = isSuccess ? 'success' : 'danger';

  return variant;
}
