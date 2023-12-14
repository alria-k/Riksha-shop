import styled from "styled-components";

import { catalogTitle } from "../../style/styling/styling";
import { Container, Button } from "../";

const NotFoundImg = styled.img`
  margin: 64px auto 40px;
`;
const NotFoundTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const NotFoundTitle = styled.h1`
  ${catalogTitle}
`;
const NotFoundDiscr = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  max-width: 700px;
  text-align: center;
  margin-bottom: 24px;
`;
const ButtonWrapper = styled.div`
  max-width: 248px;
`;

export function NotFoundPage() {
  return (
    <Container>
      <NotFoundImg src="/src/assets/img/404-error.png" alt="not-found-img" />
      <NotFoundTextWrapper>
        <NotFoundTitle>Страница не найдена</NotFoundTitle>
        <NotFoundDiscr>
          Извините, но страницу, которую Вы пытаетесь найти - не существует.
          Предлагаем Вам перейти на Главную страницу
        </NotFoundDiscr>
        <ButtonWrapper>
          <Button>На главную</Button>
        </ButtonWrapper>
      </NotFoundTextWrapper>
    </Container>
  );
}
