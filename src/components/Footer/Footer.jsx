import styled from "styled-components";
import {
  Container,
  CategoriesNav,
  Menu,
  PhoneNumber,
  SocialLinks,
} from "../index";

const FooterBox = styled.footer`
  margin-top: 140px;
  background: linear-gradient(#1b1b1b, #1b1b1b);
  background-size: auto 70%;
  background-repeat: no-repeat;
  background-position: bottom;
  color: #ffffff;
  padding: 35px 0 50px 0;
`;

const FooterNavBox = styled.div`
  max-width: 295px;
`;

const FooterInner = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const LogoWhiteImg = styled.img`
  margin-bottom: 40px;
`;

const CopyrightText = styled.p`
  float: right;
  margin-top: 13px;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
`;

export function Footer() {
  return (
    <FooterBox>
      <Container>
        <FooterInner>
          <LogoWhiteImg src="/src/assets/img/logo-white.svg" alt="white-logo" />
          <FooterNavBox>
            <Menu positionFooter={true} />
            <SocialLinks />
          </FooterNavBox>
          <CategoriesNav positionFooter={true} imgAllow={false} />
          <PhoneNumber positionFooter={true} />
        </FooterInner>
        <CopyrightText>© Рикша. Все права защищены.</CopyrightText>
      </Container>
    </FooterBox>
  );
}
