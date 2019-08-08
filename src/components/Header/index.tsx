// Core
import React, { FC } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 5em;
  color: rgba(255, 255, 0, 0.5);
`;

const Header: FC<{ title?: string }> = ({ title }) => {
  return <H1>{title}</H1>;
};

Header.defaultProps = {
  title: "TODO.APP"
};

export default Header;
