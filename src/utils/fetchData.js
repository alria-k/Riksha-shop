import axios from "axios";

export async function getData() {
  return axios.get("./src/db/items.json").then(({ data }) => data);
}
