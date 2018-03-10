<template>
  <div class="hello">
      <h1>球员号码</h1>
		 {{$route.params.fid}}
		  <router-link to = "/">返回主页</router-link>
		  <input  type = "text" v-focus>
  </div>
</template>

<script>
export default {
  name: 'Lakers'
//data () {
//  return {
//    los : [
//      {name : "拜纳姆" , id : 1} ,
//      {name : "奥多姆" , id : 2} ,
//      {name : "加索尔" , id : 3} ,
//      {name : "科比" , id : 3} 
//    ]
//  }
//}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
