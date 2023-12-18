module.exports = {
  format_date: (date) => {
    if (date instanceof Date && !isNaN(date)) {
      return date.toLocaleDateString();
    } else {
      console.error('Invalid date provided to format_date helper:', date);
      return 'Invalid date';
    }
  },
};