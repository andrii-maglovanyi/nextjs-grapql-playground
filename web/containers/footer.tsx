import { useState, createContext } from "react";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.header`
  background-color: white;
  box-shadow: var(--primary-shadow);
  display: grid;
  font-size: 0.7rem;
  grid-template-columns: calc(90px + 3rem) auto;
  line-height: 2rem;
  margin-top: auto;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  z-index: 999;
`;

const Footer: React.FC = () => {
  return <Wrapper>2020</Wrapper>;
};

export default Footer;
