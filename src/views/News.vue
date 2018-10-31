<template>
  <div>
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

    <div class="container">
    <!-- 标题-->
      <div class="row"  style="margin-top: 50px">
          <div class="col-md-12 text-center" >
            <h2 style="font-weight: bold;font-size:40px;margin: 30px 0">新闻</h2>
          </div>
        </div>
    <!-- 新闻1-->
      <div class="row margin">
        <div class="col-md-2">
          <img src="../assets/img/new1.png" class="img-responsive"/>
        </div>
        <div class="col-md-10">
          <a href="#new1" data-toggle="modal"><h3>东博会之行回顾——捡海星行动，持续进行中</h3></a>
          <p class="font-color">2017-09-20</p>
          <p class="font-color">第14届中国-东盟博览会已经圆满落幕了，但这并不意味着合作奋进的停顿与结束。相信脑杰特会与各位合作伙伴们一起前行，一起创造更美好的明天！</p>
        </div>
      </div>
      <!-- 新闻2-->
      <div class="row margin">
        <div class="col-md-2">
          <img src="../assets/img/Image_20170915155337-1.jpg" class="img-responsive"/>
        </div>
        <div class="col-md-10">
          <a href="#new2" data-toggle="modal"><h3>提升生命的动力，由发现天赋天性开始</h3></a>
          <p class="font-color">2017-09-15</p>
          <p class="font-color">9月15日，第14届中国-东盟博览会进入第四天，现场人气依旧火爆。展会贸易投资促进活动丰富，专业观众对接洽谈繁忙。在东盟博览会期间，前来参展的顾客朋友热情高涨，反应热烈。 由于前几天活动实在是太火爆了，我们决定在9月16日再增加一场活动，便于代理商和客户更好地体验、了解脑杰特的 产品服务。</p>
        </div>
      </div>
      <!-- 新闻3-->
      <div class="row ">
        <div class="col-md-2">
          <img src="../assets/img/WeChat_Image_20170915151858-3.jpg" class="img-responsive"/>
        </div>
        <div class="col-md-10">
          <a href="#new3" data-toggle="modal"><h3>东博会快讯——【脑杰特】的展位又双叒叕爆满了！！！</h3></a>
          <p class="font-color">2017-09-08</p>
          <p class="font-color">9月14日，第14届中国-东盟博览会进入第三天，现场人气依旧火爆。展会贸易投资促进活动丰富，专业观众对接洽谈繁忙。 脑杰特，作为全球著名品牌，又在这场盛会中给大家带来了什么？是技术领先的产品？是专业的导读师队伍？还是独具慧眼的合作伙伴？事不宜迟，我们一起去看看吧~</p>
        </div>
      </div>
      <!-- 新闻4-->
      <div class="row ">
        <div class="col-md-2">
          <img src="../assets/img/WeChat_Image_20170915151858-3.jpg" class="img-responsive"/>
        </div>
        <div class="col-md-10">
          <a href="#new4" data-toggle="modal"><h3>脑杰特诚邀您参与第14届中国-东盟博览会</h3></a>
          <p class="font-color">2017-09-14</p>
          <p class="font-color">第14届中国-东盟博览会 2017—CAEXPO<br> 主题：共建21世纪海上丝绸之路，旅游助推区域经济一体化<br> 时间：2017.9.12-2017.9.15</p>
        </div>
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
        <div id="new1" class=" modal fade">
            <div class="modal-dialog"><!--大小与定位-->
                <div class="modal-content"> <!--背景，边框-->
                    <div class="modal-header">
                        <span data-dismiss="modal" class="close">x</span>
                        <h4>东博会之行回顾——捡海星行动，持续进行中</h4>
                    </div>
                    <div class="media-body">
                        第14届中国-东盟博览会已经圆满落幕了，但这并不意味着合作奋进的停顿与结束。相信脑杰特会与各位合作伙伴们一起前行，一起创造更美好的明天！
                        <img src="../assets/img/new1.png" class="img-responsive"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="new2" class=" modal fade">
            <div class="modal-dialog"><!--大小与定位-->
                <div class="modal-content"> <!--背景，边框-->
                    <div class="modal-header">
                        <span data-dismiss="modal" class="close">x</span>
                        <h4>提升生命的动力，由发现天赋天性开始</h4>
                    </div>
                    <div class="media-body">
                        9月15日，第14届中国-东盟博览会进入第四天，现场人气依旧火爆。展会贸易投资促进活动丰富，专业观众对接洽谈繁忙。在东盟博览会期间，前来参展的顾客朋友热情高涨，反应热烈。 由于前几天活动实在是太火爆了，我们决定在9月16日再增加一场活动，便于代理商和客户更好地体验、了解脑杰特的 产品服务。
                        <br/>
                        <img src="../assets/img/Image_20170915155337-1.jpg" class="img-responsive"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="new3" class=" modal fade">
            <div class="modal-dialog"><!--大小与定位-->
                <div class="modal-content"> <!--背景，边框-->
                    <div class="modal-header">
                        <span data-dismiss="modal" class="close">x</span>
                        <h4>东博会快讯——【脑杰特】的展位又双叒叕爆满了！！！</h4>
                    </div>
                    <div class="media-body">
                        9月14日，第14届中国-东盟博览会进入第三天，现场人气依旧火爆。展会贸易投资促进活动丰富，专业观众对接洽谈繁忙。 脑杰特，作为全球著名品牌，又在这场盛会中给大家带来了什么？是技术领先的产品？是专业的导读师队伍？还是独具慧眼的合作伙伴？事不宜迟，我们一起去看看吧~
                        <br/>
                        <img src="../assets/img/WeChat_Image_20170915151858-3.jpg" class="img-responsive"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="new4" class=" modal fade">
            <div class="modal-dialog"><!--大小与定位-->
                <div class="modal-content"> <!--背景，边框-->
                    <div class="modal-header">
                        <span data-dismiss="modal" class="close">x</span>
                        <h4>脑杰特诚邀您参与第14届中国-东盟博览会</h4>
                    </div>
                    <div class="media-body">
                        第14届中国-东盟博览会 2017—CAEXPO <br/>
                        主题：共建21世纪海上丝绸之路，旅游助推区域经济一体化 <br/>
                        时间：2017.9.12-2017.9.15 <br/>
                        <img src="../assets/img/WeChat_Image_20170915151858-3.jpg" class="img-responsive"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
 /* .margin{
      margin: 20px 0;
    }
    .font-color{
      color: #777;
    }
    a h3{
      font-weight: bold;
      font-size: 25px;
      color: #000;
    }
    p{
      font-size: 12px;
    }
    div#menu ul li:nth-child(4) a{
      background-color: #FB9C00;
      border-radius: 4px;
    } */
    div#menu ul li a{
        color: #fff;
    }
    #menu ul li:nth-child(4) a{
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