const DateFormat = (date, format) => {
  const formatOptions = {
    year: date.getFullYear(),
    month: String(101 + date.getMonth()).substring(1),
    day: String(100 + date.getDate()).substring(1),
    hours: String(100 + date.getHours()).substring(1),
    minutes: String(100 + date.getMinutes()).substring(1),
    seconds: String(100 + date.getSeconds()).substring(1),
    milliseconds: String(1000 + date.getMilliseconds()).substring(1),
  };

  let formattedDate = '';

  Object.entries(format).forEach(([key, value]) => {
    if (value) {
      formattedDate += `${formatOptions[key]}`;
      if (key === 'milliseconds') {
        formattedDate += 'Z';
      } else {
        formattedDate += '-';
      }
    }
  });

  return formattedDate.slice(0, -1);
};

export default DateFormat;
