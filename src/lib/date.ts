export const formatResponseDate = (dateString: string): string => {
  if (!dateString || !/^\d{2}-\d{2}-\d{4}$/.test(dateString)) {
    throw new Error("Invalid date format. Expected DD-MM-YYYY");
  }

  const [day, month, year] = dateString.split("-").map(Number);

  const date = new Date(year, month - 1, day);

  const months = [
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

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
