<template>
	<div class="BannerWarp">
	  	<div class="swiper-container" :class="swiperID">
			<div class="swiper-wrapper">
				<slot></slot>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination" v-show="iShowpagination">{{iShowpagination}}</div>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
export default {
	props:{
		swiperID:{type:String,default:""},
		paginationType:{type:String,default:"bullets"},
		iShowpagination:{type:Boolean,default:true}
		
	},
	mounted(){
		var mySwiper = new Swiper('.'+this.swiperID,{
			loop: true, // 循环模式选项
			autoplay:true,
			pagination:{
				el:'.swiper-pagination',
				type:this.paginationType
			}
		});
	}
};
</script>

<style lang="less" scoped="scoped">
.swiper-wrapper{
	width: 100%;
	
}
.swiper-wrapper img{
	width: 100%;
}
</style>
