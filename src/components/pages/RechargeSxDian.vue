<style scoped>
	@import "../../../static/css/index.css",
</style>
<style>

</style>
<template>
	<div>
		<van-nav-bar title="汇伯币充值" left-text="返回" left-arrow ></van-nav-bar>
		<h1 class="cztc-tit">选择充值套餐</h1>
				<ul class="cztc-box">
					<li>
						<p>
							<span>200刷新点</span>
							<span>有效期365天</span>
						</p>
						<p class="kr"> ￥400<span>原价<s>￥600</s></span></p>
						<a href="">购买</a>
					</li>
					<li>
						<p>
							<span>400刷新点</span>
							<span>有效期365天</span>
						</p>
						<p class="kr"> ￥700<span>原价<s>￥1200</s></span></p>
						<a href="">购买</a>
					</li>
					<li>
						<p>
							<span>1000刷新点</span>
							<span>有效期365天</span>
						</p>
						<p class="kr"> ￥1400<span>原价<s>￥3000</s></span></p>
						<a href="">购买</a>
					</li>
				</ul>
	</div>
   
</template>
<script>
import $ from 'jquery'
import axios from 'axios'
export default {
    data() {
	  return {
		
	  };
	},
	methods: {
		
	},
    created(){
     
    }
}

</script>

