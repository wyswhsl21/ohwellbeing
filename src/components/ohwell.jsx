import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const OhWell = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Nav>
        <Ohbox
          onClick={() => {
            navigate("/ohsik");
          }}
        >
          오식(oh~sik)
        </Ohbox>
        <Ohbox
          onClick={() => {
            navigate("/alldat");
          }}
        >
          오댓(oh~dat)
        </Ohbox>
      </Nav>
      <div>
        <div>그림</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  align-items: center;
  height: 100vh;

  margin: auto;
  border: 1px solid black;
`;
const Header = styled.div`
  background: transparent;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.nav`
  background-color: transparent;
  display: flex;
  height: 200px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;
const Ohbox = styled.div`
  border: 1px solid black;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
`;
export default OhWell;
