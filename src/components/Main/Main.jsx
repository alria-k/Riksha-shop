import { Container, Slider } from "../index";
import { SliderMain } from "./index";
import "./Main.scss";

export function Main() {
  const saleImg = [
    {
      id: "1",
      text: `Вкуснейшие сеты от`,
      discr: "700 ₽",
      src: "./src/assets/img/slider/1.jpg",
      alt: "first-sale",
    },
    {
      id: "2",
      text: `Калифорния в подарок при первом заказе`,
      discr: "от 1500 ₽",
      src: "./src/assets/img/slider/2.jpg",
      alt: "second-sale",
    },
  ];
  return (
    <main className="main">
      <Container>
        <Slider obj={saleImg}>
          <SliderMain obj={saleImg} />
        </Slider>
      </Container>
    </main>
  );
}
