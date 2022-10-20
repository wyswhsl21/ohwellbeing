import React from "react";
import Router from "./shared/Router";

export default function App() {
<<<<<<< HEAD
=======
  // 배포 환경에서 console.log, console.warn 지우기
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
  }
>>>>>>> 8732b483837699220d98d3860243033dd2b478eb
  return (
    <>
      <Router />
    </>
  );
}
