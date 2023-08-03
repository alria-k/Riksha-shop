import styled from "styled-components";
import { navFlex } from "../../style/styling/styling";

const PhoneNumberBox = styled.ul`
  ${navFlex}
  flex-direction: column;
  align-items: flex-end;
  align-self: center;
  gap: 3px;
`;

const InfoList = styled.li`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #b7b7b7;
`;

const PhoneLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1b1b1b;
  display: flex;
  align-items: center;
  gap: 8px;
  ${(props) =>
    props.positionFooter &&
    "font-weight: 700; font-size: 24px; line-height: 30px; color: #FFFFFF;"}
`;

export function PhoneNumber({ positionFooter = false }) {
  return (
    <PhoneNumberBox>
      <InfoList>
        <PhoneLink positionFooter={positionFooter} href="tel:+74956171424">
          {!positionFooter && (
            <img
              className="tel-img"
              src="/src/assets/img/phone.svg"
              alt="phone-number"
            />
          )}
          +7 (495) 617-14-24
        </PhoneLink>
      </InfoList>
      <InfoList>c 10:00 до 23:00</InfoList>
    </PhoneNumberBox>
  );
}
