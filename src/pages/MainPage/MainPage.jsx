import React from "react";
import styled from "styled-components";

import {
  Advantages,
  SliderMain,
  NewItems,
  Sale,
  Categories,
  About,
  SocialMedia,
} from "./index";
import { Container } from "../index";

const MainWrapper = styled.main`
  margin-bottom: 187px;
`;

export function MainPage() {
  return (
    <MainWrapper>
      <Container>
        <SliderMain />
        <Advantages />
        <NewItems />
        <Sale />
        <Categories />
      </Container>
      <About />
      <Container>
        <SocialMedia />
      </Container>
    </MainWrapper>
  );
}
