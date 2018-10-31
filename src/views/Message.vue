<template>
  <div class="container">
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
  <!-- 标题-->
  <div class="row" style="margin-top: 80px">
       <div class="col-md-12 text-center" >
         <h2 style="font-weight: bold;font-size:40px;margin: 30px 0">留言簿</h2>
       </div>
      </div>
    <!-- 留言板-->
    <div id="container">
      <div>
        <ul class="list-unstyled">
          <li v-for="(tmp,i) in msg" :key="i" ><h3>{{tmp}}</h3></li>
        </ul>
        <input type="text" v-model="inputVal" class="form-control marginTop">
        <button @click="add" class="btn btn-success btn-block" style="margin-top:10px">留言</button>
      </div>
    </div>
    <!-- 版权-->
    <div class="footer  marginTop" style="background-color: #fff">
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
</template>

<script>
import myHeader from './Nav.vue'



export default {
  components:{
    myHeader
  },
  props:{},
  data:function(){
    return {
      msg:[],
      inputVal:''
    }
  },
  watch:{},
  computed:{},
  methods:{
    add:function(){   
      this.msg.push(this.inputVal)
      this.inputVal=""
    }
  },
  created(){},
  mounted(){}
}
</script>

<style scoped>
 /* .text-center{
      text-align: center;
    }

    div#menu ul li:nth-child(5) a{
      background-color: #FB9C00;
      border-radius: 4px;
    }
    .marginTop{
      margin-top: 10%;
    } */
    div#menu ul li a{
        color: #fff;
    }
    #menu ul li:nth-child(5) a{
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
</style>