const filters = {
  only_day: function(value) {
    if (!value) return value;
    return value.split(' ')[0];
  },
  percentage: function(value) {
    if (!value) return 0;
    return value.toFixed(2) * 100 + '%';
  }
};

export default filters;
