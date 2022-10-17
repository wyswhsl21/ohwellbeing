import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import useOhwell from "../hooks/useOhwell";
import { addMemo } from "../redux/modules/ohsikSlice";

const Ohsik = () => {
  //value 정리
  const [title, onChangeTitlehandler] = useOhwell();
  const [memo, onChangeMemohandler] = useOhwell();
  const [nickname, onChangeNicknamehandler] = useOhwell();
  const value = [nickname, title, memo];
  console.log(value);
  //hook 정리
  const dispatch = useDispatch();
  const ohwell = useSelector((state) => state.ohsik);
  console.log(ohwell);
  //핸들러 모음
  const onClickAddFormHandler = (memo) => {
    dispatch(addMemo(memo));
  };

  return (
    <Container>
      <SedForm>
        <div>
          <h3>작성자</h3>
          <input
            value={nickname}
            onChange={onChangeNicknamehandler}
            type="text"
          />
        </div>
        <div>
          <h3>제목</h3>
          <input value={title} onChange={onChangeTitlehandler} type="text" />
        </div>

        <div>
          <h3>오식(Oh-sik)</h3>
          <div>
            <select name="time">
              <option value="1">아침</option>
              <option value="2">점심</option>
              <option value="3">저녁</option>
            </select>
          </div>
        </div>
        <ContentBox>
          <h3>내용</h3>
          <input type="text" value={memo} onChange={onChangeMemohandler} />
        </ContentBox>
      </SedForm>

      <ButtonDiv>
        <button
          onClick={() => {
            onClickAddFormHandler(value);
          }}
        >
          추가하기
        </button>
      </ButtonDiv>
    </Container>
  );
};

export default Ohsik;

const Container = styled.div`
  border: 1px solid red;
  height: 800px;
`;

const SedForm = styled.div`
  border: 1px solid olive;
  margin: 30px auto;
  max-width: 1000px;
  width: 80%;
  height: 500px;
  padding-left: 30px;
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 960px;
    height: 30px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    box-shadow: 0 0 0.5em 0 gray;
    transition: background-color, 5s;
    &:hover {
      background-color: #1667bd36;
    }
  }
`;
const ContentBox = styled.div`
  input {
    width: 600px;
    height: 150px;
  }
`;
