import axios from "axios";
import { wrapPromise } from "./wrapPromise";

export function getGoods() {
  const promise = axios.get("/src/db/items.json").then(({ data }) => data);
  return wrapPromise(promise);
}

export function getSale() {
  const promise = axios.get("/src/db/sale.json").then(({ data }) => data);
  return wrapPromise(promise);
}
