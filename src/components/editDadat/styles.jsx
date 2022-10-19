import styled from 'styled-components';

export const DadatBox = styled.div`
  max-width: 1500px;
  width: 85%;
  margin: auto;
`;
export const CommentBox = styled.form`
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

export const NewComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px auto 80px auto;
  div {
    border: 1px solid gray;
    margin: 10px;
  }
`;
export const NickName = styled.div`
  input {
    margin-left: 8px;
  }
`;
export const Dadat = styled.div`
  margin-left: 8px;
  input {
    margin-left: 8px;
    width: 500px;
  }
`;
