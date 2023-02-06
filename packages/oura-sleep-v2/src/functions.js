import React from "react";

//
export const secondsToTime = (secs) => {
  const hours = Math.floor(secs / (60 * 60));

  const divisor_for_minutes = secs % (60 * 60);
  const minutes = Math.floor(divisor_for_minutes / 60);

  const obj = hours + "h " + minutes + "m";
  return obj;
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