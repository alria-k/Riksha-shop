import "./SocialMedia.scss";

export function SocialMedia() {
  return (
    <div className="social__container">
      <div className="social__text-box">
        <h1 className="blocks__title">
          А вы уже подписались на наш <span>Instagram?</span>
        </h1>
        <a className="social__link purchase__btn " href="#f">
          <img
            className="inst-icon"
            src="/src/assets/img/social/inst.svg"
            alt="inst-icon"
          />
          <p>@riksha_sushi</p>
        </a>
      </div>
      <div className="social__img-box">
        <img
          className="social-img"
          src="/src/assets/img/reviewIMG/1.png"
          alt="review-img"
        />
        <img
          className="social-img"
          src="/src/assets/img/reviewIMG/2.png"
          alt="review-img"
        />
        <img
          className="social-img"
          src="/src/assets/img/reviewIMG/3.png"
          alt="review-img"
        />
        <img
          className="social-img"
          src="/src/assets/img/reviewIMG/4.png"
          alt="review-img"
        />
        <img
          className="social-img"
          src="/src/assets/img/reviewIMG/5.png"
          alt="review-img"
        />
        <img
          className="social-img"
          src="/src/assets/img/reviewIMG/6.png"
          alt="review-img"
        />
      </div>
    </div>
  );
}
