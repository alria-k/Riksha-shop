import styled from "styled-components";

import { TitleFont, btnStyles } from "../../../../style/styling/styling";

const SocialTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SocialLink = styled.a`
  ${btnStyles}
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const SocialImgGrid = styled.div`
  height: 520px;
  display: grid;
  gap: 12px;
  grid-template-columns: 300px 300px 300px 300px;
  grid-template-rows: 254px 254px;
  img {
    &:nth-child(4) {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }
    &:nth-child(6) {
      grid-column: 4 / 5;
      grid-row: 1 / 3;
    }
  }
`;
const SocialInstIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const socialImages = [
  {
    id: 1,
    src: "/src/assets/img/reviewIMG/1.png",
    alt: "review-img",
  },
  {
    id: 2,
    src: "/src/assets/img/reviewIMG/2.png",
    alt: "review-img",
  },
  {
    id: 3,
    src: "/src/assets/img/reviewIMG/3.png",
    alt: "review-img",
  },
  {
    id: 4,
    src: "/src/assets/img/reviewIMG/4.png",
    alt: "review-img",
  },
  {
    id: 5,
    src: "/src/assets/img/reviewIMG/5.png",
    alt: "review-img",
  },
  {
    id: 6,
    src: "/src/assets/img/reviewIMG/6.png",
    alt: "review-img",
  },
];

export function SocialMedia() {
  return (
    <div>
      <SocialTextWrapper>
        <TitleFont>
          А вы уже подписались на наш <span>Instagram?</span>
        </TitleFont>
        <SocialLink href="#f">
          <SocialInstIcon
            src="/src/assets/img/social/inst.svg"
            alt="inst-icon"
          />
          <p>@riksha_sushi</p>
        </SocialLink>
      </SocialTextWrapper>
      <SocialImgGrid>
        {socialImages.map(({ id, src, alt }) => (
          <img key={id} src={src} alt={alt} />
        ))}
      </SocialImgGrid>
    </div>
  );
}
