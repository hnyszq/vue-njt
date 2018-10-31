<template>
  <div class="container" id="bgcolor">
    <!-- 国家图标-->
    <div style="position:absolute;top:10px;right:20px;margin-right: 60px">
      <a href="index.html">
        <img src="../assets/img/USA.png" alt="English" class="img-size"/>
      </a>
      <a href="index.html">
        <img src="../assets/img/China.png" alt="简体中文" class="img-size"/>
      </a>
    </div>
    <!-- 登录图标-->
    <div class="boxs">
      <div class="row">
        <div class="col-md-4 col-md-offset-4 box">
            <a href="index.html">
              <img src="../assets/img/logo.png"/>
            </a>
        </div>
      </div>
      <!--<form action="">-->
        <!-- 登录名-->
        <div class="row">
          <div class="col-md-4 col-md-offset-4  width">
            <input v-model="uname" type="text" placeholder="用户名" class="form-control" id="uname" />
          </div>
        </div>
        <!-- 登录密码-->
        <div class="row">
          <div class="col-md-4 col-md-offset-4  width">
            <input v-model="upwd" type="password" placeholder="密码" class="form-control" id="upwd" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-md-offset-4 text-center">
            Email or Password invalid, please verify
          </div>
        </div>
        <!-- 登录按钮-->
        <div class="row">
          <div class="col-md-4 col-md-offset-4 text-center  width">
            <button @click="doLogin" class="btn btn-lg btn-success btn-block" type="submit">登录</button>
          </div>
        </div>
      <!--</form>-->
    </div>
  </div>
</template>

<script>
// 引入并打包到全局静态资源
import '../assets/css/bootstrap.css';
import '../assets/js/jquery-1.11.3.js';
import '../assets/js/bootstrap.js';
// import "../assets/js/vue.js";
// import "../assets/js/vue-router.js";
// import '../assets/js/login.js';
//导入axios工具包
import axios from 'axios'

export default {
  components:{},
  props:{},
  data(){
    return {
      uname:'',
      upwd:''
    }
  },
  watch:{},
  computed:{},
  methods:{
    doLogin1:function(){
      console.log(1)
    },
    doLogin:function(){
      //异步发送axios
      var url=`http://127.0.0.1/xiangmus/njt/njt/data/login.php?uname=${this.uname}&upwd=${this.upwd}`;
      var n=$(uname).val();
      var p=$(upwd).val();
      var nReg=/^[a-zA-Z0-9]{3,8}/;
      var pReg=/^[a-zA-Z0-9]{3,8}/;
      if(!nReg.test(n)){
      alert("用户名格式不正确，字母或数字3~8位");
        return
      }
      if(!pReg.test(p)){
        alert("密码格式不正确，字母或数字3~8位");
        return
      }
      console.log(url)
      axios.get(url).then((res)=>{
        if(res.data.code===1){
          sessionStorage.setItem("uname",n)
          this.$router.push("/main")
        }else{
          alert("错误信息："+res.data.msg)
        }
      }).catch((err)=>{
        alert("无法从服务器获取验证消息")
      })
     
    }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
/* 背景图片 */
    #bgcolor{
      background-image: url("../assets/img/homebg.jpg");
      background-size:100%;
      width:100%;
      height:643px;
    }
/*图片的大小*/
    .img-size{
      width: 40px;
    }
    .box{
      width: 300px;
      padding:0 80px;
      margin-left: 16px;
      border: 1px solid #DDDDDD;
      background-color: #F5F5F5;
    }

    .width{
      width:290px;
      margin: 10px 20px;
    }
    .boxs{
      width: 300px;
      position: absolute;
      top: 100px;
      right: 50px;
      background-color: #fff;
    }
</style>