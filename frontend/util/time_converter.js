export const convertMinutesToTimeString = (mins) => {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;

  let hourStr;
  let minStr;

  if (hours === 0) {
    hourStr = "";
  } else if (hours === 1) {
    hourStr = `${hours} hour`;
  } else {
    hourStr = `${hours} hours`;
  }

  if (minutes === 0) {
    minStr = "";
  } else if (hours === 1) {
    minStr = ` ${minutes} minute`;
  } else {
    minStr = ` ${minutes} minutes`;
  }

  minStr = (hours === 0) ? minStr.slice(1) : minStr;

  return hourStr + minStr;

};


export const calcTimeSinceCreate = (createdDate) => {
  const time = new Date(createdDate);
  const now = new Date();
  const dayDiff = Math.floor(((now-time) / 86400000));

  if (dayDiff === 0) {
    return ("today");
  } else if (dayDiff === 1) {
    return ("yesterday");
  } else {
    return (`${dayDiff} days ago`);
  }
};
