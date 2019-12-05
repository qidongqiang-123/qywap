<style scoped>
	@import "../../../static/css/index.css"</style>
<template>
	<div>
	<van-nav-bar title="职位管理" left-text="返回" left-arrow></van-nav-bar>
  	<div class="zwgl">
  		<img src="https://m.huibojob.com/static/images/wap/gl.png" />
  		<p>未完成企业认证，职位无法显示</p>
  		<a href="">去认证</a>
  	</div>
  	
  	<div class="zwzt flex-aj">
  		<span>职位状态：
  			<select id="">
  				<option value="">招聘中</option>
  				<option value="">招聘中</option>
  				<option value="">招聘中</option>
  			</select>
  		</span>
  		<a href="">发布职位</a>
  	</div>
  	<div class="wzp">
  		<p>您还没有发布招聘职位</p>
  		<a href="">马上发布招聘信息</a>
  	</div>
  	<div class="zhiwei-item">
  		<div class="zhiwei-top flex-aj">
  			<div class="zhiwei-top-left">
  				<span>4879</span>
  				<p>应聘简历</p>
  			</div>
  			<div class="zhiwei-top-right">
  				<h1>服务员</h1>
  				<span>未上架不展示</span><span class="on">正在招聘</span><span class="out">已关闭</span>
  				<p>浏览11 | 分享浏览0 | 更新 2019-07-13 09:25</p>
  			</div>
  		</div>
  		<div class="zhiwei-btn flex-aj">
  			<a href="javascript:;">关闭</a>
  			<a href="javascript:;">推广</a><!--<a href="" class="on">推广中</a>--><!--不可点击状态reg <a href="javascript:;" class="reg">推广中</a>-->
  			<a href="javascript:;">刷新</a><!--不可点击状态reg <a href="javascript:;" class="reg">刷新</a>-->
  			<a href="javascript:;">分享</a>
  		</div>
  		<div class="warning flex-aj">
  			<p style="margin: 0;">职位的工作地点有误，修改后招聘效果更好哦~</p>
  			<a href="">去完善<i class="iconfont icon-qianjin"></i></a>
  		</div>
  	</div>
	</div>
</template>

<script>
export default{
  
}
</script>
