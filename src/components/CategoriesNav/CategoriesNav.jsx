import "./CategoriesNav.scss";

export function CategoriesNav() {
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
      img: "./src/assets/img/categories/rolls.svg",
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
    <ul className="nav-flex nav-categories__links">
      {categoriesItems.map((elem) => {
        return (
          <li key={elem.id} className="categories-item">
            <a className="link-text categories-link" href="#f">
              <img className="categories-img" src={elem.img} alt={elem.alt} />
              {elem.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
