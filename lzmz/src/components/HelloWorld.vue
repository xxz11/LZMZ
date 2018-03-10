<template>
  <div class="hello">
       <router-link active-class="active" to = "/two">湖人</router-link>
        <router-link active-class="active" to = "/three">热火</router-link>
  </div>
</template>

<script>
	
import axios from 'axios';
	
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   mounted() {  axios.get("/team/?id=5?ptag=baidu.ald.sc.nba")
    .then((res)=>{
      console.log(res);
    })
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
