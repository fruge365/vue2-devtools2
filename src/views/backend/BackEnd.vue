<template>
  <!-- 后端常用网站 -->
  <div class="backend">
    <!-- 后端常用网站 -->
    <div v-for="(item, i) in dataList" :key="i" class="item1">
      <div class="topic">
        <img :src="item.ico" alt="item.name" srcset="" />
        {{ item.name }}
      </div>
      <div class="bottom">
        <el-card
          class="box-card"
          v-for="(item2, i2) in item.children"
          :key="i2"
          @click.native="JumpFn(item2.url)"
          :title="item2.title"
        >
          <div class="left">
            <!-- <img :src="item2.ico" alt="item2.title" class="icon" /> -->
            <img
              v-lazy="item2.ico"
              alt="item2.title"
              class="icon"
              :key="item2.ico"
            />
            <div class="content">
              <span class="name">{{ item2.name }}</span>
              <br />
              <span class="title"> {{ item2.title }}</span>
            </div>
          </div>
          <i class="el-icon-arrow-right right" title="直达"></i>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          id: "houduan",
          name: "后端",
          ico: "http://www.amoureux555.xyz/JAVA/%E5%90%8E%E7%AB%AF.png",
          children: [
            {
              ico: "http://www.amoureux555.xyz/JAVA/java%E5%AD%A6%E4%B9%A0.ico",
              name: "Java 学习",
              title: "学习笔记",
              url: "https://mrjokersince1997.github.io/My-Notes/#/",
            },
          ],
        },
        {
          id: "kaifagongju",
          name: "开发工具篇",
          ico: "http://www.amoureux555.xyz/JAVA/tools.png",
          children: [
            {
              ico: "http://www.amoureux555.xyz/JAVA/jdk.png",
              name: "JDK",
              title: "JDK",
              url: "https://www.oracle.com/java/technologies/downloads/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/jdk.png",
              name: "JavaSE 开发文档",
              title: "目前没有中文文档",
              url: "https://www.oracle.com/cn/java/technologies/java-se-api-doc.html",
            },
            {
              ico: "http://rq2l4zm0j.hd-bkt.clouddn.com/JAVA/jdk.png",
              name: "Oracle数据库",
              title: "收费",
              url: "https://www.oracle.com/database/technologies/oracle-database-software-downloads.html#19c",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/MySQL%E6%95%B0%E6%8D%AE%E5%BA%93.ico",
              name: "MySQL数据库",
              title: "免费",
              url: "https://dev.mysql.com/downloads/mysql/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Redis.png",
              name: "Redis",
              title: "缓存",
              url: "https://redis.io/download/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/MongoDB.ico",
              name: "MongoDB",
              title: "MongoDB",
              url: "https://www.mongodb.com/try/download/community",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/jdk.png",
              name: "JDBC",
              title: "JDBC",
              url: "https://www.oracle.com/database/technologies/appdev/jdbc.html",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Druid%E8%BF%9E%E6%8E%A5%E6%B1%A0.png",
              name: "Druid连接池",
              title: "Druid连接池",
              url: "https://druid.apache.org/downloads.html",
            },
            // {
            //   ico: "http://rq2l4zm0j.hd-bkt.clouddn.com/JAVA/Druid%E8%BF%9E%E6%8E%A5%E6%B1%A0.png",
            //   name: "Elasticsearch",
            //   title: "Elasticsearch",
            //   url: "https://www.elastic.co/cn/downloads/elasticsearch",
            // },
            // {
            //   ico: "http://rq2l4zm0j.hd-bkt.clouddn.com/JAVA/Druid%E8%BF%9E%E6%8E%A5%E6%B1%A0.png",
            //   name: "Kibana",
            //   title: "Elasticsearch的客户端",
            //   url: "https://www.elastic.co/cn/downloads/elasticsearch",
            // },
            {
              ico: "http://www.amoureux555.xyz/JAVA/RabbitMQ.ico",
              name: "RabbitMQ",
              title: "RabbitMQ",
              url: "https://www.rabbitmq.com/download.html",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Maven.ico",
              name: "Maven",
              title: "Maven",
              url: "https://maven.apache.org/download.cgi",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Git.ico",
              name: "Git",
              title: "Git",
              url: "https://git-scm.com/downloads",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Spring%20Framework.png",
              name: "Spring Framework",
              title: "Spring 框架",
              url: "https://spring.io/projects/spring-framework",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Spring%20Framework.png",
              name: "Spring Boot",
              title: "Spring Boot",
              url: "https://spring.io/projects/spring-boot",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Spring%20Framework.png",
              name: "Spring Cloud",
              title: "Spring Cloud",
              url: "https://spring.io/projects/spring-cloud",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Spring%20Framework.png",
              name: "Spring Security",
              title: "Spring Security",
              url: "https://spring.io/projects/spring-security",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/MyBatis%20Plus.ico",
              name: "MyBatis",
              title: "MyBatis",
              url: "https://mybatis.org/mybatis-3/zh/index.html",
            },
            {
              ico: "http://rq2l4zm0j.hd-bkt.clouddn.com/JAVA/MyBatis%20Plus.ico",
              name: "MyBatis Plus",
              title: "MyBatis Plus",
              url: "https://mybatis.plus/guide/#%E7%89%B9%E6%80%A7",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Linux.png",
              name: "Linux",
              title: "Linux",
              url: "https://www.linux.org/pages/download/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Tomcat.ico",
              name: "Tomcat",
              title: "Tomcat",
              url: "https://tomcat.apache.org/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Nginx.ico",
              name: "Nginx",
              title: "Nginx",
              url: "http://nginx.org/en/download.html",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Swagger%20UI.png",
              name: "Swagger UI",
              title: "Swagger UI",
              url: "https://swagger.io/tools/swagger-ui/download/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/%E9%98%BF%E9%87%8C%E4%BA%91%E9%A6%96%E9%A1%B5.ico",
              name: "阿里云首页",
              title: "阿里云首页",
              url: "https://www.aliyun.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF.ico",
              name: "宝塔面板",
              title: "宝塔面板",
              url: "https://www.bt.cn/new/index.html",
            },
            // {
            //   ico: "http://rq2l4zm0j.hd-bkt.clouddn.com/JAVA/%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF.ico",
            //   name: "Xshell",
            //   title: "Xshell",
            //   url: "https://www.netsarang.com/zh/xshell/",
            // },
            // {
            //   ico: "http://rq2l4zm0j.hd-bkt.clouddn.com/JAVA/%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF.ico",
            //   name: "Xftp",
            //   title: "Xftp",
            //   url: "https://www.netsarang.com/zh/xftp/",
            // },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Navicat.ico",
              name: "Navicat",
              title: "Navicat",
              url: "https://www.navicat.com.cn/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Postman.png",
              name: "Postman",
              title: "Postman",
              url: "https://www.postman.com/downloads/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/ApiPost.ico",
              name: "ApiPost",
              title: "国产",
              url: "https://www.apipost.cn/download.html",
            },
          ],
        },
        {
          id: "luntan",
          name: "技术论坛篇",
          ico: "http://www.amoureux555.xyz/JAVA/%E6%8A%80%E6%9C%AF%E8%AE%BA%E5%9D%9B.png",
          children: [
            {
              ico: "http://www.amoureux555.xyz/JAVA/CSDN.ico",
              name: "CSDN",
              title: "CSDN",
              url: "https://www.csdn.net/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/%E5%BC%80%E6%BA%90%E4%B8%AD%E5%9B%BD.ico",
              name: "开源中国",
              title: "开源中国",
              url: "https://www.oschina.net/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/JAVA.ico",
              name: "菜鸟教程",
              title: "菜鸟教程",
              url: "https://www.runoob.com/?s=java",
            },
          ],
        },
        {
          id: "tuoguan",
          name: "开源项目托管平台篇",
          ico: "http://www.amoureux555.xyz/JAVA/%E9%A1%B9%E7%9B%AE%E6%89%98%E7%AE%A1.png",
          children: [
            {
              ico: "http://www.amoureux555.xyz/JAVA/GitHub.png",
              name: "GitHub",
              title: "GitHub",
              url: "https://github.com/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/Gitee.ico",
              name: "Gitee",
              title: "Gitee",
              url: "https://gitee.com/",
            },
          ],
        },
        {
          id: "huanjing",
          name: "集成开发环境篇",
          ico: "http://www.amoureux555.xyz/JAVA/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.png",
          children: [
            {
              ico: "http://www.amoureux555.xyz/JAVA/Eclipse.ico",
              name: "Eclipse",
              title: "Eclipse",
              url: "https://www.eclipse.org/downloads/",
            },
            {
              ico: "http://www.amoureux555.xyz/JAVA/IntelliJ%20IDEA.ico",
              name: "IntelliJ IDEA",
              title: "IntelliJ IDEA",
              url: "https://www.jetbrains.com/idea/download/#section=windows",
            },
          ],
        },
      ],
    };
  },
  methods: {
    JumpFn(url) {
      window.open(url, "_target");
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.backend {
  width: 94%;
  .item1 {
    color: #555;
    text-align: left;
    margin: 0 0 30px 50px;
    .topic {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      margin-bottom: 20px;
      img {
        width: 20px;
        height: 20px;
        margin: 0 10px;
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .icon {
      width: 30px;
      height: 30px;
    }
    .box-card {
      width: 260px;
      margin: 0 0 30px 40px;
      cursor: pointer;
      ::v-deep .el-card__body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          display: flex;
          align-items: center;
          width: 80%;
          img {
            margin-right: 10px;
          }
          .content {
            width: 100%;
            .name {
              font-size: 14px;
              font-weight: bolder;
            }
            .title {
              color: #6c757d;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              display: block;
              width: 85%;
            }
          }
        }
        // i {
        //   margin-right: 20px;
        // }
      }
    }
  }
}
</style>
