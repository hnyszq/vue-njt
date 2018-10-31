<template>
  <div>
    <!-- 头部 -->
  <!-- <my-header></my-header> -->

  <div class="navbar navbar-default navbar-fixed-top" style="background-color:#000;" id="title">
      <div class="container">
            <!-- 导航条头部-->
            <div class="navbar-header">
                <a href="#" class="navbar-brand" style="padding-top: 5px">
                    <img src="../assets/img/logo.png" />
                </a>
                <!-- 汉堡包-->
                <a class="navbar-toggle" data-toggle="collapse" href="#menu">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                </a>
            </div>
            <!-- 导航条折叠部分-->
            <div id="menu" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><router-link to="/main">首页</router-link></li>
                    <li><router-link to="/product">产品服务</router-link></li>
                    <li><router-link to="/about">关于我们</router-link></li>
                    <li><router-link to="/news">新闻</router-link></li>
                    <li><router-link to="/message">留言</router-link></li>
                    <li><router-link to="/relation">联系</router-link></li>
                    <li><router-link to="/login" id="login">管理登录</router-link></li>
                </ul>
            </div>
        </div>
    </div>

  <div class="container" style="width: 100%;">
  <!-- 轮播-->
  <div class="carousel" id="ad1" data-ride="carousel">
        <div class="carousel-inner">
          <div class="item active">
            <img src="../assets/img/main1.jpg" alt=""/>
          </div>
          <div class="item">
            <img src="../assets/img/main2.jpg" alt=""/>
          </div>
          <div class="item">
            <img src="../assets/img/main3.jpg" alt=""/>
          </div>
        </div>
        <!-- 左右箭头-->
        <a href="#ad1" class="carousel-control left" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a href="#ad1" class="carousel-control right" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
        <!-- 分页页码-->
        <ul class="carousel-indicators">
          <li data-slide-to="0" data-target="#ad1" class="active"></li>
          <li data-slide-to="1" data-target="#ad1"></li>
          <li data-slide-to="2" data-target="#ad1"></li>
        </ul>
      </div>
      <!-- 版权-->
      <div class="footer" style="background-color: #fff">
        <div class="row">
          <div class="col-md-12 text-center" style="margin-top: 30px">
            Copyright ©2017 脑杰特国际教育科技发展(北京)有限公司 版权所有
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center" style="margin-bottom: 30px">
            京公网安备11000002000001号
            <img src="../assets/img/gongan.jpg"/>
          </div>
        </div>
      </div>
    </div>
   
    <hr>
    <!-- 路由插槽 -->
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from './Nav.vue'

export default {
  components:{myHeader},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
/* 头部样式 */
div#menu ul li a{
        color: #fff;
    }
    #menu ul li:nth-child(1) a{
      background:#fb9c00;
    }
    #menu ul li a:hover{
        background:#fb9c00;
        border-radius: 4px;
        color: #fff;
    }
    div#menu ul li:nth-child(7) a{
        background-color: #5CB85C;
        border-radius: 4px;
    }
/* 主页样式 */
 div#menu ul li:nth-child(1) a {
      background-color: #FB9C00;
      border-radius: 4px;
    }
</style>