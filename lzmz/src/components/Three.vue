<template>
  <div class="hello">
       <h1>勒布朗</h1>
        <router-link to = "/">返回主页</router-link>
  </div>
</template>

<script>
	
import axios from 'axios'

export default {
  name: 'Three'
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
