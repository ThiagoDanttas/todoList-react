import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;

  .image {
    color: #ccc;
    margin-right: 5px;
  }

  input {
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 18px;
    color: #fff;
    flex: 1;
  }
`;
