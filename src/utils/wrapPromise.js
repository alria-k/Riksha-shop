import { getData } from "./fetchData";

export function dataFetch() {
  const itemsPromise = getData;
  return {
    items: wrapPromise(itemsPromise),
  };
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  const suspender = promise().then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}
