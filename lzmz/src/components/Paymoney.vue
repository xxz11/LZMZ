<template>
  <div id="Paymoney">
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
					
					       <!-- 收货信息 -->
					<div class = "section_nav">
						   收货信息：
					</div>      	
	      	
	      	        <!-- 设置收货地址 -->
					<div class = "section_address">
						  请先设置你的收货地址
					</div>
					
					
					      <!-- 丽子自营 -->
					<div class = "section_shop">
						  <ul class = "shop_ul">
						  	 <li class = "shop_li">
						  	 	  丽子自营
						  	 </li>
						  	 <li class = "shop_li">
						  	 	  <span class = "iconfont icon-buoumaotubiao10  shop_span"></span>
						  	 </li>
						  </ul>
					</div>
	 
	
	             <!-- 商品清单 -->
	        <div class = "section_goods">
	        	   <div class = "goods_img">
	        	   	    <img src="../../static/img/11.jpg">
	        	   </div>
	        	   <div class = "goods_con">
	        	   	    <div class = "con_set">
	        	   	    	   <a href="javascripts:;" class = "con_a">韩国Innisfree悦诗风吟ECO生机健康自动旋转双头眉笔0.3g</a>
	        	   	    	   <p class = "con_p1">规格 : 03#灰色</p>
	        	   	    	   <p class = "con_p2">¥26</p>
	        	   	    </div>
	        	   </div>
	        	   <div class = "goods_num">
	        	   	   x2
	        	   </div>
	        </div>
	         <div class = "section_goods">
	        	   <div class = "goods_img">
	        	   	    <img src="../../static/img/3.jpg">
	        	   </div>
	        	   <div class = "goods_con">
	        	   	    <div class = "con_set">
	        	   	    	   <a href="javascripts:;" class = "con_a">韩国Innisfree悦诗风吟ECO生机健康自动旋转双头眉笔0.3g</a>
	        	   	    	   <p class = "con_p1">规格 : 03#灰色</p>
	        	   	    	   <p class = "con_p2">¥26</p>
	        	   	    </div>
	        	   </div>
	        	   <div class = "goods_num">
	        	   	   x2
	        	   </div>
	        </div>
	      	
	      	
	      	<!--是否开具发票-->
	      	<div class = "section_invoice">
	      		  <div class = "invoice_left">
	      		  	是否开具发票
	      		  </div>
	      		  <div class = "invoice_right">
	      		  	<span class = "right_use">
	      		  		 <label></label>
	      		  	</span>
	      		  </div>
	      	</div>
	      	
	      	
	      	<!--给卖家留言-->
	      	<div class = "section_message">
	      		<textarea placeholder="给卖家留言"></textarea>
	      		
	      	</div>
	      
	        <!--运费是否免邮-->
	        <div class = "section_freight">
	        	   <ul class = "freight_ul">
	        	   	   <li class = "freight_li">
	        	   	   	       运费
	        	   	   </li>
	        	   	   <li class = "freight_li">
	        	   	   	    已免邮
	        	   	   </li>
	        	   </ul>
	        </div>
	      
	        <!--价格总计-->
	        <div class = "section_price">
	        	  合计：<span class = "price_span">¥236.00</span>
	        </div>
	      
	      <!--这是一个空白区域-->
	      <div class = "section_blank">
	      	
	      </div>
	      
	      
	      <!--是否使用平台优惠券-->
	      <div class = "section_coupon">
	      	   <ul>
	      	   	   <li class = "coupon_li">
	      	   	   	   是否使用平台优惠券
	      	   	   </li>
	      	   	   <li class = "coupon_li">
	      	   	   	  不使用平台优惠券》
	      	   	   </li>
	      	   </ul>
	      	
	      </div>	
	      
	      
	      <!--是否开具发票-->
	      	<div class = "section_invoice">
	      		  <div class = "invoice_left">
	      		  	使用余额
	      		  </div>
	      		  <div class = "invoice_right">
	      		  	<span class = "right_use">
	      		  		 <label></label>
	      		  	</span>
	      		  </div>
	      	</div>
            
      </section>
      
     <footer id = "footerwrap">
					<ul id = "footerwrap_ul">
								<li>
									<span class = "footerwrap_count">共有<i>6</i>件商品</span>
									<p class = "footerwrap_price"><span>总计:</span>¥46.00</p>
								</li>

								<li>
									<div class = "join_shopcar">
										提交订单
									</div>
								</li>
					</ul>
			</footer>
			
				

		  
  </div>
</template>

<script>
	
import axios from 'axios';
import Footer from './Footer'	
	
export default {
	  name: 'Paymoney',
	  components : {
	  	Footer
	  },
	  data () {
	    return {
	      msg : '提交订单',
	      client : '丽子美妆客户端'
	    }
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
#box{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

   /*sectionwrap样式布局*/
#sectionwrap{
	width: 100%;
	height: 100%;
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


     /*收货信息*/
.section_nav{
	padding: .08rem .15rem;
	background: #f5f5f5;
	font-size: .14rem;
}    


      /*这是收货地址*/
.section_address{
	height: .4rem;
	width: 100%;
	padding: .1rem .15rem;
	font-size: .12rem;
	color: #ff666b;
}     



       /*丽子自营*/
.section_shop{
	height: .42rem;
	width: 100%;
	background: #f5f5f5;
	line-height: .3rem;
	font-size: .14rem;
	padding: .06rem .08rem .06rem .15rem ;
}

.shop_li{
	float: left;
}

.shop_li:nth-child(2){
	float: right;
}

.shop_span{
	color: #ff666b;
}



   /*商品清单*/
.section_goods{
	height:1.04rem;
	width: 100%;
	border-bottom: .01rem solid #e8e8e8;
	padding: .13rem .15rem;
	position: relative;
}

.goods_img{
	width: .74rem;
	height: .74rem;
	border:.01rem solid #eee;
	overflow: hidden;
	float: left;
}

.goods_img img{
	width: 100%;
	height: 100%;
}

.goods_con{
	height: .74rem;
	width: 2.66rem;
	float: left;
	font-size: .12rem;
	padding: 0 .45rem 0 .1rem;
	
}

.con_a{
	color: #222;
	
}

.con_p1{
	color: #999;
	margin: .04rem 0;
	
}

.con_p2{
	color: #ff666b;
	font-size: .14rem;
}

.goods_num{
	position: absolute;
	bottom: .1rem;
	right: 0.2rem;
  font-size: .14rem;
}


    /*是否开具发票*/
.section_invoice{
	height: .43rem;
	width: 100%;
	padding: .1rem .15rem;
	border-bottom: .01rem solid #e8e8e8;
	font-size: .16rem;
}

.invoice_left{
	width: 70%;
	padding-top: .02rem;
	float: left;
}

.invoice_right{
	font-size: .12rem;
	text-align: right;
	color: #999;
	-webkit-tap-highlight-color:rgb(0,0,0,0)
}

.right_use{
	display: inline-block;
	width: .39rem;
	height: .22rem;
	border-radius: .15rem;
	background: #ddd;
	position: relative;
}

.right_use label{
	position: absolute;
	left: .01rem;
	top: .01rem;
	width: .2rem;
	height: .2rem;
	border-radius: .1rem;
	background: #F5F5F5;
	transition: all .3s;
}

   /* 给卖家留言 */
.section_message{
	height: .65rem;
	width: 100%;
	padding: .15rem;
	border-bottom: .01rem solid #E8E8E8;
	position: relative;
}

.section_message textarea{
	width: 90%;
	height: .34rem;
	font-size: .12rem;
	overflow: hidden;
	border: .01rem solid #eee;
	padding: .07rem .1rem;
	box-sizing: border-box;
	vertical-align: middle;
	position: absolute;
	top: .15rem;
	left: .15rem;
}


    /*是否免邮啊*/
.section_freight{
	height: .41rem;
	border-bottom: .01rem solid #E8E8E8;
	padding: .1rem .15rem;
	font-size: .14rem;
}

.freight_li{
	float: left;
}

.freight_li:nth-child(2){
	float: right;
	color: #ff666b;
	font-weight: 600;
}


/*价格总计*/
.section_price{
	height: .4rem;
	font-size: .12rem;
	text-align: right;
	color: #666666;
	padding: .1rem .15rem;
	border-bottom: .01rem solid #E8E8E8;
}

.price_span{
	color: #ff666b;
	font-weight: 600;
}


.section_blank{
	height: .1rem;
	width: 100%;
	background: #f5f5f5;
}


/*是否使用平台优惠券啊*/

.section_coupon{
	height: .43rem;
	border-bottom: .01rem solid #e8e8e8;
	font-size: .12rem;
	padding: .12rem .15rem;
}

.coupon_li{
	float: left;
}

.coupon_li:nth-child(2){
	float: right;
}



    /*footerwrap样式布局*/
   
#footerwrap{
	  height: .45rem;
	  width: 100%;
    background: white;
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: .12rem;
    padding-left: .1rem;
}

#footerwrap_ul li{
	height: .45rem;
	float: left;
	line-height: .45rem;
}

#footerwrap_ul li:nth-child(2){
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

.footerwrap_count i{
	color: #ff666b;
	font-size: .14rem;
}
</style>
