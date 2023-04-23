import { Container, CategoriesNav } from "../index";
import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <img
            className="logo-img"
            src="./src/assets/img/logo-white.svg"
            alt=""
          />
          <div className="footer__menu">
            <div className="footer__menu-box">
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="#f">
                    О нас
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="#f">
                    Доставка и оплата
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-link" href="#f">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__social-media">
              <img
                className="social-media-img"
                src="./src/assets/img/social/facebook.svg"
                alt="social-media-icon"
              />
              <img
                className="social-media-img"
                src="./src/assets/img/social/inst.svg"
                alt="social-media-icon"
              />
              <img
                className="social-media-img"
                src="./src/assets/img/social/vk.svg"
                alt="social-media-icon"
              />
            </div>
          </div>
          <div className="footer__nav">
            <CategoriesNav imgAllow={false} />
          </div>
          <div className="footer__contact">
            <a className="footer__phone-number" href="tel:+74956171424">
              +7 (495) 617-14-24
            </a>
            <p className="footer__time-schedule">c 10:00 до 23:00</p>
          </div>
        </div>
        <p className="footer__copyright">© Рикша. Все права защищены.</p>
      </Container>
    </footer>
  );
}
