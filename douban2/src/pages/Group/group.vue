<template>
  <div >
		<Header title="小组">
			<img src="../../assets/ic_actionbar_search_icon.png" slot="lImg" class="lImg">
			<img src="../../assets/ic_chat_green.png" slot="rImg" class="rImg">
				
		</Header>
		<Group_item></Group_item>

  </div>
</template>

<script>
	import Header from "../../components/Header"
	import Group_item from "../../components/group_item"
	export default{
		components:{
			Header,Group_item
		}
	}

</script>


<style scoped>

</style>
