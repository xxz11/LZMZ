<template>
      <footer id = "footerwrap">
					<ul id = "footerwrap_ul">
								<li>
									<p class = "footerwrap_price"><span>¥</span>46.00</p>
								</li>
								<li>
									<span class="iconfont icon-buoumaotubiao10  kefu"></span>
									<p class = "footerwrap_service">客服</p>
								</li>
								<li>
									<div class = "join_shopcar">
										加入购物车
									</div>
								</li>
					</ul>
			</footer>
</template>

<script>
	
import axios from 'axios';

export default {
	  name: 'Footer'
}
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	
	
@import "../assets/font/iconfont.css";


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
