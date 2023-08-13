import styled from "styled-components";

export const FormTag = styled.form`
  box-sizing: border-box;
  padding: 30px;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  background-color: #e6f0ea;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  
`;
export const Input = styled.input`
  margin-top: 5px;
  padding: 5px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #716dbe;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
`;