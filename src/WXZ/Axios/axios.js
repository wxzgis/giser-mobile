import axios from 'axios'
import SERVER_API from '@/config/server-api.js'

namespace.reg('WXZ.Axios');


const get = async (url, params, { outside = false } = {}) => {
  return (await axios.get(outside ? url : `${SERVER_API}${url}`, { params })).data;
}

const post = async (url, params, { outside = false } = {}) => {
  return (await axios.post(outside ? url : `${SERVER_API}${url}`, params)).data;
}

WXZ.Axios = {
  get, post
}
