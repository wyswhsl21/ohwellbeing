import { useState } from "react";

const useInput = () => {
  const [dadat, setDadat] = useState({
    nickname: "",
    memo: "",
    ohwellId: 0,
  });

  const dadatChangeHandler = (event) => {
    const { name, value } = event.target;
    setDadat({ ...dadat, [name]: value });
  };
  return [dadat, setDadat, dadatChangeHandler];
};

export default useInput;
