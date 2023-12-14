import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "../index";
import { Nav } from "./";

const HeaderWrapper = styled.header`
  background: linear-gradient(#f5f5f5, #f5f5f5);
  background-size: auto 52%;
  background-repeat: no-repeat;
  background-position: bottom;
  padding-bottom: 5px;
  margin-bottom: 48px;
`;
const HeaderInner = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 48px;
`;
const StyledImage = styled.img`
  height: 156px;
  width: 135px;
`;

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <Link to={"/"}>
            <StyledImage src="/src/assets/img/logo.svg" alt="logo-icon" />
          </Link>
          <Nav />
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
}
