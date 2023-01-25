import React from "react";

//
export const processData = (data, j) => {
  const newDataObj = { "summary_date": data.summary_date, "awake": data.awake, "light": data.light,"rem": data.rem, "deep": data.deep , "total": data.total,};

  let newData = [newDataObj];
  let newArray= []

  let newDate = new Date(data.summary_date);

  for (let i = 0; i < j; i++) {
    const yesterdayTS = newDate.setDate(newDate.getDate() - 1);
    let newDayData = Object.assign({}, newDataObj);
    newDayData.summary_date = new Date(yesterdayTS).toISOString().split("T")[0];
    newArray.push(newDayData);
    newDate = new Date(yesterdayTS);
  }

  return(newArray)
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

//
export const DataProvider = (props) => {
  console.log(props)
  return (
    <>
      {React.Children.map(props.children, child => {
        if(!child) return
        return React.cloneElement(child, { ...props });
      })}
    </>
  )
}

//
export const toIsoDate = (date) => {
  return [date.getFullYear(), (date.getMonth() + 1).toString().padStart(2, "0"), date.getDate().toString().padStart(2, "0")].join("-")
}