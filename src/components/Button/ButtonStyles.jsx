import styled from "styled-components";

const Buttons = styled.button`
  width: 130px;
  background-color: ${(props) => props.theme.colors.buttons};
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  padding: 15px;
  border-radius: 20px;
  border: 0;
  transition: 700ms;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.buttons};
    cursor: pointer;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.buttons};
  }
`;

export default Buttons;
