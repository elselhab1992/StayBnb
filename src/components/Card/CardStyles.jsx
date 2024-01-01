import styled from "styled-components";

const Content = styled.div`
  border-radius: 10px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  filter: brightness(80%);
`;

const Info = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 999;
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export { Content, Img, Info };
