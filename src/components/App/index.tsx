// Core
import React, { FC } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f2f3f4;
`;

const App: FC = () => {
  return <MainWrapper>TODO App</MainWrapper>;
};

export default App;
