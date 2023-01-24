
//
export const toIsoDate = (date) => {
  return [date.getFullYear(), (date.getMonth() + 1).toString().padStart(2, "0"), date.getDate().toString().padStart(2, "0")].join("-")
}

//
export const processData = (data) => {
  console.log("ORIGINAL PROCESS DATA", data);

  let newData = [data];

  console.log("newData", newData);
  return(newData)
};

//
export const secondsToTime = (secs) => {
  const hours = Math.floor(secs / (60 * 60));

  const divisor_for_minutes = secs % (60 * 60);
  const minutes = Math.floor(divisor_for_minutes / 60);

  const obj = hours + "h " + minutes + "m";
  return obj;
}

export const widgetDimensions = {
  Small: "300x300",
  MediusWide: "616x300",
  MediumTall: "300x616",
  Large: "616x616",
}