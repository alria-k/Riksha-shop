import styled from "styled-components";

import { Overlay } from "../Overlay/Overlay";
import { CartItem } from "../CartItem/CartItem";
import { Modal } from "../Modal/Modal";
import { navFlex } from "../../style/styling/styling";

const UserIntefaceBox = styled.ul`
  ${navFlex}
  gap: 24px;
`;

const CartBox = styled.li`
  position: relative;
`;

const Cart = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  background: #f5f5f5;
  border-radius: 6px;
  outline: none;
  border: none;
`;

const UserIntefaceList = styled.ul`
  position: relative;
`;

const ModalBox = styled.div`
  position: absolute;
  bottom: -58px;
  right: 0px;
  min-width: 624px;
  width: 100%;
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
const CardImg = styled.img`
  width: 18px;
  height: 21px;
`;
const UserImg = styled.img`
  width: 16px;
  height: 21px;
`;

export function UserInteface() {
  return (
    <UserIntefaceBox>
      <UserIntefaceList>
        <ModalBox>
          <Modal closeBtnAbility={false}>
            <CartItem />
          </Modal>
        </ModalBox>
        <CartBox>
          <Cart>
            <PriceText>0 ₽</PriceText>
            <CartCount>0</CartCount>
            <CardImg src="/src/assets/img/cart.svg" alt="cart" />
          </Cart>
        </CartBox>
      </UserIntefaceList>
      <li>
        <Cart>
          <UserImg src="/src/assets/img/user.svg" alt="user-icon" />
        </Cart>
      </li>
    </UserIntefaceBox>
  );
}
