import React from "react";
import styled from "styled-components";

const Ohsik = () => {
  return (
    <Container>
      <SedForm>
        <div>
          <h3>작성자</h3>
          <input type="text" />
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
        <div>
          <h3>내용</h3>
          <input type="text" />
        </div>
      </SedForm>

      <ButtonDiv>
        <button>추가하기</button>
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
