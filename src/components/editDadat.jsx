<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
=======
import React, { useState } from "react";
>>>>>>> 44bd29a3694df328e3b7b001008cd18ffbeb9938
import styled from "styled-components";
import {
  __deleteDadat,
  __getDadat,
  __postDadat,
} from "../redux/modules/dadatSlice";

const EditDadat = () => {
  // 설렉터
  const globaldadat = useSelector((state) => state.dadat.dadats);
  // 디스페치
  const dispatch = useDispatch();
  // 훅
  const [dadat, dadatChangeHandler] = useInput();
  // 유즈이펙트
  useEffect(() => {
    dispatch(__getDadat());
  }, [dispatch]);

  //  인풋 박스 값 저장/추가 POST
  const dadatSubmitHandler = () => {
    console.log(dadat);
    if (dadat.nickname.trim() === "" || dadat.memo.trim() === "") return;
    dispatch(__postDadat(dadat));
  };

  // 눌러서 댓글보기의 댓글 삭제하기 Delete
  const dadatDeleteHandler = (id) => {
    const result = window.confirm("정말로 삭제 하시겠습니까?");
    if (result) {
      dispatch(__deleteDadat(id));
    } else {
      return;
    }
  };

<<<<<<< HEAD
=======
const EditDadat = ({ dadats, setDadats }) => {
  // console.log(dadats);
>>>>>>> 44bd29a3694df328e3b7b001008cd18ffbeb9938
  const [newDadat, setNewDadat] = useState({
    memo: "",
  });
  // const newDadatChangeHandler = (event) => {
  //   // if (mydadatId === )
  //   console.log(event);
  //   setNewDadat({ ...newDadat, memo: event.target.value });
  // };
  // // 수정된값으로 변경하여 저장 patch
  // const newDadatEditHandler = async (mydadats) => {
  //   // if (mydadats.memo.trim() === "") return;
  //   const editDadat = await axios.patch(
  //     `http://localhost:3001/dadats/${mydadats.id}`,
  //     mydadats
  //   );
  //   const refresh = dadats.map((mynewdadats) => {
  //     if (mynewdadats.id === mydadats.id) {
  //       return {
  //         ...mynewdadats,
  //         memo: editDadat.data.memo,
  //       };
  //     }
  //     return mynewdadats;
  //   });
  //   setDadats(refresh);
  //   setNewDadat({
  //     memo: "",
  //   });
  // };
  return (
    <>
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
          {globaldadat?.map((mydadats) => (
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
      <DadatBox>
        <NewComment>
          <div>
            <input
              type="text"
              placeholder="테스트용"
              name="memo"
              value={newDadat.memo}
              onChange={(e) => {
                setNewDadat({ ...newDadat, memo: e.target.value });
              }}
            />
            <div>
              <button>수정저장</button>
              {/* <button onClick={() => newDadatEditHandler(mydadats)}>
                수정저장
              </button> */}
              <button>취소</button>
            </div>
          </div>
          {/* 대댓  수정하기 누르면 -> 인풋박스로 변경됨*/}
          {/* {dadats?.map((mydadats) => (
            <div key={mydadats.id}>
              
              <input
                type="text"
                placeholder={mydadats.memo}
                name="memo"
                value={newDadat.memo}
                onChange={newDadatChangeHandler}
              />

              <div>
                <button onClick={() => newDadatEditHandler(mydadats)}>
                  수정저장
                </button>
                <button>취소</button>
              </div>
            </div>
          ))} */}
        </NewComment>
      </DadatBox>
    </>
  );
};

export default EditDadat;

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
