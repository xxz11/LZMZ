<template>
  <div id="List">
         <header id = "headerwrap">
               
         
         </header>
  	     <section id = "sectionwrap">
  	     	     <div id = "section_con">
  	     	          <ul class = "section_con_ul">
  	     	              <li class = "section_con_li" v-for="item in list">
  	     	              	 <router-link :to="{name: 'Xq', params:{fid:[item.title,item.price,item.salesCount,item.pic]}}">
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
	  		list : [
	  		     {"id":"686638658","title":"Beauty Artisan美丽工匠薄款纯棉化妆棉1000片 两盒装","pic":"http://img.lizi.com/lizi/store/554b07acf31ef04978652554/c3a7597431e7.jpg!wh300","status":2,"price":46,"counterPrice":46,"liziPrice":46,"marketPrice":118,"proPrice":46,"storeId":"554b07acf31ef04978652554","enterprisePrice":36,"salesCount":3660,"skuId":615096185449674,"skuSize":1,"storage":185},

{"id":"196929697","title":"法国Givenchy纪梵希四宫格轻盈无痕明星焕彩散粉12g 轻透控油","pic":"http://img.lizi.com/lizi/store/554b07acf31ef04978652554/11e910ac5c03f.jpg!wh300","status":2,"price":369,"counterPrice":369,"liziPrice":369,"marketPrice":574,"proPrice":369,"storeId":"554b07acf31ef04978652554","enterprisePrice":329,"salesCount":684,"skuId":196939698,"skuSize":6,"storage":39},

{"id":"595669597","title":"韩国Banila co芭妮兰zero致柔卸妆膏100ml 深层清洁","pic":"http://img.lizi.com/lizi/store/554b07acf31ef04978652554/3404ccce66ac1.jpg!wh300","status":2,"price":105,"counterPrice":105,"liziPrice":105,"marketPrice":158,"proPrice":105,"storeId":"554b07acf31ef04978652554","enterprisePrice":85,"salesCount":8412,"skuId":595679657,"skuSize":1,"storage":376},

{"id":"16185","title":"美国Elta MD氨基酸泡沫洗面奶207ml 补水温和深层清洁","pic":"http://img.lizi.com/lizi/store/554b07acf31ef04978652554/34043d1ace8e9.jpg!wh300","status":3,"price":159,"counterPrice":159,"liziPrice":159,"marketPrice":254,"proPrice":159,"storeId":"554b07acf31ef04978652554","enterprisePrice":139,"salesCount":860,"skuId":714684819598987,"skuSize":1,"storage":0},

{"id":"735793576","title":"韩国Innisfree悦诗风吟ECO生机健康自动旋转双头眉笔0.3g","pic":"http://img.lizi.com/lizi/store/554b07acf31ef04978652554/34044d011ce0a.jpg!wh300","status":2,"price":28,"counterPrice":28,"liziPrice":28,"marketPrice":88,"proPrice":26,"storeId":"554b07acf31ef04978652554","enterprisePrice":22,"salesCount":5678,"skuId":715089226121913,"skuSize":7,"storage":240},

{"id":"608340836","title":"韩国Mediheal美迪惠尔可莱丝针剂水库面膜 补水保湿免洗","pic":"http://img.lizi.com/lizi/store/554b07acf31ef04978652554/28a63dd787631.jpg!wh300","status":2,"price":109,"counterPrice":109,"liziPrice":109,"marketPrice":199,"proPrice":109,"storeId":"554b07acf31ef04978652554","enterprisePrice":75,"salesCount":1923,"skuId":914362413020063,"skuSize":1,"storage":1113},

{"id":"648514846","title":"日本Dr.Ci:Labo城野医生LaboLabo毛孔收缩水100ml ","pic":"http://img.lizi.com/lizi/store/554b07acf31ef04978652554/34044d011ce0a.jpg!wh300","status":2,"price":119,"counterPrice":119,"liziPrice":119,"marketPrice":173,"proPrice":119,"storeId":"554b07acf31ef04978652554","enterprisePrice":90,"salesCount":2619,"skuId":648434839,"skuSize":1,"storage":286},

{"id":"16689","title":"柏羽滢润悦颜蚕丝面膜 补水保湿提亮肤色 6片盒装","pic":"http://img.lizi.com/lizi/store/554b07acf31ef04978652554/dc57211d173.jpg!wh300","status":2,"price":52,"counterPrice":52,"liziPrice":52,"marketPrice":79,"proPrice":52,"storeId":"554b07acf31ef04978652554","enterprisePrice":45,"salesCount":1422,"skuId":714771237797978,"skuSize":1,"storage":434},

{"id":"587138712","title":"日本CANMAKE井田棉花糖美颜控油蜜粉饼10g 控油定妆哑光光泽","pic":"http://img.lizi.com/lizi/store/554b07acf31ef04978652554/34043d1ace8e9.jpg!wh300","status":2,"price":89,"counterPrice":89,"liziPrice":89,"marketPrice":142,"proPrice":89,"storeId":"554b07acf31ef04978652554","enterprisePrice":79,"skuId":587148714,"skuSize":8,"storage":950},

{"id":"618331830","title":"韩国Innisfree悦诗风吟绿茶茶籽保湿滋润精华液80ml 小绿瓶","pic":"http://img.lizi.com/lizi/store/554b07acf31ef04978652554/c3a7597431e7.jpg!wh300","status":2,"price":138,"counterPrice":138,"liziPrice":138,"marketPrice":210,"proPrice":131,"storeId":"554b07acf31ef04978652554","enterprisePrice":115,"salesCount":5795,"skuId":618251828,"skuSize":1,"storage":90}

	  		]
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
