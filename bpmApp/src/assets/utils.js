import moment from 'moment/min/moment-with-locales';

export function convertDate(date, ptBr = true) {
  if (ptBr) return moment(date).format('DD[/]MM[/]YYYY');
  else {
    return moment(date).format('YYYY[-]MM[-]DD');
  }
}

export function fromDateTimeGetTime(dateTime) {
  return moment(dateTime).locale('pt-br').format('LT');
}

export function now() {
  return moment().locale('pt-br').format();
}
