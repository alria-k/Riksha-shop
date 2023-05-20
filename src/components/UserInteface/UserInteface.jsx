import styled from "styled-components";
import { NavFlex } from "../../style/styling/styling";

const UserIntefaceBox = styled.ul`
  ${NavFlex}
  gap: 24px;
`;

const CartBox = styled.li`
  position: relative;
`;

const Cart = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  background: #f5f5f5;
  border-radius: 6px;
`;

const CartCount = styled.div`
  position: absolute;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  top: 5px;
  right: 10px;
  z-index: 2;
  background-color: #e07153;
  border-radius: 100%;
  color: white;
`;

const PriceText = styled.p`
  padding: 0 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #1b1b1b;
  border-right: 1px solid #fff;
`;

export function UserInteface() {
  return (
    <UserIntefaceBox>
      <ul>
        <CartBox>
          <Cart href="#f">
            <PriceText href="#f">0 ₽</PriceText>
            <CartCount>0</CartCount>
            <img
              className="cart-img"
              src="/src/assets/img/cart.svg"
              alt="cart"
            />
          </Cart>
        </CartBox>
      </ul>
      <li>
        <Cart className="user-interface__link" href="#f">
          <img
            className="user-img"
            src="/src/assets/img/user.svg"
            alt="user-icon"
          />
        </Cart>
      </li>
    </UserIntefaceBox>
  );
}
