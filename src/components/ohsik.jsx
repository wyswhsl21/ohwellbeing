import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useOhwell from "../hooks/useOhwell";
import { ohwellApi } from "../mytools/instance";
import { __addOhwell } from "../redux/modules/ohsikSlice";

const Ohsik = () => {
  //value 정리
  const [value, onChangehandler] = useOhwell();
  const {value,setValue}=useState()
  const [memo,setTitle]=useState()
  const [nickname,setTitle]=useState()
  const [titme,setTitle]=useState()
 
  console.log(value);
  //hook 정리
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ohwell = useSelector((state) => state.ohsik);
  console.log(ohwell);
  //핸들러 모음
  const onClickAddFormHandler = () => {
    if (
      value.nickname.trim() === "" ||
      value.title.trim() === "" ||
      value.memo.trim() === ""
    ) {
      return alert("모두 입력해주세요!.");
    } else if (value.time === "선택" || value.time === "") {
      return alert("시간을 선택해주세요!");
    }
    dispatch(__addOhwell(value));
    navigate("/alldat");
  };
  const onTitleChangeHandler=(event)=>{
setTitle(event.target.value)
  }
  const onTitleChangeHandler=(event)=>{
setTitle(event.target.value)
  }
  const onTitleChangeHandler=(event)=>{
setTitle(event.target.value)
  }
  const onTitleChangeHandler=(event)=>{
setTitle(event.target.value)
  }

  return (
    <Container>
      <SedForm>
        <div>
          <h3>작성자</h3>
          <input
            required
            name="nickname"
            value={value.nickname}
            onChange={onChangehandler}
            type="text"
          />
        </div>
        <div>
          <h3>제목</h3>
          <input
            required
            name="title"
            value={value.title}
            onChange={onChangehandler}
            type="text"
          />
        </div>

        <div>
          <h3>오식(Oh-sik)</h3>
          <div>
            <select
              required
              value={value.time}
              onChange={onChangehandler}
              name="time"
            >
              <option>선택</option>
              <option>아침</option>
              <option>점심</option>
              <option>저녁</option>
            </select>
          </div>
        </div>
        <ContentBox>
          <h3>내용</h3>
          <input
            required
            name="memo"
            type="text"
            value={value.memo}
            onChange={onChangehandler}
          />
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
  border: 1px solid none;
  height: 800px;
`;

const SedForm = styled.div`
  border: 5px solid #e8f0fe;
  margin: 30px auto;
  max-width: 1000px;
  width: 90%;
  height: 500px;
  padding-left: 30px;
  input {
    border-radius: 20px;
    outline: darkblue;
    height: 30px;
    border: none;
    background-color: #e8f0fe;
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 960px;
    height: 40px;
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
const SelectBox = styled.div`
  width: 450px;
  height: 50px;
`;
