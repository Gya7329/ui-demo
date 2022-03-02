import { ApiHelper } from "../omsClient/clientApi";
let url = "https://fakestoreapi.com/products";

export const getProduct = (callback) => {
  return ApiHelper(url)
    .then((product) => {
      callback(product, null);
    })
    .catch((e) => {
      callback(null, e.message);
    });
};
