// 百度热搜 官方
import axios from "axios";

const request4 = axios.create({
  baseURL: process.env.VUE_APP_VVHAN,
  timeout: 20000,
});

export default request4;
