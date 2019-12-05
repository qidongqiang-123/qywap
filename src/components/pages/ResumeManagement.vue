<template>
	<div>
			<van-nav-bar title="已收藏的简历" left-text="返回" left-arrow ></van-nav-bar>
			<!--分类筛选-->
			<van-dropdown-menu>
				<van-dropdown-item v-model="value1" title="查看时间" :options="option1" @change="change1"/>
				<van-dropdown-item v-model="value2" title="是否投递" :options="option2" @change="change2"/>
			</van-dropdown-menu>
			
			<ul class="mui-table-view mianshi-list1">
				<li class="mui-table-view-cell mui-media">
					<div class="mui-media-body">
						<div class="flex-aj"><h1><a href=""><img src="https://m.huibojob.com/static/images/wap/job/图层33.png" />孙悟空</a></h1><em class="delbtn">删除</em></div>
						<p class="mui-ellipsis flex-aj"><span>男 / 39岁 / 本科 / 3-5年经验</span><i>2019-10-05</i></p>
						<p>求职意向：市场部经理</p>
					</div>
				</li>
				<li class="mui-table-view-cell mui-media">
					<div class="mui-media-body">
						<div class="flex-aj"><h1><a href=""><img src="https://m.huibojob.com/static/images/wap/job/图层33.png" />孙悟空</a></h1><em class="delbtn">删除</em></div>
						<p class="mui-ellipsis flex-aj"><span>男 / 39岁 / 本科 / 3-5年经验</span><i>2019-10-05</i></p>
						<p>求职意向：市场部经理</p>
					</div>
				</li>
			</ul>
			<div class="null-box">
				<img src="https://m.huibojob.com/static/images/wap/null.png" />
				<p>抱歉，没有找到符合条件的记录！</p>
			</div>
	</div>
</template>

<script>
import { Toast} from 'vant'
export default{
  data(){
    return{
		value1: 0,
		value2: 'a',
		option1: [
		  { text: '全部商品', value: 0 },
		  { text: '新款商品', value: 1 },
		  { text: '活动商品', value: 2 }
		],
		option2: [
		  { text: '默认排序', value: 'a' },
		  { text: '好评排序', value: 'b' },
		  { text: '销量排序', value: 'c' },
		]
    }
  },
  mounted:function(){
   
  },
  methods:{
		change1(){
			Toast(this.value1)
		}
  }
}
</script>

<style scoped>
	@import "../../../static/css/eindex.css";
</style>
