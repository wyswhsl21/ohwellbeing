import { useState } from "react";

const useInput = () => {
  const [dadat, setDadat] = useState({
    nickname: "",
    memo: "",
  });

  const dadatChangeHandler = (event) => {
    const { name, value } = event.target;
    setDadat({ ...dadat, [name]: value });
  };
  return [dadat, dadatChangeHandler];
};

export default useInput;
