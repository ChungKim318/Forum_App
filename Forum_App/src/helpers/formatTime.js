import moment from 'moment';

export const formatDate = (date, format = 'DD/MM/YYYY') => {
  if (!date) {
    return '';
  }
  return moment(date)
    .add(moment(date).utcOffset() / 60, 'hours')
    .format(format);
};
