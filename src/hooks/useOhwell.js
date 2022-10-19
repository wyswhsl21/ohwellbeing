import { useState } from "react";

const useOhwell = () => {
  //value 는 state 관리!
  const [ohwell, setOhwell] = useState({
    title: "",
    nickname: "",
    memo: "",
  });

  //핸들러 로직
  const handler = (e) => {
    const { name, value } = e.target;
    setOhwell({ ...ohwell, [name]: value });
  };

  return [ohwell, handler];
};

export default useOhwell;
