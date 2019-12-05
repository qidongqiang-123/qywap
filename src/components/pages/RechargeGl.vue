<style scoped>
	@import "../../../static/css/index.css",
</style>
<style>

</style>
<template>
	<div>
		<van-nav-bar title="汇伯币充值" left-text="返回" left-arrow ></van-nav-bar>
		<div class="zhzj">
				<div class="zhzj-b">
					<span>汇伯币</span>
					<p class="sz">210</p>
					<a href="" class="czbtn">充值</a>
				</div>
				<p class="czsm">汇伯币可在汇伯平台上用于职位刷新、职位置顶、急聘、简历下载等汇伯线上产品，1汇伯币=1元。</p>
			</div>
			
			<div class="jlb">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media">
						<div>
							<img class="mui-pull-left" src="https://m.huibojob.com/static/images/wap/qy-cz1.png">
							<div class="mui-media-body">
								<h1>我的简历包<span> × 355</span><a href="" class="zjbtn">增加</a></h1>
								<p>可直接查看人才简历的联系方式</p>
							</div>
						</div>
					</li>
				</ul>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media">
						<div>
							<img class="mui-pull-left" src="https://m.huibojob.com/static/images/wap/qy-cz2.png">
							<div class="mui-media-body">
								<h1>我的刷新点<span> × 210</span><a href="" class="zjbtn">增加</a></h1>
								<p>刷新后职位排名会立即提前，吸引更多简历投递</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
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

