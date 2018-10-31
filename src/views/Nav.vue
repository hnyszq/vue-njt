<template>
  
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
 
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){

  }
}
</script>
<style scoped>
    div#menu ul li a{
        color: #fff;
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