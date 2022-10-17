import React, { useState } from "react";
import styled from "styled-components";

const EditDadat = ({ dadats, setDadats }) => {
  // console.log(dadats);
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
const NewComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px auto 80px auto;
  border: 1px solid gray;
  div {
    margin: 10px;
  }
`;
