import { Container } from "../../index";
import "./About.scss";

export function About() {
  return (
    <div className="about__container">
      <Container>
        <div className="about__inner">
          <div className="about__text-box">
            <h1 className="blocks__title">О компании</h1>
            <p className="about__discr">
              Вкусная доставка Рикша подарит Вам незабываемые вкусовые
              впечатления, украсит любой ваш стол и не заставит себя долго
              ждать. С нами вы сможете забыть о готовке, легко сделать приятное
              родным и близким, устроить вкусный праздник или расслабится в
              кругу друзей. Все блюда готовятся исключительно из свежих
              продуктов и по оригинальным рецептам Нашего шеф-повара. Любая
              позиция из Нашего Меню может оказаться у Вас на столе максимум
              через 60 минут! У вас есть возможность сделать предварительный
              заказ на определенный день и время.
            </p>
          </div>
          <img
            className="about-img"
            src="./src/assets/img/About-img.png"
            alt="about"
          />
        </div>
      </Container>
    </div>
  );
}
