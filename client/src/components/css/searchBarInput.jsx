import styled from "styled-components";

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 80%;
  height: 50px;
  margin-left: "1rem";
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  outline: none;
  &::placeholder {
    color: white;
  }
`;
export default Input;
