<template>
  <div id="app">
    <router-view/>
		<Tabbar v-if="this.$route.path!=='/login'&&this.$route.path!=='/register'"></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar.vue'
import {obj} from '../static/js/util.js'
export default {

  components:{
		Tabbar
	},
	mounted(){
		obj.setRem();
	}
}
</script>

<style lang="less">
*{
	margin: 0;
	padding: 0;
}
</style>
