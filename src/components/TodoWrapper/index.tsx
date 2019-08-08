// Core
import React, { FC } from "react";
import styled from "styled-components";

const TodoSection = styled.section`
  min-width: 400px;
  min-height: 50px;
  background-color: #fff;
  margin: 10px;
  border-radius: 1px;
  box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
`;

const TodoWrapper: FC = () => {
  return <TodoSection>Todo Wrapper</TodoSection>;
};

export default TodoWrapper;
