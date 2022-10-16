import React, { useState } from "react";

const useOhwell = () => {
  //value 는 state 관리!
  const [value, setValue] = useState("");

  //핸들러 로직
  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler];
};

export default useOhwell;
