import styled from "styled-components";
import { CategoriesNav, Menu, PhoneNumber, UserInteface } from "../index";
import { NavFlex } from "../../../style/styling/styling";

const HeaderNavBox = styled.div`
  width: 100%;
`;

const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const NavMenu = styled.nav`
  ${NavFlex}
  justify-content: space-between;
`;

export function Nav() {
  return (
    <HeaderNavBox>
      <NavBox>
        <NavMenu>
          <Menu />
          <PhoneNumber />
          <UserInteface />
        </NavMenu>
        <nav>
          <CategoriesNav />
        </nav>
      </NavBox>
    </HeaderNavBox>
  );
}
