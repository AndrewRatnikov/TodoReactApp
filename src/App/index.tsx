// Core
import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";

// Components
import Header from "../components/Header";
import TodoWrapper from "../components/TodoWrapper";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f2f3f4;
`;

const App: FC = () => {
  return (
    <Fragment>
      <Reset />
      <MainWrapper>
        <Header />
        <TodoWrapper />
      </MainWrapper>
    </Fragment>
  );
};

export default App;
