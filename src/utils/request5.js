// 百度热搜 官方
import axios from "axios";

const request5 = axios.create({
  baseURL: process.env.VUE_APP_ZJAPI,
  timeout: 10000,
});

export default request5;
