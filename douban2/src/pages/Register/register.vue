<template>
	<div>
		<logreg >
			<input type="text" placeholder="手机号" slot="phone">
			<input type="text" placeholder="手机验证码" slot="pass">
			<span class="getCode" slot="getCode">获取验证码</span>
			<router-link to="/login" slot="clfiy"><span class="unser">账户密码登录</span></router-link>
			<span slot="yzAndpass">验证码收不到？</span>
			<span class="PR" slot="PR">
				+86
			</span>
			
		</logreg>
	</div>
</template>

<script>
import logreg from '../../components/loginAndregister.vue'
export default{
	components:{
		logreg
	}
}
</script>

<style lang="less">
	span{
		font-size: 16/64rem;
	}
	.getCode{
		font-size: 16/64rem;
		margin-left: -30/64rem;
	}
	.unser{
		/*line-height: 66/64rem;*/
		margin-top: 40/64rem;
	}
</style>
