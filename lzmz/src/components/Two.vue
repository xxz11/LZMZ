<template>
  <div class="hello">

  		<ul>
  			<li v-for="item in los">
  				<router-link :to ="'/lakers/'+ item.name">{{item.name}}</router-link>
  			</li>
  		</ul>

      <router-link to = "/">返回主页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Two',
  data () {
    return {
      los : [
        {name : "拜纳姆" , id : 1} ,
        {name : "奥多姆" , id : 2} ,
        {name : "加索尔" , id : 3} ,
        {name : "科比" , id : 4} 
      ]
    }
  }
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
