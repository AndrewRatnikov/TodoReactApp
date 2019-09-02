// Core
import React, { FC } from "react";
import styled from "styled-components";

// Components

const TodoSection = styled.section`
  min-width: 400px;
  min-height: 50px;
  background-color: #fff;
  margin: 10px;
  border-radius: 3px;
  box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
`;

const TodoWrapper: FC = () => {
  return <TodoSection>TODO</TodoSection>;
};

export default TodoWrapper;
