<template>
  <div id="all">
      <section id = "sectionwrap">
      	
							       <!-- 头部头部 -->
							<div class = "section_header">
											<div class = "header_back iconfont icon-sdf">
											</div>
											<div class = "header_show">
												{{msg}}
											</div>
											<div class = "header_index iconfont icon-home">
											</div>
							</div>
							
							       <!-- 下载客户端下载客户端 -->
							<div class = "section_nav">
											<ul class = "section_nav_ul">
														<li><img class = "section_nav_img" src="../../static/img/touch-logo(2).png"></li>
														<li><p class = "section_nav_pc">{{client}}</p></li>
														<li>
																	<div class="section_nav_down">
																		立即下载
																	</div>
														</li>
											</ul>
							</div>      	
			      	
			      	        <!-- banner图banner图 -->
							<div class = "section_banner">
								<div class = "swiper-container">
										<ul class = "section_banner_ul ">
											<li class = "section_banner_li">
												<mt-swipe :auto="0">
											  <mt-swipe-item><img src="../../static/img/2.jpg"  class = "section_banner_img1"></mt-swipe-item>
											  <mt-swipe-item><img src="../../static/img/3.jpg"  class = "section_banner_img1"></mt-swipe-item>
											  <mt-swipe-item><img src="../../static/img/2.jpg"  class = "section_banner_img1"></mt-swipe-item>
											  <mt-swipe-item><img src="../../static/img/3.jpg"  class = "section_banner_img1"></mt-swipe-item>								  
				                </mt-swipe>
											</li>
										</ul>
								</div>
								
								<div class = "section_banner_num">
									1/4
								</div>
								
								<div class = "section_banner_content" style="z-index: 1000;">
											<span class = "section_banner_name">
												{{$route.params.fid[0]}}
											</span>
											<a href="javascripts:;" class = "section_banner_sc">
														<p class = "section_banner_img">
															<img src="../../static/img/star-gray.png"> 
														</p>
												    <span>收藏</span>
											</a>
								</div>
							</div>
							
							
							      <!-- 商品价格 -->
							<div class = "section_price">
										<div class = "section_price_in">
													<div class = "section_price_left">
														  <p class = "section_price_price"><span>¥</span>{{$route.params.fid[1]}}</p>
													</div>
													<div class = "section_price_right">
														  <p class = "section_price_count"><span>{{$route.params.fid[2]}}</span>人已购买</p>
													</div>
										</div>
							</div>
			      	
							
							      <!-- 商品介绍商品介绍 -->
							<div class = "section_introduce">
									<p class = "section_introduce_p">
										亲肤无刺激 超薄轻巧
									</p>
							</div>
							
							
							       <!-- 商品参数商品参数 -->
							<div class = "section_parameter">
										<div class = "parameter_top">
													<span class="xian"></span>
													<p class = "parameter_top_p">商品参数</p>
										</div>
										<div class = "parameter_foot"> 
												<ul class="parameter_foot_ul" v-for="item in oList">
														<li class="parameter_foot_li">
															<span class="parameter_foot_span">{{item.val}}&nbsp;:&nbsp;</span>
															<p class="parameter_foot_p">{{item.con}}</p>
														</li>
												</ul>
										</div>
							</div>
							
							
							
							
							<!--这是客户评价的地方-->
							<div class = "section_evaluate">
										<div class = "parameter_top">
													<span class="xian"></span>
													<p class = "parameter_top_p">评价详情(<span>15573</span>)</p>
													<a href="www.baidu.com" class = "show_more">
														查看更多>
													</a>
										</div>
										<div class = "parameter_con">
													<ul class = "parameter_con_ul">
																<li class = "parameter_con_li">
																		<a href="https://www.zhihu.com/" class = "parameter_con_li_a">
																		<div class = "parameter_con_li_name">
																					<img src="../../static/img/5.jpg" class = "parameter_con_li_name_img">
																					<p class = "parameter_con_li_name_p">159****0202</p>
																					<span class = "parameter_con_li_name_span"></span>
																		</div>
																		<div class = "parameter_con_li_font">
																				<p class="parameter_con_li_font_txt">每次都是在丽子上买护肤品'化妆品'赠品也很多'就是这个兰芝的套盒是用保鲜膜在中间缠了几圈'不过味道也挺好闻的</p>
																		</div>
																		<div class = "parameter_con_li_img">
																					<img src="../../static/img/1.jpg">
																		</div>
																		<div class = "parameter_con_li_no">
																					<span>规格:无&nbsp;&nbsp;&nbsp;&nbsp;无</span>
																		</div>
																	</a>
																</li>
													</ul>
										</div>
							</div>
							
							
							     <!--终于快写完了啊      自营自营-->
							<div class = "section_store">
										<div class = "section_in_store">
													<div class = "section_in_store_img">
																<img src="../../static/img/9.jpg">
													</div>
													<div class = "section_in_store_con">
																<div class = "section_in_store_con_name">丽子自营</div>
																<div class = "section_in_store_con_xin">
																			<span class = "">❤</span>
																			<span class = "">❤</span>
																			<span class = "">❤</span>
																			<span class = "">❤</span>
																			<span class = "">❤</span>
																</div>
																<div class = "section_in_store_con_service">
																			<span>100%正品</span>
																			<span>100%正品</span>
																			<span>100%正品</span>
																			<span>100%正品</span>
																</div>
													</div>
										</div>
							</div>
							
							
							
							
							      <!--差不多的商品分类了啊-->
							<div class = "section_Recommend">
										<div class = "parameter_top">
													<span class="xian"></span>
													<p class = "parameter_top_p">相似单品推荐</p>
													<a href="https://www.baidu.com" class = "show_more">
														查看更多>
													</a>
										</div>
								
										<div class = "section_Recommend_con">
													<ul class = "section_Recommend_ul" >
																<li class = "section_Recommend_li" v-for="item in ulist">
																			<a href="javascripts:;">
																						<img  class = "section_Recommend_li_img"  :src="item.img">
																			</a>
																			<h3 class = "section_Recommend_li_h3">
																				{{item.con}}
																			</h3>
																			<p>
																				<span class = "section_Recommend_li_s1">{{item.price1}}</span>
																				<span class = "section_Recommend_li_s2">{{item.price2}}</span>
																			</p>
																</li>
													</ul>
										</div>
							</div>
							
							
							
							<!--美丽工匠销量排行-->
							<div class = "section_Recommend">
										<div class = "parameter_top">
													<span class="xian"></span>
													<p class = "parameter_top_p">美丽工匠销量排行</p>
													<a href="https://www.baidu.com" class = "show_more">
														进入品牌>
													</a>
										</div>
								   

										<div class = "section_Recommend_con  swiper-container">
													<ul class = "section_Recommend_ul  swiper-wrapper" >
																<li class = "section_Recommend_li  swiper-slide" v-for="item in ulist">
																			<a href="javascripts:;">
																					<img  class = "section_Recommend_li_img"  :src="item.img">
																			</a>
																			<h3 class = "section_Recommend_li_h3">
																					{{item.con}}
																			</h3>
																			<p>
																				<span class = "section_Recommend_li_s1">{{item.price1}}</span>
																				<span class = "section_Recommend_li_s2">{{item.price2}}</span>
																			</p>
																</li>
													</ul>
										</div>
							</div>
							
							<!--商品图片介绍-->		
						    <div id = "piccon">
											<div class = "piccon_con">
												商品介绍
											</div>
										<div class = "piccon_pic">
											  <ul>
											  	 <li v-for="item in imglist" class = "piccon_pic_li">
											  	 	   <img :src="item.img">
											  	 </li>
											  </ul>
										</div>
							</div>
						
				      <!--  这是尾部啊  -->
				      <div id = "section_fot">
				           <p>登录·注册·客户端</p>
				           <p>栗子客服:0527-80203555</p>
				           <p>©2015&nbsp;丽子美妆&nbsp;lizi.com</p>
				       </div>
      	
      	
      </section>
      
      
      <!--这是页面的尾部-->
       <footer id = "footerwrap">
								<ul id = "footerwrap_ul">
											<li>
													<p class = "footerwrap_price"><span>¥</span>{{$route.params.fid[1]}}</p>
											</li>
											<li>
													<span class="iconfont icon-buoumaotubiao10  kefu"></span>
													<p class = "footerwrap_service">客服</p>
											</li>
											<li>
													<div class = "join_shopcar" @click="joinshopcar()">
																		 加入购物车
													</div>
											</li>
								</ul>
			</footer>
			
				
			<!--购物车页面购物车-->
			<router-link to = "/shopcar">
					<div id = "shopcar">
								<a  class = "shopcar_a iconfont icon-icon-- " href="javascripts:;" >
									<span ></span>
								</a>	
								<p class = "shopcar_p">
									{{count}}
								</p>
				    </div>
			</router-link>	    
            <!--回到顶部回到顶部-->
			<div id = "backheader" class = "iconfont icon-shangjiantou"  @click="packtop()">
				
		  </div>
		  
  </div>
</template>

<script>
import axios from 'axios';
export default {
	  name: 'Xq',
	  methods : {
	  	packtop : function(){
	  		document.documentElement.scrollTop = document.body.scrollTop = 0;	
	  	},
	  	joinshopcar : function(){
	  		this.count++;
	  	  this.$store.dispatch("addShopA", this.$route.params);
	  	}
	  },
	  data () {
//	  	console.log(this.$route.params)
	    return {
	      msg : '商品详情',
	      client : '丽子美妆客户端',
	      count : 0,
	      list : [
	          {imgSrc: "../../static/img/2.jpg"},
	          {imgSrc: "../../static/img/3.jpg"},
	          {imgSrc: "../../static/img/2.jpg"},
	          {imgSrc: "../../static/img/3.jpg"}
	      ],
	      oList : [
	          {val : "商品名称" , con : "Beauty Artisan美丽工匠薄款纯棉化妆棉1000片 两盒装"},
	          {val : "所属品牌" , con : "美丽工匠"},
	          {val : "产地" , con : "中国"},
	          {val : "适用肤质" , con : "干性肌肤,敏感肌肤,油性肌肤,混合肌肤,中性肌肤"},
	          {val : "生产日期" , con : "详见商品包装"},
	          {val : "保质期" , con : "3年"},
	          {val : "包装方式" , con : "有何又树林"}
	      ],
	     ulist : [
	          { img:"../../static/img/16.jpg", con:"买3送1 美丽工匠化妆棉200片" ,price1 : "¥20.72",price2:"¥40.00"},
	           { img:"../../static/img/15.jpg", con:"Beauty Artisan美丽工匠薄款纯棉化妆棉1000片" ,price1 : "¥20.72",price2:"¥40.00"},
	            { img:"../../static/img/16.jpg", con:"买3送1 美丽工匠化妆棉200片" ,price1 : "¥20.72",price2:"¥40.00"},
	             { img:"../../static/img/15.jpg", con:"Beauty Artisan美丽工匠薄款纯棉化妆棉1000片" ,price1 : "¥20.72",price2:"¥40.00"},
	           { img:"../../static/img/16.jpg", con:"买3送1 美丽工匠化妆棉200片" ,price1 : "¥20.72",price2:"¥40.00"},
	             { img:"../../static/img/15.jpg", con:"Beauty Artisan美丽工匠薄款纯棉化妆棉1000片" ,price1 : "¥20.72",price2:"¥40.00"}
	    ],
	    imglist : [
	         {img : "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/28a617c70b1a4.jpg!wh600"},
	         {img : "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/c3a22a0d74a0.jpg!wh600"},
	         {img : "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/c3a22a0d74a0.jpg!wh600"},
	         {img : "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e5548ceaea31.jpg!wh600"},
	         {img : "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/22f6e6bf679a8.jpg!wh600"},
	         {img : "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/22f6e6bf6959f.jpg!wh600"},
	         {img : "http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e5548ceb0dd4.jpg!wh600"}
	          ]
	       }
       },
      update(){
	      	var mySwiper = new Swiper ('.swiper1 .swiper-container', {	 
				    loop: true,
				    autoplay:true,
				     pagination: {
					      el: '.swiper-pagination',
					    }
				  })	  	
      }
}
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
	
	
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
#all{
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


     /*下载客户端下载客户端*/
.section_nav{
	height: .52rem;
	background:white;
	/*opacity: .7;	*/
}    

.section_nav_ul{
	height: .52rem;
	width: 100%;
	background: rgba(0,0,0,.6);
}

.section_nav_ul li{
	float: left;
}

.section_nav_ul li:nth-child(1){
	float: left;
	
}

.section_nav_ul li:nth-child(3){
	float: right;
	margin-right: .06rem;
	margin-top: .06rem;
}
.section_nav_img{
	margin-top: .06rem;
	width: .38rem;
	height: .38rem;
	border-radius: .05rem;
	margin-left:.3rem;
}

.section_nav_pc{
	font-size: .14rem;
	color: white;
	margin-top: .12rem;
	margin-left: .02rem;
}

.section_nav_down{
	height: .36rem;
	width: .76rem;
	background:#ff666b ;
	text-align: center;
	line-height: .36rem;
	font-size: .14rem;
	color: white;
}



      /*回到顶部回到顶部*/
#backheader{
	width: .4rem;
	height: .4rem;
	background: rgba(0,0,0,.4);
	text-align: center;
	position: fixed;
	bottom: .55rem;
	right: 0;
	border-radius: .25rem;
	font-size: .24rem!important;
	line-height: .4rem;
	color: white;
}






         /*购物车加载页面*/
#shopcar{
	width: .4rem;
	height: .4rem;
	background: rgba(255,102,107,.9);
	text-align: center;
	position: fixed;
	bottom: .55rem;
	border-radius: .25rem;
	
}

.shopcar_a{
	color: #222;
	width: .24rem;
	height: .24rem;
	line-height: .24rem;
	text-align: center;
	font-size: .24rem!important;
	color: #fff;
	position: absolute;
	top: .08rem;
	left: .08rem;
}


.shopcar_p{
	position: absolute;
	right: 0;
	top: 0;
	display: block;
	padding: .02rem .04rem;
	font-size: .12rem;
	color: #ff666b;
	background: #fff;
	border-radius: .4rem;
	
}

      /*这是一个banner图啊*/
.section_banner{
	height: 2rem;
	width: 100%;
	position: relative;
	background: white;
}     

.section_banner_ul{
	position: relative;
	height: 2rem;
	width: 100%;
}

.section_banner_li{
	text-align: center;
	height:2rem;
	line-height: 2rem;
}

.section_banner_li:nth-child(2){
	position: absolute;
	top: 0;
	left: 3.75rem;
}

.section_banner_li:nth-child(3){
	position: absolute;
	top: 0;
	left: 3.75rem;
}

.section_banner_li:nth-child(4){
	position: absolute;
	top: 0;
	left: 3.75rem;
}


.section_banner_img1{
	display: inline-block;
	width: 2rem;
	height: 2rem;
}

.section_banner_img1 img{
	width: 100%;
	height: 100%;
}

.section_banner_img{
	display: inline-block;
	width: .26rem;
	height: .24rem;
}
.section_banner_img img{
	width: 100%;
	height: 100%;
}



.section_banner_num{
	height: .3rem;
	width: .3rem;
	border-radius: .3rem;
	position: absolute;
	left: .08rem;
	top: .02rem;
	text-align: center;
	line-height: .3rem;
	background: rgba(0,0,0,.3);
	z-index: 10;
	color: white;
	font-size: .14rem;
}

.section_banner_content{
	position: absolute;
	left: 0;
	bottom: 0;
	padding: 0.05rem 0;
	background: rgba(0,0,0,.3);
	color: #fff;
	width: 100%;
	height: .48rem;
}


.section_banner_name{
	display: block;
	margin-left: .1rem;
	margin-right: .7rem;
	height: .38rem;
	overflow: hidden;
	color: #FFF;
	font-size: .14rem;
	float: left;
}

.section_banner_sc{
	font-size: .12rem;
	display: block;
	position: absolute;
	right: .1rem;
	top: .04rem;
	color: white;
	width: .4rem;
	height: .34rem;
	text-align: center;
	/*line-height: .2rem;*/
}



       /*商品价格*/
.section_price{
	height: .46rem;
	width: 100%;
	background: white;
	padding: .08rem ;
	border-bottom: .01rem solid #ccc;
}

.section_price_in{
	width: 100%;
	height: .3rem;
}

.section_price_left{
	width: 2.15rem;
	height: .3rem;
	float: left;
	margin-left: .1rem;
}

.section_price_price{
	font-size: .2rem;
	color: #ff666b;
	font-weight: 600;
}

.section_price_price span{
	font-size: .14rem;
}

.section_price_right{
	width: 1.2rem;
	height: .3rem;
	float: right;
	line-height: .3rem;
	margin-right: .1rem;
}

.section_price_count{
	font-size: .12rem;
	color: #999;
	text-align: right;
}

.section_price_count span{
	color: #ff666b;
}

   /*商品介绍哇*/
.section_introduce{
	height: .46rem;
	width: 100%;
	border-bottom: .1rem solid whitesmoke;
	padding: .1rem;
}

.section_introduce_p{
	color: #999;
	font-size: .12rem;
}

   /*商品参数哇*/
.section_parameter{
	height: 2.12rem;
	width: 100%;
	padding: .1rem;
	/*margin-top: .1rem;*/
	border-bottom: .1rem solid whitesmoke;
}

.xian{
	width: .04rem;
	height: .14rem;
	background: #ff666b;
	display: block;
	float: left;
	margin-top: .03rem;
	margin-right: .1rem;
}

.parameter_top{
	height: .22rem;
	font-size: .15rem;
}

.parameter_top_p{
	font-size: .15rem;
	font-weight: 600;
	color: #333;
}

.parameter_foot{
	height: 1.64rem;
	color: #333;
}

.parameter_foot_li{
	font-size: .12rem;
	margin-top: .05rem;
	overflow: hidden;
	/*height: 100%;*/
}

.parameter_foot_span{
	/*display: block;*/
	width: .74rem;
	text-align: right;
	float: left;
}

.parameter_foot_p{
	/*display: block;*/
	color: #666;
	width: 2.71rem;
	float: left;
}

       /*这是客户评价的地方*/
.section_evaluate{
	height: 2.46rem;
	width: 100%;
	padding: .1rem;
	margin-top: .05rem;
	position: relative;
	border-bottom: .1rem solid whitesmoke;
}

.show_more{
	position: absolute;
	right: 0.15rem;
	top: 0.08rem;
	color: #999;
	
}

.parameter_con{
	height: 2.04rem;
	
}

.parameter_con_li{
	padding: .1rem 0;
}

.parameter_con_ul{
	padding: 0 .15rem;
}


.parameter_con_li_a{
	display: block;
	color: #222;
	text-decoration: none;
	overflow: auto;
}

.parameter_con_li_name{
	height: .31rem;
	
}

.parameter_con_li_name_img{
	width: .3rem;
	height: .3rem;
	border-radius: .15rem;
	float: left;
}

.parameter_con_li_name_p{
	display: block;
	font-size: .12rem;
	margin-left: .05rem;
	color: #999;
	float: left;
	line-height: .3rem;
}

.parameter_con_li_name_span{
	display: block;
	margin-top: .09rem;
	width: .56rem;
	height: .1rem;
	float: right;
	margin-right: .1rem;
	background: url(https://s02.lizi.com/images/wap/star.png) repeat-x;
	background-size: contain;
}

.parameter_con_li_font{
	height: .67rem;
	padding: .05rem 0;
	color: #666;
	margin-top: .05rem;
}

.parameter_con_li_font_txt{
	font-size: .14rem;
}

.parameter_con_li_img{
	padding: .05rem 0;
	width: .5rem;
	height: .5rem;
}

.parameter_con_li_img img{
	width: 100%;
	height: 100%;
}

.parameter_con_li_no{
	height: .16rem;
	font-size: .12rem;
	color: #999;
}

         /*静态页面马上铺完     这是自营*/
.section_store{
	height: 1.26rem;
	color: #333;
	padding: .1rem;
	border-bottom: .1rem solid whitesmoke;
}

.section_in_store{
	padding: .05rem;
	overflow: hidden;
}

.section_in_store_img{
	width: .6rem;
	margin-right: .1rem;
	width: .6rem;
	height: .86rem;
	float: left;
}

.section_in_store_img img{
	width: .6rem;
	height: .6rem;
}

.section_in_store_con{
	width: 2.72rem;
	height: .86rem;
	padding-top: .03rem;
	font-size: .14rem;
	float: left;
}

.section_in_store_con_xin{
	color: #ff666;
	font-size: .12rem;
	/*margin: .05rem 0;*/
}

.section_in_store_con_service span{
	display: inline-block;
	color: #ffb72c;
	font-size: .1rem;
	padding: .02rem .03rem;
	border: .01rem solid #ffb72c;
	margin-right: .05rem;
	margin-bottom: .05rem;
	border-radius: .02rem;
}

      /*差不多的商品样式排版*/
.section_Recommend{
	height: 1.6rem;
	overflow: hidden;
	margin-top: .1rem;
	padding: .1rem;
	border-bottom: .1rem solid whitesmoke;
	position: relative
}

.section_Recommend_con{
	margin-top: .05rem;
}

.section_Recommend_ul{
	height: 1.2rem;
	overflow: auto;
	display: flex;
	justify-content: space-between;
}

.section_Recommend_li{
	/*float: left;*/
	width: 1.3rem;
	text-align: left;
	padding-right: .2rem;
	font-size: .12rem;
	margin-right: .12rem;
}

.section_Recommend_li_img{
	width: .8rem;
	padding-left: .14rem;
}

.section_Recommend_li_h3{
	color: #444;
	display: block;
	width: 1.3rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.section_Recommend_li_s1{
	color: #ff666b;
	margin-right: .06rem;
	font-weight: 600;
}

.section_Recommend_li_s2{
	font-size: .12rem;
	text-decoration: line-through;
	color: #9e9e9e;
}

    /*商品图片介绍*/
#piccon{
	width: 100%;
	height: auto;
	margin-bottom: .2rem;
	padding: .1rem;
}

.piccon_con{
	height: .32rem;
	background: #ff666b;
	color: #fff;
	line-height: .32rem;
	padding: 0 .1rem;
	margin-bottom: .1rem;
	font-size: .16rem;
}

.piccon_pic{
	width: 100%;
}

.piccon_pic_li img{
	width: 100%;
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




    /*footerwrap样式布局*/
#footerwrap{
	height: .45rem;
	width: 100%;
  background: white;
  position: fixed;
  left: 0;
  bottom: 0;
}

#footerwrap_ul{
	
}

#footerwrap_ul li{
	height: .45rem;
	float: left;
	line-height: .45rem;
}

#footerwrap_ul li:nth-child(2){

	float: left;

}


#footerwrap_ul li:nth-child(3){
	height: .45rem;
	float: right;
	line-height: .45rem;
}

.footerwrap_price{
	font-size: .2rem;
	width: 1.78rem;
	margin-left: .15rem;
	color: #ff666b;
	font-weight: 600;
}

.footerwrap_price span{
	font-size: .14rem;
}


.footerwrap_service{
	font-size: .1rem;
	font-weight: 600;
	height: .1rem;
	margin-top: .1rem;
	margin-right: .04rem;
}

.join_shopcar{
	height: 100%;
	width: 1.36rem;
	background: #ff666b;
	float: right;
	font-size: .16rem;
	text-align: center;
	color: white;
	font-weight: 600;
}

.kefu{
	font-size: .16rem;
	font-weight: 600;
	display: block;
	color: #ff666b;
	width: .3rem;
	height: .15rem;
	position: absolute;
	top: -.04rem;
}
</style>
