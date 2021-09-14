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

export function formatCel(v) {
  //var v = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  var r = v.replace(/\D/g, '');
  r = r.replace(/^0/, '');
  if (r.length > 10) {
    // 11+ digits. Format as 5+4.
    // r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '(0XX$1) $2-$3');
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '(0$1) $2-$3');
  } else if (r.length > 6) {
    // 6..10 digits. Format as 4+4
    //r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '(0XX$1) $2-$3');
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '(0$1) $2-$3');
  } else if (r.length > 2) {
    // 3..5 digits. Add (0XX..)
    //r = r.replace(/^(\d\d)(\d{0,5})/, '(0XX$1) $2');
    r = r.replace(/^(\d\d)(\d{0,5})/, '(0$1) $2');
  } else if (r.length > 1) {
    // 0..2 digits. Just add (0XX
    //r = r.replace(/^(\d*)/, '(0XX$1');
    r = r.replace(/^(\d*)/, '(0$1');
  }
  return r;
}
