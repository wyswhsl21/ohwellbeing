import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deleteOhwell, __getOhwell } from "../../redux/modules/ohsikSlice";
import { Title, Boxes } from "./styles";

const Dats = () => {
  //hook 정리
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ohwell = useSelector((state) => state.ohsik.ohwells);
  console.log(ohwell);

  //useEffect 정리
  useEffect(() => {
    dispatch(__getOhwell());
  }, [dispatch]);
  //handler 정리
  const onDeleteClickhandler = (id) => {
    const result = window.confirm("정말로 삭제 하시겠습니까?");
    if (result) {
      // axios.delete(`http://localhost:3001/ohwell/${id}`);
      dispatch(__deleteOhwell(id));
    } else {
      return;
    }
  };

  return (
    <>
      <Title>모두의 OH-WELL-DAT (모두의 웰빙 댓글)</Title>

      {ohwell?.map((ohwell) => {
        return (
          <Boxes key={ohwell.id}>
            <div>
              <h4>{ohwell.title}</h4>
              <br />
              작성자:{ohwell.nickname}
            </div>
            🥗🥪🍚🥣🍠🍽️
            <p onClick={() => navigate(`/info/${ohwell.id}`)}>자세히보기</p>
            <button onClick={() => onDeleteClickhandler(ohwell.id)}>
              {" "}
              🗑️{" "}
            </button>
          </Boxes>
        );
      })}
    </>
  );
};
export default Dats;
