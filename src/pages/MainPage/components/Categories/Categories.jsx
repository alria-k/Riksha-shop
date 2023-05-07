import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CategoriesNav, CategoriesList } from "../../index";
import "./Categories.scss";

export function Categories({ obj }) {
  const categories = useSelector((state) => state.category.category);

  return (
    <div className="categories__container">
      <h1 className="blocks__title">Категории</h1>
      <CategoriesNav swtch={true} />
      <CategoriesList obj={obj} />
      <Link to={categories} className="categories__link">
        Перейти в каталог
        <svg
          width="33"
          height="12"
          viewBox="0 0 33 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-icon arrow--right"
        >
          <path
            d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM33 5.25L1 5.25V6.75L33 6.75V5.25Z"
            fill="#C95C3F"
          />
        </svg>
      </Link>
    </div>
  );
}
