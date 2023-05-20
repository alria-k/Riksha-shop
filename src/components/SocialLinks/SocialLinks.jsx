import styled from "styled-components";

const SocialMediaBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export function SocialLinks() {
  return (
    <SocialMediaBox>
      <a href="#fb">
        <img
          className="social-media-img"
          src="/src/assets/img/social/facebook.svg"
          alt="facebook-icon"
        />
      </a>
      <a href="#inst">
        <img
          className="social-media-img"
          src="/src/assets/img/social/inst.svg"
          alt="instagram-icon"
        />
      </a>
      <a href="#vk">
        <img
          className="social-media-img"
          src="/src/assets/img/social/vk.svg"
          alt="vk-icon"
        />
      </a>
    </SocialMediaBox>
  );
}
