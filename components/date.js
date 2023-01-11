import { parseISO, format } from 'date-fns'; // this takes the installed date-fns library to prettify the date on client side

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}