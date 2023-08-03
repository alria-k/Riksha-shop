import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { changeCategory } from "../index";
import { navFlex } from "../../style/styling/styling";

const NavigationList = styled(
  ({ positionFooter, categoriesStyles, ...props }) => <ul {...props} />
)`
  justify-content: space-between;
  ${navFlex}
  ${({ categoriesStyles }) =>
    categoriesStyles &&
    `flex-wrap: wrap;
    justify-content: center;
    padding: 18px 12px;
    background: #fff;
    border-radius: 16px;
    margin-bottom: 31px;`}
  ${({ positionFooter }) =>
    positionFooter &&
    `row-gap: 20px;
    column-gap: 40px;
    flex-wrap: wrap;
    max-width: 410px;
    justify-content: flex-start;
    align-self: center;
    `}
`;

const CategoryImg = styled.img`
  margin: 0 auto;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  transition: filter 0.2s ease-in-out;
`;

const CategoryLink = styled(
  ({ categoriesStyles, positionFooter, activeLink, ...props }) => (
    <Link {...props} />
  )
)`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1b1b1b;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      text-decoration: underline;
    }
  }
  ${({ categoriesStyles, activeLink }) =>
    categoriesStyles &&
    `display: flex;
      align-items: center;
      gap: 8px;
      padding: 20px;
      border-radius: 12px;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      ${
        activeLink &&
        `
          background: #E07153;
          box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
          color: white;
          ${CategoryImg}{
            filter: grayscale(100%) brightness(180%);
          }
        `
      }}
      &:hover{
        background: #E07153;
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
        color: white;
          ${CategoryImg}{
            filter: grayscale(100%) brightness(180%);
          }
      }
      `}
  ${({ positionFooter }) =>
    positionFooter &&
    `color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    `}
`;

const categoriesItems = [
  {
    id: 1,
    name: "Пицца",
    key: "pizza",
    img: "/src/assets/img/categories/pizza.svg",
    alt: "Pizza",
  },
  {
    id: 2,
    name: "Суши",
    key: "sushi",
    img: "/src/assets/img/categories/sushi.svg",
    alt: "Sushi",
  },
  {
    id: 3,
    name: "Роллы",
    key: "rolls",
    img: "/src/assets/img/categories/rolls.svg",
    alt: "Rolle",
  },
  {
    id: 4,
    name: "Сеты",
    key: "sets",
    img: "/src/assets/img/categories/set.svg",
    alt: "Sets",
  },
  {
    id: 5,
    name: "Wok",
    key: "wok",
    img: "/src/assets/img/categories/wok.svg",
    alt: "Wok",
  },
  {
    id: 6,
    name: "Супы",
    key: "soups",
    img: "/src/assets/img/categories/soup.svg",
    alt: "Soup",
  },
  {
    id: 7,
    name: "Салаты",
    key: "salads",
    img: "/src/assets/img/categories/salads.svg",
    alt: "Salads",
  },
  {
    id: 8,
    name: "Десерты",
    key: "deserts",
    img: "/src/assets/img/categories/dessert.svg",
    alt: "Desserts",
  },
  {
    id: 9,
    name: "Напитки",
    key: "drinks",
    img: "/src/assets/img/categories/drink.svg",
    alt: "Drinks",
  },
  {
    id: 10,
    name: "Акции",
    key: "sale",
    img: "/src/assets/img/categories/sale.svg",
    alt: "Sale",
  },
];

export function CategoriesNav({
  swtch = false,
  imgAllow = true,
  categoriesStyles = false,
  positionFooter = false,
}) {
  const categories = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  function handleCategory(event, currCategory) {
    if (swtch) {
      event.preventDefault();
    }
    dispatch(changeCategory(currCategory));
  }

  return (
    <NavigationList
      categoriesStyles={categoriesStyles}
      positionFooter={positionFooter}
    >
      {categoriesItems.map((elem) => (
        <li key={elem.id}>
          <CategoryLink
            categoriesStyles={categoriesStyles}
            positionFooter={positionFooter}
            activeLink={elem.key == categories}
            onClick={(e) => handleCategory(e, elem.key)}
            to={elem.key}
          >
            {imgAllow && <CategoryImg src={elem.img} alt={elem.alt} />}
            {elem.name}
          </CategoryLink>
        </li>
      ))}
    </NavigationList>
  );
}
