import request from "@/utils/request";
import request1 from "@/utils/request1";
// import request2 from "@/utils/request2";
// import request3 from "@/utils/request3";
import request4 from "@/utils/request4";
import request5 from "@/utils/request5";
// 百度热搜
export const baiDuHot = () => {
  return request({
    url: `/getbaiduhot/`,
    method: "get",
  });
};

// 百度热搜 官方
export const baiDuHot1 = () => {
  return request1({
    url: `/board?platform=pc&sa=pcindex_a_right`,
    method: "get",
  });
};

// 天气查询
export const Tianqi = (IP) => {
  return request4({
    url: `/weather?ip=${IP}`,

    method: "get",
  });
};

// 天气查询 img
export const Tqimg = () => {
  return request4({
    url: "/ipCard?tip=Hello%20欢迎使用",
    method: "get",
    // 加上responseType
    responseType: "blob",
  });
};

// 微博热搜 VVHAN
export const wbhot = () => {
  return request4({
    url: `/hotlist/wbHot`,
    method: "get",
  });
};

// 抖音热点 VVHAN
export const dyhot = () => {
  // https://api.vvhan.com/api/hotlist?type=douyinHot
  return request4({
    url: `/hotlist?type=douyinHot`,
    method: "get",
  });
};

// 贴吧热议榜 VVHAN
export const tbhot = () => {
  // https://api.vvhan.com/api/hotlist?type=baiduRY
  return request4({
    url: `/hotlist?type=baiduRY`,
    method: "get",
  });
};

// 虎扑-步行街热帖 VVHAN
export const bxjhot = () => {
  // https://api.vvhan.com/api/hotlist?type=huPu
  return request4({
    url: `/hotlist?type=huPu`,
    method: "get",
  });
};

// 淘宝买家秀 VVHAN
export const mjx = () => {
  // https://api.vvhan.com/api/tao
  return request4({
    url: `/tao`,
    method: "get",
    responseType: "blob",
  });
};

// 抖音美女 VVHAN
export const mnsp = () => {
  // https://zj.v.api.aa1.cn/api/video_dyv2
  return request5({
    url: `/video_dyv2/`,
    method: "get",
  });
};

// // 权限创建
// export const postAuthsApi = (params) => {
//   return request({
//     url: `/auth/create.jsp`,
//     method: "post",
//     data: qs.stringify(params),
//   });
// };
