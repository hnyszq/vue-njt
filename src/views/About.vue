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
  <div class="row container"  style="margin-top: 50px;" >
        <div class="col-md-12 text-center" >
          <h2 style="font-weight: bold;margin: 30px 0">关于我们</h2>
        </div>
      </div>
    <!-- 创办人-->
    <div class="row">
      <div class="col-md-12">
        <img src="../assets/img/big-seven.png" class="img-responsive"/>
      </div>
    </div>
    <!-- 543000满意国际用户-->
    <div class="user">
      <div class="row">
        <div class="col-xs-12">
          <h1>543000满意国际用户</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h3>已经使用了脑杰特大脑的检测报告,每天还在增加中。</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <h3>“已经采纳脑杰特系统的不同国家与地区.”</h3>
          <img src="../assets/img/international-contr.jpg" class="img-responsive"/>
        </div>
        <div class="col-md-5">
          <img src="../assets/img/international_business.jpg"  class="img-responsive"/>
        </div>
      </div>
    </div>
    <!-- 视频下方五张小图-->
    <div class="row" style="background: #D99B1B;color:#fff;margin: 0;padding-top: 20px">
      <div class="col-md-4" >
        <img src="../assets/img/Malaya-one.jpg" class="img-responsive sizeImg"/>
        <p>马来西亚颁发给脑杰特的国际品牌连锁证书</p>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6" >
            <img src="../assets/img/Malaya-two.jpg" class="img-responsive"/>
            <p>马来西亚政府对脑杰特的认可和支持</p>
          </div>
          <div class="col-md-6" >
            <img src="../assets/img/Malaya-three.jpg" class="img-responsive"/>
            <p>2016年9月28日，脑杰特国际教育集团CEO陈海明博士与淮北市副市长王莉莉签署了战略合作协议</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6" >
            <img src="../assets/img/Malaya-four.jpg" class="img-responsive"/>
            <p>在参展的500多家片品牌参展商中，脑杰特国际教育科技发展有限公司荣获【2017年度最佳连锁加盟品牌】</p>
          </div>
          <div class="col-md-6" >
            <img src="../assets/img/Malaya-five.jpg" class="img-responsive"/>
            <p>新加坡大使为自己做了脑杰特报告并高度认可</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <img src="../assets/img/Malaya-one-one.jpg" class="img-responsive"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <img src="../assets/img/big-five.png" class="img-responsive"/>
      </div>
    </div>
    <!-- 总部-->
    <div class="row">
      <div class="col-md-12 text-center font-color" style="margin: 40px 0 15px 0">
        <p>脑杰特国际教育科技发展机构是一家专业提供全脑基因检测技术及教育管理顾问咨询服务的国际科技教育企业。</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center font-color" style="margin-bottom: 30px">
        <p>中国管理总部设立在拥有“中国硅谷(Silicon Valley)”之称的中关村创客中心，全球管理总部设立在马来西亚首都吉隆坡。</p>
      </div>
    </div>
    <!-- 马来西亚总部和北京总部-->
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-12 col-md-offset-2">
                <img src="../assets/img/company-parent.jpg" class="img-responsive"/>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center" style="font-weight: bold;margin-top: 15px">
                马来西亚总部
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row  center-img">
              <div class="col-md-12 col-md-offset-2">
                <img src="../assets/img/company-beijing.jpg" class="img-responsive"/>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center" style="font-weight: bold;margin-top: 15px">
                北京总部
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司分支-->
    <div class="row">
      <div class="col-md-12 text-center font-color">
        <p style="margin: 50px 0;">苏州、合肥、珠海、成都等分支机构即将开业</p>
      </div>
    </div>
    <!-- 公司分支下三张图片和字体介绍-->
    <div class="row text-color">
      <div class="col-sm-4">
        <div class="row">
          <div class="col-sm-10 col-sm-offset-1">
            <img src="../assets/img/about-one.jpg" class="img-responsive"/>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-10 text-left col-sm-offset-1 font-color">  自2003年开始研发及创办以来，我们已在全球为超过543000位客户提供了有关幼儿早教开发、青少年亲子关系、中学生择科、成人择业、企业人力资源管理以及婚姻家庭关系等的全脑基因专业检测报告和咨询。</div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="row">
          <div class="col-sm-10 col-sm-offset-1">
            <img src="../assets/img/about-two.jpg" class="img-responsive"/>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-10 text-left col-sm-offset-1 font-color">脑杰特致力于推动教育权利的公平化和教育消费的合理化，不仅为广大顾客提供全脑基因检测服务，还将向个人、家庭和企业推荐最适合的教育解决方案和教育资源。</div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="row">
          <div class="col-sm-10 col-sm-offset-1">
            <img src="../assets/img/about-three.jpg" class="img-responsive"/>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-10 text-left col-sm-offset-1 font-color" > 
            公司成立之初，我们已经许下冲出亚洲，今天我们做到了!展望未来，脑杰特将持续关注顾客的个性化成长需求，伴随其个人、家庭和事业一生成长，为中国梦和每个家庭、每个人梦想的实现贡献出我们最大的力量。
          </div>
        </div>
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
div#menu ul li a{
        color: #fff;
    }
    #menu ul li:nth-child(3) a{
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