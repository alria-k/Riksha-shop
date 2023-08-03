import { Link } from "react-router-dom";
import styled from "styled-components";
import { paragraphFont } from "../../style/styling/styling";

const StyledLink = styled(({ positionFooter, ...props }) => (
  <Link {...props} />
))`
  display: block;
  padding: 8px 0;
  ${({ positionFooter }) =>
    positionFooter ? `${paragraphFont}{color: #FFFFFF;}` : `${paragraphFont}`}
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const NavMenuLinks = styled(({ positionFooter, ...props }) => (
  <ul {...props} />
))`
  display: flex;
  align-items: center;
  column-gap: 48px;
  ${({ positionFooter }) =>
    positionFooter && `column-gap: 40px; flex-wrap: wrap; margin-bottom: 12px;`}
`;

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

export function Menu({ positionFooter = false }) {
  return (
    <NavMenuLinks positionFooter={positionFooter}>
      {menuItems.map((elem) => (
        <li key={elem.id}>
          <StyledLink positionFooter={positionFooter} to={elem.href}>
            {elem.text}
          </StyledLink>
        </li>
      ))}
    </NavMenuLinks>
  );
}
