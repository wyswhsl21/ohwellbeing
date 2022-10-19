import React from "react";

const Date = () => {
  const date =
    //   // formatDate(new Date());
    new Date().getFullYear() +
    "." +
    new Date().getMonth() +
    1 +
    "." +
    new Date().getDate() +
    " 오후 " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();
  return date;
};

export default Date;
