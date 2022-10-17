import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
>>>>>>> d609675ef9cc3a43b8b249ea34b120dcc52df238
import styled from "styled-components";

const Dats = () => {
  //hook 정리
  const navigate = useNavigate();
  const ohwell = useSelector((state) => state.ohsik.ohwells);
  console.log(ohwell);

  return (
    <>
      <Title>모두의 OH-WELL-DAT (모두의 웰빙 댓글)</Title>
<<<<<<< HEAD
      <Boxes>
        <span>오늘 나의 웰빙식단!</span>
        <p>작성자:호잇</p>
        <div>
          <Link to={"/info"}>자세히보기</Link>
        </div>
        <button> 🗑️</button>
      </Boxes>
=======

      {ohwell.map((ohwell) => {
        return (
          <Boxes onClick={() => navigate("/info")}>
            <span>{ohwell.title}</span>
            <p>작성자:{ohwell.nickname}</p>
            <p>자세히보기 -> 링크로 설정예정</p>
            <button> 🗑️</button>
          </Boxes>
        );
      })}
>>>>>>> d609675ef9cc3a43b8b249ea34b120dcc52df238
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
