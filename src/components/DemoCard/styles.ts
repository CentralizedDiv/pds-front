import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 200px;
  height: 200px;
  border-radius: 25%;
`;

const Label = styled.p`
  font-size: large;
  font-weight: bold;
  color: black;
`;

export default { Card, Label };
