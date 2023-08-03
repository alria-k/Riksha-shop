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
  color: #ffffff;
  padding: 32px 0 19px 0;
  background: #1b1b1b;
`;

const FooterNavBox = styled.div`
  max-width: 295px;
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 88px;
  margin-bottom: 20px;
  position: relative;
`;

const LogoWhiteImg = styled.img`
  position: absolute;
  top: -70px;
  left: 0;
`;

const CopyrightText = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  margin: 13px 0 0 auto;
  width: fit-content;
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
