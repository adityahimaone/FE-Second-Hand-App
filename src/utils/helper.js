export const ConvertToIDR = (number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);

const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const ConvertToDate = (date) => {
  const dateConvert = new Date(date);
  const month = dateConvert.getMonth();
  const day = dateConvert.getDate();
  const year = dateConvert.getFullYear();
  const hour = dateConvert.getHours();
  const minute = dateConvert.getMinutes();

  return `${day} ${monthList[month]} ${year}, ${hour}:${minute}`;
};
