import axios from "axios";

export async function getData() {
  return axios.get("./src/db/items.json").then(({ data }) => data);
}

export async function getSale() {
  return axios.get("./src/db/sale.json").then(({ data }) => data);
}
