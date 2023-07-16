const DateFormat = (date) => {
  const year = String(date.getFullYear());
  const month = String(101 + date.getMonth()).substring(1);
  const day = String(100 + date.getDate()).substring(1);
  const hours = String(100 + date.getHours()).substring(1);
  const minutes = String(100 + date.getMinutes()).substring(1);
  const seconds = String(100 + date.getSeconds()).substring(1);
  const milliseconds = String(1000 + date.getMilliseconds()).substring(1);

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
}

export default DateFormat;