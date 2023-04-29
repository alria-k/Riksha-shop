import React from "react";
import { SaleCard } from "../../index";
import "./Sale.scss";

export function Sale({ obj }) {
  return (
    <div className="sale__container">
      <h1 className="blocks__title">Акции</h1>
      <div className="sale__list">
        <React.Suspense fallback={<div>hello</div>}>
          <SaleCard obj={obj} />
        </React.Suspense>
      </div>
    </div>
  );
}
