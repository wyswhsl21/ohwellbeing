import React from "react";
import styled from "styled-components";

const OhWell = () => {
  return (
    <Container>
      <Nav>
        <Ohbox>오식(oh~sik)</Ohbox>
        <Ohbox>오댓(oh~dat)</Ohbox>
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
