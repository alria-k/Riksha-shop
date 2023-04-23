import { Container, CategoriesNav, Menu } from "../index";
import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <img
            className="logo-white-img"
            src="./src/assets/img/logo-white.svg"
            alt=""
          />
          <div className="footer__menu">
            <Menu />
            <div className="footer__social-media">
              <a className="footer__social-link" href="">
                <img
                  className="social-media-img"
                  src="./src/assets/img/social/facebook.svg"
                  alt="facebook-icon"
                />
              </a>
              <a className="footer__social-link" href="">
                <img
                  className="social-media-img"
                  src="./src/assets/img/social/inst.svg"
                  alt="instagram-icon"
                />
              </a>
              <a className="footer__social-link" href="">
                <img
                  className="social-media-img"
                  src="./src/assets/img/social/vk.svg"
                  alt="vk-icon"
                />
              </a>
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
