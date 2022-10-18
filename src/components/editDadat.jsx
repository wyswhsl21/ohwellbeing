import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";

import styled from "styled-components";

import { useParams } from "react-router-dom";
import { __updateDadat, __postDadat } from "../redux/modules/ohsiksSlice";

import { __deleteDadat } from "../redux/modules/dadatSlice";

const EditDadat = () => {
  // 설렉터
  const comments = useSelector((state) => state.ohsiks.ohwell.dadats);
  console.log(comments);
  // 훅
  const [dadat, dadatChangeHandler] = useInput();
  const [newDadat, setNewDadat] = useState("");
  const [edit, setEdit] = useState(false);
  const { id: ohwellId } = useParams();
  const dispatch = useDispatch();

  //  인풋 박스 값 저장/추가 POST
  const dadatSubmitHandler = () => {
    // if (dadat.nickname.trim() === "" || dadat.memo.trim() === "") return;
    dispatch(__postDadat({ ohwellId, dadat }));
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

  // 대댓글 수정 저장하기 변경하여 저장 patch
  const onClickUpdateHandler = (newDadatId) => {
    const newComments = comments.map((comment) => {
      if (comment.id === newDadatId) {
        return {
          ...comment,
          memo: newDadat,
        };
      } else {
        return comment;
      }
    });
    console.log(newComments);
    dispatch(__updateDadat({ ohwellId, newComments }));
    setNewDadat("");
    setEdit(false);
  };

  return (
    <>
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
      </DadatBox>
      {edit ? (
        <DadatBox>
          <NewComment>
            {/* 대댓  수정하기 누르면 -> 인풋박스로 변경됨*/}

            {comments?.map((mydadats) => (
              <div key={mydadats.id}>
                {/* 대댓 입력상태__ */}
                <div>
                  <span>{mydadats.nickname}</span>
                  <div>
                    <input
                      type="text"
                      placeholder={mydadats.memo}
                      name="memo"
                      value={newDadat.memo}
                      onChange={(ev) => {
                        setNewDadat(ev.target.value);
                      }}
                      // 고쳐야함 -> 지금은 모두 한번에 작동됨
                      disabled={mydadats.id === newDadat.id ? edit : !edit}
                    />
                  </div>
                </div>

                <div>
                  <button onClick={() => onClickUpdateHandler(mydadats.id)}>
                    수정저장
                  </button>
                  <button
                    onClick={() => {
                      setEdit(false);
                    }}
                  >
                    취소
                  </button>
                </div>
              </div>
            ))}
          </NewComment>
        </DadatBox>
      ) : (
        <DadatBox>
          <NewComment>
            {comments?.map((mydadats) => (
              <div key={mydadats.id}>
                {/* 대댓 입력상태__ */}
                <div>
                  <span>{mydadats.nickname}</span>
                  <p>{mydadats.memo}</p>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    수정하기
                  </button>
                  <button onClick={() => dadatDeleteHandler(mydadats.id)}>
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </NewComment>
        </DadatBox>
      )}
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
