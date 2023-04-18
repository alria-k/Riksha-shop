import classNames from "classnames";
import "./CategoriesNav.scss";

export function CategoriesNav({ swtch = false, handler, currCategory }) {
  const categoriesItems = [
    {
      id: 1,
      name: "Пицца",
      key: "pizza",
      img: "./src/assets/img/categories/pizza.svg",
      alt: "Pizza",
    },
    {
      id: 2,
      name: "Суши",
      key: "sushi",
      img: "./src/assets/img/categories/sushi.svg",
      alt: "Sushi",
    },
    {
      id: 3,
      name: "Роллы",
      key: "rolls",
      img: "./src/assets/img/categories/rolls.svg",
      alt: "Rolle",
    },
    {
      id: 4,
      name: "Сеты",
      key: "sets",
      img: "./src/assets/img/categories/set.svg",
      alt: "Sets",
    },
    {
      id: 5,
      name: "Wok",
      key: "wok",
      img: "./src/assets/img/categories/wok.svg",
      alt: "Wok",
    },
    {
      id: 6,
      name: "Супы",
      key: "soups",
      img: "./src/assets/img/categories/soup.svg",
      alt: "Soup",
    },
    {
      id: 7,
      name: "Салаты",
      key: "salads",
      img: "./src/assets/img/categories/salads.svg",
      alt: "Salads",
    },
    {
      id: 8,
      name: "Десерты",
      key: "deserts",
      img: "./src/assets/img/categories/dessert.svg",
      alt: "Desserts",
    },
    {
      id: 9,
      name: "Напитки",
      key: "drinks",
      img: "./src/assets/img/categories/drink.svg",
      alt: "Drinks",
    },
    {
      id: 10,
      name: "Акции",
      key: "sale",
      img: "./src/assets/img/categories/sale.svg",
      alt: "Sale",
    },
  ];

  return (
    <ul className="nav-flex nav-categories__links">
      {categoriesItems.map((elem) => {
        return (
          <li key={elem.id} className="categories-item">
            <a
              className={classNames({
                "link-text": true,
                "categories-link": true,
                "categories-link--active": swtch && currCategory == elem.key,
              })}
              onClick={(e) => handler(e, elem.key)}
              href="#f"
            >
              <img className="categories-img" src={elem.img} alt={elem.alt} />
              {elem.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
