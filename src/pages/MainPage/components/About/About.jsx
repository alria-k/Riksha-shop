import styled from "styled-components";

import { TitleFont } from "../../../../style/styling/styling";
import { Container } from "../../index";

const AboutWrapper = styled.div`
  margin-bottom: 148px;
  background-image: url("/src/assets/img/About-img-bg.png");
  background-repeat: no-repeat;
  background-position: center right 4%;
`;
const AboutInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AboutTextBox = styled.div`
  max-width: 553px;
`;
const AboutText = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 160%;
  color: #1b1b1b;
`;

export function About() {
  return (
    <AboutWrapper>
      <Container>
        <AboutInner>
          <AboutTextBox>
            <TitleFont>О компании</TitleFont>
            <AboutText>
              Вкусная доставка Рикша подарит Вам незабываемые вкусовые
              впечатления, украсит любой ваш стол и не заставит себя долго
              ждать. С нами вы сможете забыть о готовке, легко сделать приятное
              родным и близким, устроить вкусный праздник или расслабится в
              кругу друзей. Все блюда готовятся исключительно из свежих
              продуктов и по оригинальным рецептам Нашего шеф-повара. Любая
              позиция из Нашего Меню может оказаться у Вас на столе максимум
              через 60 минут! У вас есть возможность сделать предварительный
              заказ на определенный день и время.
            </AboutText>
          </AboutTextBox>
          <img src="/src/assets/img/About-img.png" alt="about" />
        </AboutInner>
      </Container>
    </AboutWrapper>
  );
}
