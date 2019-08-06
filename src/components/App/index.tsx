// Core
import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";

// Components
import Header from "../Header";

const MainWrapper = styled.div`
  display: flex;
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
      </MainWrapper>
    </Fragment>
  );
};

export default App;
