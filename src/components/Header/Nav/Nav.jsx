import { CategoriesNav, Menu } from "../index";
import "./Nav.scss";

export function Nav() {
  return (
    <div className="header__nav">
      <div className="nav__box">
        <nav className="nav-menu">
          <Menu />
          <ul className="nav-flex nav-info__box">
            <li className="info-item">
              <a className="link-text info-link" href="tel:+74956171424">
                <img
                  className="tel-img"
                  src="./src/assets/img/phone.svg"
                  alt="phone-number"
                />
                +7 (495) 617-14-24
              </a>
            </li>
            <li className="info-item">c 10:00 до 23:00</li>
          </ul>
          <ul className="nav-flex nav-user-interface__box">
            <ul className="nav-flex user-interface-cart__box">
              <li className="user-interface-cart__item">
                <a
                  className="user-interface__link user-interface-cart"
                  href="#f"
                >
                  <p className="user-interface__price" href="#f">
                    0 ₽
                  </p>
                  <div className="user-interface-cart__count">0</div>
                  <img
                    className="user-img"
                    src="./src/assets/img/cart.svg"
                    alt="cart"
                  />
                </a>
              </li>
            </ul>
            <li className="user-interface__item">
              <a className="user-interface__link" href="#f">
                <img
                  className="user-img"
                  src="./src/assets/img/user.svg"
                  alt="user-icon"
                />
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-categories">
          <CategoriesNav />
        </nav>
      </div>
    </div>
  );
}
