import { SaleCard } from "../../index";
import "./Sale.scss";

export function Sale({ saleData }) {
  const [sale] = saleData.read();

  const itemsOnOnePage = 3;

  return (
    <div className="sale__container">
      <h1 className="blocks__title">Акции</h1>
      <div className="sale__list">
        {[...Array(itemsOnOnePage).keys()].map((_, index) => {
          return <SaleCard key={index} obj={sale} i={index} />;
        })}
      </div>
    </div>
  );
}
