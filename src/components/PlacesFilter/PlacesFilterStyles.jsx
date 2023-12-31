import styled from "styled-components";

const FilterContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  @media (min-width: 300px) {
    height: 100%;
    gap: 10px;
  }

  @media (min-width: 768px) {
    height: 23%;
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    height: 18%;
  }

  @media (min-width: 1200px) {
    height: 40%;
    gap: 1rem;
  }
`;

const FilterItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export { FilterContainer, FilterItems, Input };
