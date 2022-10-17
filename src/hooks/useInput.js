import React, { useState } from "react";

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

// const useInputTwo = () => {
//   const [newDadat, setNewDadat] = useState({
//   nickname: "",
//     memo: "",
// })

// const dadatEditHandler = (event) => {
//   const { name, value } = event.target;
//   setNewDadat({ ...newDadat, [name]: value });
// };
// return [newDadat, dadatChangeHandler];
// };
// }
// export default useInputTwo;
