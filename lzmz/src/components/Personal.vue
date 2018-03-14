<template>
  <div id="Personal">
      <section id = "sectionwrap">
							       <!-- 头部头部 -->
							<div class = "section_header">
											<div class = "header_back iconfont icon-sdf">
											</div>
											<div class = "header_show">
												{{msg}}
											</div>
											<router-link to = "/list">
											<div class = "header_index iconfont icon-home">
											</div>
											</router-link>
							</div>
							
      	      <!-----------------banner部分------------------------------->
      	      <div class = "section_banner">
      	      	      <div class = "banner_con">
      	      	      	    <div class = "banner_info">
      	      	      	    	   <div class = "info_price">
      	      	      	    	   	     <p>余额</p>
      	      	      	    	   	     <span>¥ 0.00</span>
      	      	      	    	   </div>
      	      	      	    	   <div class = "info_person">
      	      	      	    	   	     <img src = "http://img.lizi.com/lizi/commcon/face.png" class = "person_img">
      	      	      	    	   	     <span class = "person_member">
      	      	      	    	   	     	      <p>普通</p>
      	      	      	    	   	     </span>
      	      	      	    	   	     <div class = "info_username">
      	      	      	    	   	     	    18888888888
      	      	      	    	   	     </div>
      	      	      	    	   	     <div class = "info_num">
      	      	      	    	   	     	    <p>
      	      	      	    	   	     	    	  0/298 
      	      	      	    	   	     	    </p>
      	      	      	    	   	     </div>
      	      	      	    	   </div>
      	      	      	    	   <div class = "info_count">
      	      	      	    	   	     <p>丽子币</p>
      	      	      	    	   	     <span>0</span>
      	      	      	    	   </div>
      	      	      	    </div>
      	      	      </div>
      	      </div>
      	      
      	       <!-----------------Order部分------------------------------->
      	       <div class = "section_order">
      	       	    <ul class = "order_ul">
      	       	    	   <li class = "order_li" v-for="item in list">
      	       	    	   	   <a href="javascripts:;">
		      	       	    	   	   <span class = "order_span iconfont":class="item.icon"></span>
		      	       	    	   	   <p class = "order_p">{{item.name}}</p>
      	       	    	   	   </a>
      	       	    	   </li>
      	       	    </ul>
      	       </div>
      	       
      	        <!-----------------list部分------------------------------->
      	        <div class = "section_list">
      	        	    <ul class = "list_ul">
      	        	    	   <li class = "list_li" v-for="item in ulist">
      	        	    	   	    <!--<a href="javascripts:;">-->
      	        	    	   	    	   <span class = "list_span iconfont":class="item.icon"></span>
		      	       	    	   	       <p class = "list_p">{{item.name}}</p>
      	        	    	   	   <!-- </a>-->
      	        	    	   </li>
      	        	    </ul>
      	        </div>
      	        
      	        
      	         <!-----------------退出登录------------------------------->
      	        <div class = "log_out">
      	              <a>退出登录</a>
      	        </div>
      	        
      	         <!-----------------footer部分------------------------------->
      	          <div id = "section_fot">
				           <p>登录·注册·客户端</p>
				           <p>栗子客服:0527-80203555</p>
				           <p>©2015&nbsp;丽子美妆&nbsp;lizi.com</p>
				       </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
	  name: 'Personal',
	  data(){
	 	return {
	 		msg : "我的丽子",
	 		list : [
	 		       {icon : "icon-qianbao" , name : "待付款"},
	 		       {icon : "icon-huoche01" , name : "待发货"},
	 		       {icon : "icon-huopin_l" , name : "待收货"}
	 		],
	 		ulist : [
	 		       {icon : "icon-dingdan" , name : "我的订单"} ,
	 		       {icon : "icon-dizhi" , name : "我的地址"} ,
	 		       {icon : "icon-youhuiquan" , name : "我的优惠券"} ,
	 		       {icon : "icon-shoucang" , name : "我的收藏"} ,
	 		       {icon : "icon-xiaoxi1" , name : "我的消息"} ,
	 		       {icon : "icon-survey" , name : "常见购物问题"} ,
	 		       {icon : "icon-ziyuan" , name : "联系平台"} ,
	 		]
	 	}
	 }
}
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

@import "../assets/font_all/iconfont.css";
@import "../assets/font/iconfont.css";

       /*移动端整体样式操作*/
body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend,div{margin:0; padding:0;}

ul,li,ol{list-style:none;}

img,fieldset{border:0; }

img{display:block;}

body,html{width: 100%;
height: 100%;}

a{text-decoration:none;}

*{box-sizing: border-box;}

i{
	font-style: normal;
}

html{
	font-size:26.67vw;
}

      /*整体盒子样式*/ 
#Personal{
	width: 100%;
	display: flex;
	flex-direction: column;
}

.mint-swipe-indicators{
	display: none;
}
   /*sectionwrap样式布局*/
#sectionwrap{
	flex: 1;
	overflow: auto;
}

      /*商品详情页头部*/
.section_header{
	height: .44rem;
	background: #ff666b;
	/*text-align: left;*/
}

.header_back{
	width: .44rem;
	height: .44rem;
	text-align: center;
	line-height: .44rem;
	float: left;
	font-size: .22rem!important;
	color: white;
}

.header_show{
	width: 2.86rem;
	height: .44rem;
	font-size: .16rem;
	text-align: center;
	line-height: .44rem;
	float: left;
	color: white;
}

.header_index{
	width: .44rem;
	height: .44rem;
	text-align: center;
	line-height: .44rem;
	float: left;
	font-size: .22rem!important;
	color: white;
}



/*===================banner部分================*/
.section_banner{
	    height: 1.6rem;
	    overflow: hidden;
	    position: relative;
	    background: url(https://s02.lizi.com/images/wap/my-lizi/img.png);
	    background-size: cover;
	    box-sizing: border-box;
}

.banner_con{
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    text-align: center;
	    color: #FFFEFE;
	    background: rgba(51,51,51,.36);
	    padding: .1rem 0;
}

.banner_info{
	    height: 100%;
      box-sizing: border-box;
      font-size: .14rem;
}

.info_price{
	    position: absolute;
	    top: .6rem;
	    left: .26rem;
	    
}

.info_count{
	   position: absolute;
	   right: .26rem;
	   top: .6rem;
}

.info_person{
	   padding: 0;
	   position: relative;
	   width: 100%;
	   top: 0;
	   left: 0;
	   height: .8rem;
	   
}

.person_img{
	   width: .8rem;
	   height: .8rem;
	   border-radius: 100%;
	   border: 2.5px solid rgba(0,0,0,.24);
	   text-align: center;
	   margin-left: 1.45rem;
}

.person_member{
	    min-width: .3rem;
	    position: absolute;
	    top: 0;
	    left: 2.3rem;
	    background: #ff666b;
	    border-radius: .1rem;
	    padding: .02rem .05rem;
	    text-align: center;
}

.info_username{
	    padding: 0 .05rem 0 .06rem;
	    font-size: .17rem;
	    margin-top: .1rem;
	    
}

.info_num {
	    padding: .05rem 0;
	    
}

.info_num p{
    	width:.49rem;
    	height: .23rem;
    	/*display: block;*/
	    background: rgba(0,0,0,.24);
	    padding: .02rem .05rem;
	    border-radius: .07rem/.05rem;
	    color: #fff;
	    margin-left: 1.6rem;
}


/*--------------------order部分-----------------------------*/
.section_order{
	    margin: .1rem 0;
	    padding: .1rem 0;
	    overflow: hidden;
}

.order_li{
	    width: 1.23rem;
	    height: .67rem;
	    float: left;
}

.order_li a{
	    position: relative;
	    margin-top: .2rem;
	    text-align: center;
	    display: block;
	    color: #222;
	    font-size: .14rem;
}

.order_span {
	    color: #9e9e9;
	    font-size: .26rem;
}

.order_p{
	    color: #9e9e9;
	    font-size: .14rem;
}


/*--------------------list部分-----------------------------*/
.section_list{
	    
}

.list_li{
	  width: 100%;
	  height: .55rem;
	  padding: .1rem;
	  color: #222;
}

/*.list_li a{
	  
	  
	  width: 100%;
	  display: block;
	  height: .55rem;
}*/


.list_span{
	  text-align: center;
	  width: .6rem;
	  font-size: .28rem;
	  color: #222;
	  display: block;
	  float: left;
}

.list_p{
	   line-height: .35rem;
	   font-size: .15rem;
	   color: #464646;
	   float: left;
}



/*------------------退出登录---------------------------*/
.log_out{
	    text-align: center;
	    height: .4rem;
	    width: 100%;
	    margin-top: .1rem;
}

.log_out a{
	    border: 1px solid #ddd;
	    font-size: .16rem;
	    width: 200px;
	    padding: 10px 0;
	    margin: 0 auto;
	    color: #9e9e9e;
	    background: #fff;
	    display: block;
}

   /*这是section的尾部啊*/
#section_fot{
	color: #999;
	height: 1.65rem;
	text-align: center;
	font-size: .12rem;
	background: whitesmoke;
	padding-top: .3rem;
}
</style>
