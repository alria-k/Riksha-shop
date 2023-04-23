import { useParams } from "react-router-dom";
import { ItemCard, CategoryPageRedict } from "../MainPage";

import "./ItemPage.scss";

//сделать хлебные крошки (bread crumbs)

export function ItemPage({ data }) {
  const { category } = useParams();
  const [items] = data.items.read();
  return;
}
