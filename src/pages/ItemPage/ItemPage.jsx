import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Slider, SliderWrapper, Price, Sizes } from "../index";
import "./ItemPage.scss";

export function ItemPage({ data }) {
  const [items] = data.items.read();

  const { category, item } = useParams();

  const indexOfItem = item - 1;
  const currentItem = items[category].items[indexOfItem];

  const [price, setPrice] = React.useState(currentItem.price);
  const [quantity, setQuantity] = React.useState(1);

  function handlerQuantityPlus(e) {
    e.preventDefault();
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }
  function handlerQuantityMinus(e) {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  React.useEffect(() => setPrice(currentItem.price), [currentItem.price]);

  return (
    <div className="itempage__container">
      <Container>
        <div className="itempage__step-back">
          <Link to={`/${category}`} className="step-back__link">
            <svg
              width="33"
              height="12"
              viewBox="0 0 33 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM33 5.25L1 5.25V6.75L33 6.75V5.25Z"
                fill="#E07153"
              />
            </svg>
            <p className="step-back__text">Назад в каталог</p>
          </Link>
        </div>
        <div className="itempage__inner">
          <div className="itempage__info-box">
            <Slider obj={[0, 1, 2]} options={{ margin: 50 }} single={true}>
              {[...Array(3).keys()].map((elem, id) => {
                return (
                  <SliderWrapper key={id}>
                    <img
                      className="item-img"
                      src={`/src/assets/img/categories/${category}/${currentItem.img}`}
                      alt={`${category}-img`}
                    />
                  </SliderWrapper>
                );
              })}
            </Slider>
            <div className="itempage__info">
              <h1 className="catalog__title">{currentItem.text}</h1>
              <p className="itempage__title itempage__weight">
                Вес: <span>{currentItem.gramms} грамм</span>
              </p>
              {currentItem.organic ? (
                <div className="itempage__organic">
                  <table className="itempage__organic-table">
                    <thead>
                      <tr className="organic-table__header">
                        <th className="organic-table__title usual-font-p">
                          Белки
                        </th>
                        <th className="organic-table__title usual-font-p">
                          Углеводы
                        </th>
                        <th className="organic-table__title usual-font-p">
                          Жиры
                        </th>
                        <th className="organic-table__title usual-font-p">
                          Каллорийность
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="organic-table__body">
                        <td className="organic-table__discr">
                          {currentItem.organic.protein}
                        </td>
                        <td className="organic-table__discr">
                          {currentItem.organic.carbs}
                        </td>
                        <td className="organic-table__discr">
                          {currentItem.organic.fats}
                        </td>
                        <td className="organic-table__discr">
                          {currentItem.organic.calories}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                ""
              )}
              <div className="itempage__delivery">
                <img
                  className="delivery-icon"
                  src="/src/assets/img/delivery-icon.svg"
                  alt="delivery-icon"
                />
                <p className="usual-font-p">Доставим за 40 мин</p>
                <Link to="/delivery-payment" className="delivery__link">
                  Условия доставки
                </Link>
              </div>
              <div className="itempage__сomposition">
                <h4 className="itempage__title">Состав:</h4>
                <p className="usual-font-p">{currentItem.disrc}</p>
              </div>
              <div className="itempage__size">
                <h6 className="itempage__title size__title">Размеры</h6>
                <Sizes
                  item={currentItem}
                  price={price}
                  priceSetter={setPrice}
                />
              </div>
              <div className="itempage__price">
                <Price item={currentItem} price={price} quantity={quantity} />
                <div className="itempage__quantity">
                  <button
                    className="quantity-setter quantity-decrease"
                    onClick={handlerQuantityMinus}
                  >
                    -
                  </button>
                  <p className="quantity-text">{quantity}</p>
                  <button
                    className="quantity-setter quantity-increase"
                    onClick={handlerQuantityPlus}
                  >
                    +
                  </button>
                </div>
                <button className="itempage__btn purchase__btn">
                  Заказать
                </button>
              </div>
            </div>
          </div>
          <div className="itempage__buy-with-box"></div>
          <div className="itempage__recomendation-box"></div>
          {/* Component with feedback */}
        </div>
      </Container>
    </div>
  );
}
