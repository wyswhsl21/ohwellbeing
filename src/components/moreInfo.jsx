import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EditDadat from "./editDadat";
// import useInput from "../hooks/useInput";
// import { dadatApi } from "../mytools/instance";

const MoreInfo = () => {
  // 인풋 박스 값 임력
  const [dadat, setDadat] = useState({
    nickname: "",
    memo: "",
  });

  const dadatChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log({ name, value });
    setDadat({ ...dadat, [name]: value });
  };
  // const [dadat, dadatChangeHandler] = useInput();
  // console.log(dadat);

  //  인풋 박스 값 저장/추가 POST
  const [dadats, setDadats] = useState(null);
  const dadatSubmitHandler = async (dadat) => {
    console.log(dadat);
    if (dadat.nickname.trim() === "" || dadat.memo.trim() === "") return;
    const postDadats = await axios.post("http://localhost:3001/dadats", dadat);
    console.log(postDadats);
    setDadats([...dadats, postDadats.data]);
    setDadat({
      nickname: "",
      memo: "",
    });
  };

  // 눌러서 댓글보기의 댓글 GET
  const fetchDatas = async () => {
    const getDadats = await axios.get("http://localhost:3001/dadats");
    // console.log(getDadats);
    setDadats(getDadats.data);
  };

  // 눌러서 댓글보기의 댓글 삭제하기 Delete
  const dadatDeleteHandler = async (dadatId) => {
    await axios.delete(`http://localhost:3001/dadats/${dadatId}`);
    const delDadat = dadats.filter((delId) => delId.id !== dadatId);
    console.log(delDadat);
    setDadats(delDadat);
  };

  // fetchTodos함수가 실행될때 한번만 이일이 실행되도록 해준다
  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <>
      <InfoBox>
        <div>
          <div>
            <Link to={"/alldat"}>이전으로</Link>
          </div>

          <p>2022.10.15 오후9:20</p>
          <h2>오늘 나의 웰빙식단!</h2>
          <h4>고구마1개 닭가슴살100g 우유1컵</h4>
        </div>
        <div>
          <button>수정하기</button>
        </div>
      </InfoBox>

      {/* 눌러서 댓글보기 페이지 ---> dadat(대댓글) */}
      <DadatBox>
        <hr />
        <h3>눌러서댓글보기</h3>
        <hr />
        <CommentBox
          onSubmit={(e) => {
            e.preventDefault();
            dadatSubmitHandler(dadat);
          }}
        >
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
          {dadats?.map((mydadats) => (
            <div key={mydadats.id}>
              {/* 대댓 입력상태__ */}
              <div>
                <span>{mydadats.nickname}</span>
                <p>{mydadats.memo}</p>
              </div>

              <div>
                <button>수정하기</button>
                <button onClick={() => dadatDeleteHandler(mydadats.id)}>
                  삭제
                </button>
              </div>
            </div>
          ))}
        </NewComment>
      </DadatBox>
      <EditDadat dadats={dadats} setDadats={setDadats} />
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
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const NewComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px auto 80px auto;
  div {
    border: 1px solid gray;
    margin: 10px;
  }
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
