export const dateFormatter = (dateString) => {
  const dateObject = new Date(Date.parse(dateString));
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return new Intl.DateTimeFormat("en-US", options).format(dateObject);
};

export const durationFormatter = (dateString) => {
  const dateObject = new Date(Date.parse(dateString));
  const options = {
    month: "short",
    day: "2-digit",
  };
  return new Intl.DateTimeFormat("en-US", options).format(dateObject);
};

export const calculateDates = (key) => {
  const today = new Date();
  let startDate, endDate;
  switch (key) {
    case "1":
      startDate = today;
      endDate = today;
      break;
    case "2":
      startDate = new Date(today.setDate(today.getDate() - 1));
      endDate = startDate;
      break;
    case "3":
      startDate = new Date(today.setDate(today.getDate() - 7));
      endDate = new Date();
      break;
    case "4":
      startDate = new Date(today.setDate(today.getDate() - 30));
      endDate = new Date();
      break;
    case "5":
      startDate = new Date(today.getFullYear(), today.getMonth(), 1);
      endDate = new Date();
      break;
    case "6":
      startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      endDate = new Date(today.getFullYear(), today.getMonth(), 0);
      break;
    case "8":
      startDate = new Date(); 
      endDate = new Date(); 
      break;
    default:
      startDate = new Date();
      endDate = new Date();
  }
  return { startDate, endDate };
};
