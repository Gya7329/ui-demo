import { ApiHelper } from "../omsClient/clientApi";
let url = "http://restapi.adequateshop.com/api/authaccount/login";

export const AuthUser = (callback) => {
  return ApiHelper(url)
    .then((result) => {
      callback(result, null);
    })
    .catch((e) => {
      callback(null, e.message);
    });
};
