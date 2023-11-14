// 百度热搜 官方 
import axios from "axios";

const request1 = axios.create({
  baseURL: process.env.VUE_APP_BAIDU_HOT_API1,
  timeout: 5000,
});

export default request1;
