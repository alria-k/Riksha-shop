import { Link } from "react-router-dom";
import "./Menu.scss";

export function Menu() {
  const menuItems = [
    {
      id: 1,
      text: "О нас",
      href: "about",
    },
    {
      id: 2,
      text: "Доставка и оплата",
      href: "delivery-payment",
    },
    {
      id: 3,
      text: "Контакты",
      href: "contacts",
    },
    {
      id: 4,
      text: "Бонусы",
      href: "bonuses",
    },
    {
      id: 5,
      text: "Вакансии",
      href: "vacancy",
    },
  ];
  return (
    <ul className="nav-flex nav-menu__links">
      {menuItems.map((elem) => {
        return (
          <li key={elem.id} className="menu-item">
            <Link to={elem.href} className="menu-link usual-font-p">
              {elem.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
