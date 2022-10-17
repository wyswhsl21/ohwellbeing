import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { __deleteOhwell, __getOhwell } from "../redux/modules/ohsikSlice";

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
            <span>{ohwell.title}</span>
            <p>작성자:{ohwell.nickname}</p>
            <p onClick={() => navigate(`/info/${ohwell.id}`)}>
              자세히보기 -> 링크로 설정예정
            </p>
            <button onClick={() => onDeleteClickhandler(ohwell.id)}> 🗑️</button>
          </Boxes>
        );
      })}
    </>
  );
};
export default Dats;

const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin: 20px;
`;

const Boxes = styled.div`
  border: 2px solid olive;
  border-radius: 15px;
  box-shadow: 0 0 0.5em 0 gray;
  border: none;
  height: 50px;
  margin: 30px 20px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    font-style: oblique;
  }
  p {
    color: blue;
  }
  button {
    font-size: 20px;
    background-color: transparent;
    border: none;
    border-radius: 20px;
    &:hover {
      font-size: x-large;
    }
  }
`;
