import React from "react";
import { useSelector } from "react-redux";
import { Container, Sortby, CategoriesList, Filterby } from "../index";
import "./Catalog.scss";

export function Catalog({ data }) {
  const categories = useSelector((state) => state.category.category);

  const [items] = data.items.read();

  return (
    <div className="catalog__container">
      <Container>
        <div className="catalog__title">{items[categories].title}</div>
        {/* add bread crumbs */}
        <React.Suspense fallback={<div>hello</div>}>
          <Filterby obj={data} />
        </React.Suspense>
        <React.Suspense fallback={<div>hello</div>}>
          <Sortby obj={data} />
        </React.Suspense>
        <React.Suspense fallback={<div>hello</div>}>
          <CategoriesList obj={data} />
        </React.Suspense>
        {/* add 'about' component */}
      </Container>
    </div>
  );
}
