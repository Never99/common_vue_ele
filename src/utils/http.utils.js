import axios from 'axios';
import Intcp from './http.intcp';

//添加拦截器
Intcp.interceptors();

function axiosPost(url, params) {
  let promise = new Promise((resolve, reject) => {
    axios.post(url, params).then(response => {
      resolve(response.data);
    }).catch(err => {
      console.log(err)
      reject(err);
    });
  })
  return promise;
}

function axiosGet(url, params) {
  let promise = new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then(response => {
      response.data = response.data || {};
      resolve(response.data);

    }).catch(err => {
      reject(err);
    });
  })
  return promise;
}

function axiosDelete(url, params) {
  let promise = new Promise((resolve, reject) => {
    axios.delete(url, params).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err);
    });
  })
  return promise;
}

function axiosPut(url, params) {
  let promise = new Promise((resolve, reject) => {
    axios.put(url, params).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err);
    });
  })
  return promise;
}

export default {
  post: axiosPost,
  get: axiosGet,
  delete: axiosDelete,
  put: axiosPut
}
