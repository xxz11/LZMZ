<template>
  <div id="List">
         <header id = "headerwrap">
         </header>
  	     <section id = "sectionwrap">
  	     	     <div id = "section_con">
  	     	          <ul class = "section_con_ul">
  	     	              <li class = "section_con_li" v-for="item in list">
  	     	              	 <router-link :to="{name: 'Xq', params:{fid:[item.title,item.price,item.salesCount,item.pic,item.id]}}">
		  	     	                  <div class = "jump">
				  	     	                  	<div class = "section_con_img">
				  	     	                  				<img :src="item.pic">
				  	     	                  	</div>
				  	     	                    <div class ="section_con_price">
				  	     	                    	  	<h2>{{item.title}}</h2>
					  	     	                    	  <div class = "section_con_pricep1">
					  	     	                    	  	<span class = "section_con_prices1">已售出：{{item.salesCount}}</span>
					  	     	                    	  	<span class = "section_con_prices2">市场价：{{item.marketPrice}}</span>
					  	     	                    	  </div>
					  	     	                    	  <div class = "section_con_pricep2">
					  	     	                    	  	¥{{item.price}}
					  	     	                    	  </div>
				  	     	                    </div> 
		  	     	                  </div>
  	     	                  </router-link>
  	     	              </li>
  	     	          </ul>
  	     	     </div>
  	     </section> 	
	</div>	      
</template>

<script>
import axios from 'axios';
	
export default {
	  name: 'List' ,
	  data(){
	  	return{
	  		list : []
	  	}
	  },
	  mounted(){
	  	axios.get("http://localhost:3000/list")
	  	.then((res)=>{
	  		this.list = res.data;
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
#headerwrap{
	height: .88rem;
	width: 100%;
	background: #ff666b;
}      

/*section中间部分*/
#sectionwrap{
	min-height: 100%;
	width: 100%;
	overflow: auto;
	background: #F5F5F5;
	font-size: .12rem;
}

#section_con{
	padding: .1rem;
	transform-origin: 0px 0px 0px;
  opacity: 1;
  transform: scale(1, 1);
  
}

.section_con_li{
	  margin-bottom: 10px;
    padding: 5px;
    background: #fff;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.1);
    border-radius: 2px;
    border: 1px solid #fff;
    overflow: hidden;
}

.jump{
	position: relative;
	text-decoration: none;
  color: #222;
  height: 100%;
  width: 100%;
}

.section_con_img{
	width: 1rem;
	height: 1rem;
	float: left;
	border: none;
}

.section_con_img img{
	width: 100%;
	height: 100%;
}

.section_con_price{
	padding: .05rem;
	color: #222;
	width: 2.23rem;
	float: left;
}

.section_con_price h2{
	font-size: .12rem;
	height: 36px;
  overflow: hidden;
  padding: 5px 0;
  margin-bottom: .1rem;
}

.section_con_prices1{
	  display: block;
	  float: left;
    font-size: 12px;
    color: #999;
}

.section_con_prices2{
	  display: block;
	  float: left;
	  color: #999;
	  margin-left: .2rem;
}

.section_con_pricep1{
	   color: #ff666b;
	  font-size: .14rem;
	  margin-top: .02rem;
	   width: 100%;
	   overflow: hidden;
}

.section_con_pricep2{
	  color: #ff666b;
	  font-size: .14rem;
	  margin-top: .02rem;
	   width: 100%;
}
</style>
