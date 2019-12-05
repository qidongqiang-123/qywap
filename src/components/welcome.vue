<style scoped>
	@import "../../static/css/index.css";
</style>
<template>
	
    <div>
		<header class="mui-bar mui-bar-nav nav-top">
			<h1 class="mui-title">企业中心</h1>
		</header>
		<div class="wb-box wb-box2">
			<div class="qy-box">
				<div class="qy-top flex-aj">
					<router-link to="/pages/JobManagement" class="iconfont icon-liaotian"></router-link>
					<router-link to="/pages/userEdit" class="iconfont icon-xiugaijianli"></router-link>
				</div>
				<ul class="mui-table-view qy-user">
					<li class="mui-table-view-cell mui-media">
						<div>
							<img class="mui-media-object mui-pull-left" src="">
							<div class="mui-media-body">
								<h1>欧阳锋先生 <span>签到</span><span class="on">已签到</span></h1>
								<p class="mui-ellipsis">HR主管</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="jjr-list">
			<ul class="mui-table-view qy-text">
				<li class="mui-table-view-cell">
					<div>
						<div class="mui-media-body">
							<h1 class="flex-aj">青岛阿里巴巴网络科技有限公...<a href="" class="iconfont icon-xiugai"></a></h1>
							<p class="mui-ellipsis">互联网/软件/技术 | 私营 | 20-50人</p>
							<span class="rz"><i class="iconfont icon-tanhao"></i>未认证企业<i class="iconfont icon-qianjin"></i></span>
							<span class="rz"><i class="iconfont icon-duoxuan_xuanze"></i>认证企业<i class="iconfont icon-qianjin"></i></span>
						</div>
					</div>
				</li>
			</ul>
			<div class="mui-row zwxq">
				<router-link to="/pages/JobManagement" class="mui-col-sm-4 mui-col-xs-4 on"><i class="">6</i>招聘职位</router-link>
				<router-link to="/pages/Whsme" class="mui-col-sm-4 mui-col-xs-4"><i class="">9</i>谁看过我</router-link>
				<router-link to="/pages/ResumeManagement" class="mui-col-sm-4 mui-col-xs-4"><i class="">98</i>简历管理</router-link>
		    </div>
		</div>
		<div class="addimg" style="margin-top:0.1rem"><img src="https://m.huibojob.com/static/images/wap/add.png" /></div>
		<div class="mui-row huibojld">
		    <div class="mui-col-sm-3 mui-col-xs-3">
				<router-link to="/pages/RechargeBi" >
		        <span>汇伯币</span>
		        <p><strong>0</strong><a href="">充值</a></p>
				</router-link>
		    </div>
		    <div class="mui-col-sm-4 mui-col-xs-4">
				<router-link to="/pages/RechargeDian" >
		        <span>简历点</span>
		        <p><strong>120</strong><a href="">增加</a></p>
				</router-link>
		    </div>
		    <div class="mui-col-sm-4 mui-col-xs-4">
				<router-link to="/pages/RechargeSxDian" >
		        <span>刷新点</span>
		        <p><strong>120</strong><a href="">增加</a></p>
				</router-link>
		    </div>
			<router-link to="/pages/RechargeGl" class="mui-col-sm-1 mui-col-xs-1 iconfont icon-qianjin cz"></router-link>
		</div>
		<div class="mui-content job-center-sx">
			
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-list-title">  
		                我的服务：推荐招聘-年度<span>（2019.07.11 - 2020.07.10）</span>
		        </li>
			</ul>
		    <div class="mui-row">
				<router-link to=" " class="mui-col-sm-4 mui-col-xs-4 on"><i class="iconfont icon-jingyanzhi"></i>VIP会员</router-link>
				<router-link to=" " class="mui-col-sm-4 mui-col-xs-4"><i class="iconfont icon-yijianzhiding"></i>职位置顶</router-link>
				<router-link to=" " class="mui-col-sm-4 mui-col-xs-4"><i class="iconfont icon-zhinengyouhua"></i>职位推荐</router-link>
				<router-link to=" " class="mui-col-sm-4 mui-col-xs-4"><i class="iconfont icon-shuaxin"></i>自动刷新</router-link>
				<router-link to=" " class="mui-col-sm-4 mui-col-xs-4"><i class="iconfont icon-shuaxin"></i>自动刷新</router-link>
				<router-link to=" " class="mui-col-sm-4 mui-col-xs-4"><i class="iconfont icon-pipei"></i>企业模板</router-link>
		    </div>
		</div>
		
		<div class="center-nav">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link to=" " class="mui-navigate-right"> 
		                <i class="iconfont icon-hongbaozhiwei"></i>我的打赏       
		                <span class="mui-right-list">红包职位申请记录</span>
		            </router-link>
		        </li>
		        <li class="mui-table-view-cell">
		            <router-link to=" " class="mui-navigate-right">   
		                <i class="iconfont icon-weixin"></i>微信招聘
		                <span class="mui-right-list">专属H5招聘专题页面</span>
		            </router-link>
		        </li>
		        <li class="mui-table-view-cell">
		            <router-link to=" " class="mui-navigate-right">  
		                <i class="iconfont icon-youcexinxi"></i>应聘咨询
		                <span class="mui-right-list">求职者咨询信息</span>
		            </router-link>
		        </li>
		        <li class="mui-table-view-cell">
		            <router-link to=" " class="mui-navigate-right">   
		                <i class="iconfont icon-users"></i>招聘会
		                <span class="mui-right-list">我参加的招聘会全</span>
		            </router-link>
		        </li>
		        <li class="mui-table-view-cell">
		            <router-link to="/pages/EInformation" class="mui-navigate-right"> 
		                <i class="iconfont icon-zhaopinhuijieshao"></i>企业资料
		                <span class="mui-right-list">企业基本资料、企业认证</span>
		            </router-link>
		        </li>
		        <li class="mui-table-view-cell">
		            <router-link to=" " class="mui-navigate-right"> 
		                <i class="iconfont icon-shezhi"></i>账号管理
		                <span class="mui-right-list">HR账号管理、账号安全</span>
		            </router-link>
		        </li>
		        <li class="mui-table-view-cell">
		            <router-link to=" " class="mui-navigate-right"> 
		                <i class="iconfont icon-youcexinxi"></i>意见反馈
		                <span class="mui-right-list">我们非常看重您的建议</span>
		            </router-link>
		        </li>
		        <li class="mui-table-view-cell">
		            <a v-bind="{href:'tel://'+fwTel}" to=" " class="mui-navigate-right"> 
		                <i class="iconfont icon-lianxi"></i>招聘顾问
		                <span class="mui-right-list">赵芸（{{fwTel}}）</span>
		            </a>
		        </li>
			</ul>
			
		</div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell" style="text-align: center;">
				<a href="javascript:;" @click="loginOut">退出登录</a>
			</li>
		</ul>
		
    </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  data(){
    return{
		fwTel:'123456789'
    }
  },
  methods:{
    //退出登录
    loginOut:function(){
		Dialog.confirm({
		  title: '提示',
		  message: '确定要退出登录吗？'
		}).then(() => {
		  window.sessionStorage.removeItem('data');
		  window.location.reload()
		});
		
      
    }
  }
}
</script>


