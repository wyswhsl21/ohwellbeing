import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { __getOhwells } from "../redux/modules/ohsiksSlice";
import EditDadat from "./editDadat";

const MoreInfo = () => {
  // hooks
  const { id } = useParams();
  const ohwell = useSelector((state) => state.ohsiks.ohwell);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getOhwells(id));
  }, [dispatch, id]);

  return (
    <>
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
          <button>수정하기</button>
        </div>
      </InfoBox>
      <EditDadat />
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
