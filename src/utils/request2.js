// 百度热搜 官方
import axios from "axios";

const request2 = axios.create({
  baseURL: process.env.VUE_APP_WEIBO_HOT_API,
  timeout: 5000,
  // headers: {
  //   Authorization:
  //     "SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9W5835XP.0bAuz5wSxveHBA1; SINAGLOBAL=2355722079302.376.1669130987411; SUB=_2AkMUp_Lyf8NxqwJRmP8TxGnrb4l-yA_EieKi-wMpJRMxHRl-yj92qnQytRB6PyfcHG00fvSg-IR9djyKsHqjg2k6O5lr; _s_tentry=www.baidu.com; Apache=5928802729536.589.1678030762996; ULV=1678030763000:6:1:2:5928802729536.589.1678030762996:1677426117731; XSRF-TOKEN=yjmaaXHAq_ERjeFZY7UjqskZ; UOR=www.baidu.com,s.weibo.com,localhost:8080; WBPSESS=5fStQf4aE0d6e7rh9d-P6gjSYv1cJnfxYec8sXeHEQcRH-57G6P8egxLMHmBheGehjQvmrdt4T0Py_8sMBaR8isPSpDabY_Qwr-Awv6DbPccMGFurpUti7rjXLmNb-3dXjmb8XIRqYwraPflIqD_GJD9TWQ7ExYWWCJt9YOotPQ=; PC_TOKEN=95620b83ff; login_sid_t=ef2554c59b41b21e955a425d55b86e20; cross_origin_proto=SSL; wb_view_log=1920*10801",
  // },
});

export default request2;
