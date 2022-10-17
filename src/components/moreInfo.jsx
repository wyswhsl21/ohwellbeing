import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const MoreInfo = () => {
  const [dadat, dadatChangeHandler] = useInput();

  return (
    <>
      <InfoBox>
        <div>
          <div>
            <Link to={"/"}>이전으로</Link>
          </div>

          <p>2022.10.15 오후9:20</p>
          <h2>오늘 나의 웰빙식단!</h2>
          <h4>고구마1개 닭가슴살100g 우유1컵</h4>
        </div>
        <div>
          <button>수정하기</button>
        </div>
      </InfoBox>
      <DadatBox>
        <hr />
        <h3>눌러서댓글보기</h3>
        <hr />
        <CommentBox onSubmit={dadatSubmitHandler}>
          <div>
            <NickName>
              이름 :
              <input
                type="text"
                placeholder="5글자이하"
                name="nickname"
                value={dadat.nickname}
                onChange={dadatChangeHandler}
              />
            </NickName>
            <Dadat>
              내용 :
              <input
                type="text"
                placeholder="20글자이하"
                name="memo"
                value={dadat.memo}
                onChange={dadatChangeHandler}
              />
            </Dadat>
          </div>
          <button>추가하기</button>
        </CommentBox>
        <NewComment>
          <div>
            <span>닉네임</span>
            <p>댓글남겨주세용</p>
          </div>
          <div>
            <button>수정하기</button>
            <button>삭제</button>
          </div>
        </NewComment>
      </DadatBox>
    </>
  );
};
export default MoreInfo;

const InfoBox = styled.div`
  border: 2px solid olive;
  border-radius: 15px;
  max-width: 1000px;
  width: 80%;
  height: 300px;
  margin: 100px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h3 {
    margin: 10px;
  }
  span {
    color: blue;
    float: right;
  }
  button {
    max-width: 1000px;
    width: 80%;
    align-items: center;
    background-color: transparent;
  }
`;
const DadatBox = styled.div`
  max-width: 1500px;
  width: 85%;
  margin: auto;
`;
const CommentBox = styled.form`
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  button {
    background-color: transparent;
    border-radius: 15px;
  }
`;

const NewComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid gray;
  margin: 30px auto 80px auto;
`;
const NickName = styled.div`
  input {
    margin-left: 8px;
  }
`;
const Dadat = styled.div`
  margin-left: 8px;
  input {
    margin-left: 8px;
    width: 500px;
  }
`;
