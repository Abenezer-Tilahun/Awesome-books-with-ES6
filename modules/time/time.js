import {
  timebox,
} from '../selector/selectors.js';
import {
  DateTime,
} from '../luxon/src/luxon.js';

export const time = () => {
  const date = DateTime.now();
  const locale = navigator.language;
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };
  timebox.textContent = `${date.setLocale(locale).toLocaleString(options)}`;
};