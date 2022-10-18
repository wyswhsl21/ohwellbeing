import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { __getOhwells, __updateOhwells } from "../redux/modules/ohsiksSlice";
import EditDadat from "./editDadat";

const MoreInfo = () => {
  // hooks
  const { id } = useParams();
  const ohwell = useSelector((state) => state.ohsiks.ohwell);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState("");
  console.log(id);

  const onClickUpdateHandler = () => {
    if (update.trim() === "") {
      return alert("수정 할 내용이 없습니다.");
    }
    dispatch(__updateOhwells({ ...ohwell, memo: update }));
    setEdit(false);
    setUpdate("");
  };

  useEffect(() => {
    dispatch(__getOhwells(id));
  }, [dispatch, id]);

  // useEffect(() => {
  //   setUpdate(ohwell.memo);
  // }, []);

  return (
    /// 수정 버튼 작업 공간
    <>
      {edit ? (
        <InfoBox>
          <div>
            <div>
              <Link to={"/alldat"}>이전으로</Link>
            </div>
            <p>2022.10.15 오후9:20</p>
            <h2>{ohwell?.title}</h2>
            <textarea
              name="memo"
              maxLength={200}
              value={update}
              onChange={(e) => {
                setUpdate(e.target.value);
              }}
            >
              <h4>{ohwell?.memo}</h4>
            </textarea>
          </div>
          <div>
            <button onClick={onClickUpdateHandler}>저장 하기</button>
          </div>
        </InfoBox>
      ) : (
        <InfoBox>
          <div>
            <div>
              <Link to={"/alldat"}>이전으로</Link>
            </div>

            <p>2022.10.15 오후9:20</p>
            <h2>{ohwell?.title}</h2>
            <h4>{ohwell?.memo}</h4>
          </div>
          <div>
            <button
              onClick={() => {
                setEdit(true);
              }}
            >
              수정하기
            </button>
          </div>
        </InfoBox>
      )}
      <EditDadat ohwellId={id} />
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
