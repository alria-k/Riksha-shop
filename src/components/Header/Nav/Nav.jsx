export function Nav() {
  const menuItems = [
    "О нас",
    "Доставка и оплата",
    "Контакты",
    "Бонусы",
    "Вакансии",
  ];
  const categoriesItems = [
    {
      id: 1,
      name: "Пицца",
      img: "./src/assets/img/categories/pizza.svg",
      alt: "Pizza",
    },
    {
      id: 2,
      name: "Суши",
      img: "./src/assets/img/categories/sushi.svg",
      alt: "Sushi",
    },
    {
      id: 3,
      name: "Роллы",
      img: "./src/assets/img/categories/rolle.svg",
      alt: "Rolle",
    },
    {
      id: 4,
      name: "Сеты",
      img: "./src/assets/img/categories/set.svg",
      alt: "Sets",
    },
    {
      id: 5,
      name: "Wok",
      img: "./src/assets/img/categories/wok.svg",
      alt: "Wok",
    },
    {
      id: 6,
      name: "Супы",
      img: "./src/assets/img/categories/soup.svg",
      alt: "Soup",
    },
    {
      id: 7,
      name: "Салаты",
      img: "./src/assets/img/categories/salads.svg",
      alt: "Salads",
    },
    {
      id: 8,
      name: "Десерты",
      img: "./src/assets/img/categories/dessert.svg",
      alt: "Desserts",
    },
    {
      id: 9,
      name: "Напитки",
      img: "./src/assets/img/categories/drink.svg",
      alt: "Drinks",
    },
    {
      id: 10,
      name: "Акции",
      img: "./src/assets/img/categories/sale.svg",
      alt: "Sale",
    },
  ];
  return (
    <div className="header__nav">
      <div className="nav__box">
        <nav className="nav-menu">
          <ul className="nav-flex nav-menu__links">
            {menuItems.map((elem, index) => {
              return (
                <li key={index} className="menu-item">
                  <a className="menu-link" href="#f">
                    {elem}
                  </a>
                </li>
              );
            })}
          </ul>
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
                <a className="user-interface__link" href="#f">
                  0 ₽
                </a>
              </li>
              <li className="user-interface-cart__item">
                <a
                  className="user-interface__link user-interface-cart"
                  href="#f"
                >
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
          <ul className="nav-flex nav-categories__links">
            {categoriesItems.map((elem) => {
              return (
                <li key={elem.id} className="categories-item">
                  <a className="link-text categories-link" href="#f">
                    <img
                      className="categories-img"
                      src={elem.img}
                      alt={elem.alt}
                    />
                    {elem.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
