<template>
     <div class="hello">
     	<ul>
         <li v-for="item in $store.state.list">
				{{item}}
			</li>
		</ul>	
     </div>
</template>

<script>
	
import axios from 'axios';

export default {
	  name: 'Shopcar'
}
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.hello{
		font-size: .12rem;
	}
</style>
