 <template>
  <div >
	<Header title="书影音">
		<img src="../../assets/ic_actionbar_search_icon.png" slot="lImg" class="lImg">
			<img src="../../assets/ic_chat_green.png" slot="rImg" class="rImg">
			
	</Header>
	<nav class="nav">
			<span :class="{active:currIndex==0}" @click="currIndex=0">
				<router-link to="/audio/film">电影</router-link>
			</span>
			<span :class="{active:currIndex==1}" @click="currIndex=1">
				<router-link to="/audio/read">读书</router-link>
			</span>
			<span :class="{active:currIndex==2}" @click="currIndex=2">
				<router-link to="/audio/tv">电视</router-link>
			</span>
			<span :class="{active:currIndex==3}" @click="currIndex=3">
				<router-link to="/audio/city">同城</router-link>
			</span>
			<span :class="{active:currIndex==4}" @click="currIndex=4">
				<router-link to="/audio/music">音乐</router-link>
			</span>
		</nav>
		<div class="nav_content">
			<router-view></router-view>
		</div>
  </div>
</template>

<script>
import Header from "../../components/Header"
export default {
		data(){
			return {
				currIndex:0,
			}
		},
		components:{
			Header
		},
		beforeCreate:function(){
			this.$router.push("/audio/film");
		}
	}
</script>
<style lang="less">
	.nav{
		margin-top: 21/64rem;
		height: 35/64rem;
		line-height: 35/64rem;
		border-bottom: 1px solid #ccc;
		display: flex;
		text-align: center;
		a{
			text-decoration: none;
			font-size: 22/64rem;
			color: #666;
		}
		span{
			margin-top: -21/64rem;
			flex: 1;
		}
	}

	span.active{
		background: #07D614;
		a{
			color: #fff;
		}
	}
</style>
