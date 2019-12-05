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
					<span>500汇伯币</span>
					<span>有效期365天</span>
				</p>
				<p class="color-blue">￥500</p>
				<a href="">充值</a>
			</li>
			<li>
				<p>
					<span>1000汇伯币</span>
					<span>有效期365天</span>
				</p>
				<p class="color-blue">￥1000</p>
				<a href="">充值</a>
			</li>
			<li>
				<p>
					<span>2000汇伯币</span>
					<span>有效期365天</span>
				</p>
				<p class="color-blue">￥2000</p>
				<a href="">充值</a>
			</li>
			<li>
				<p>
					<span>5000汇伯币</span>
					<span>有效期365天</span>
				</p>
				<p class="color-blue">￥5000</p>
				<a href="">充值</a>
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

