import axios from "axios";

// PRODUCT
export default function requestGetProduct() {
  return axios.request({
    method: "GET",
    url: "http://localhost:8000/api/product",
    params: {},
  });
}

export function requestGetProductCata(id_cata = 1) {
  return axios.request({
    method: "GET",
    url: `http://localhost:8000/api/product/cata/${id_cata}`,
  });
}

//  CATALOGUE
export function requestGetCata() {
  return axios.request({
    method: "GET",
    url: `http://localhost:8000/api/catalogue`,
  });
}

// TYPE PRODUCT
export function requestGetType() {
  return axios.request({
    method: "GET",
    url: `http://localhost:8000/api/types`,
  });
}
