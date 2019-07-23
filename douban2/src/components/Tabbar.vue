<template>
  <div class="TabbarWrap">
		<Item title="首页" mark="home" :curr="tabcurr" @sendV="getV">
				<img src="../assets/ic_tab_home_normal.png" slot="normalImg" >
				<img src="../assets/ic_tab_home_active.png" slot="activeImg">
		</Item>
		<Item title="书影音" mark="audio" :curr="tabcurr" @sendV="getV">
				<img src="../assets/ic_tab_subject_normal.png" slot="normalImg">
				<img src="../assets/ic_tab_subject_active.png" slot="activeImg">
		</Item>
		<Item title="广播" mark="broadcast" :curr="tabcurr" @sendV="getV">
				<img src="../assets/ic_tab_status_normal.png" slot="normalImg">
				<img src="../assets/ic_tab_status_active.png" slot="activeImg">
		</Item>
		<Item title="小组" mark="group" :curr="tabcurr" @sendV="getV">
				<img src="../assets/ic_tab_group_normal.png" slot="normalImg">
				<img src="../assets/ic_tab_group_active.png" slot="activeImg">
		</Item>
		<Item title="我的" mark="mine" :curr="tabcurr" @sendV="getV" >
				<img src="../assets/ic_tab_profile_normal.png" slot="normalImg">
				<img src="../assets/ic_tab_profile_active.png" slot="activeImg">
		</Item>
  </div>
</template>

<script>
import Item from "./Item.vue"
export default{
	data(){
		return {
			tabcurr:"home"
		}
	},
	components:{
		Item
	},
	methods:{
		getV(val){
			this.tabcurr=val
		},
		sLogin(){
			console.log("logi_pk")
		}
	},
	mounted() {
		 this.$router.push("/home")
	}
}
</script>
<style scoped lang="less">
.TabbarWrap{
	box-sizing: border-box;
	width: 100%;
	position: fixed;
	bottom: 0;
	border-top: 1px solid gainsboro;
	height:10.5%;
	display: flex;
}
</style>
