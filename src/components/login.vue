<template>
  <div class="login_cont">
	  <header class="mui-bar mui-bar-nav nav-top">
	  	<h1 class="mui-title">企业登录</h1>
	  </header>
	<div class="register-logo">
		<img src="https://m.huibojob.com/static/images/wap/LOGO.png" />
	</div>
    <div class="lr-box">
      <div class="lr-input-box">
		<div class="lr-input-list">
			<el-input placeholder="请输入账户" class="login-input"  v-model="userName"></el-input>
		</div>
		<div class="lr-input-list">
			<el-input placeholder="请输入密码" class="login-input"  v-model="passWord"></el-input>
		</div>
		<div class="btn-box" style="margin-top:0.2rem;">
			<el-button type="primary" class="mui-btn mui-btn-danger mui-btn-block" @click="login">登陆</el-button>
		</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from 'axios'
import qs from 'qs';
export default{
  data(){
    return{
      userName:'',
      passWord:'',
    }
  },
  methods:{
    login:function(){//登陆验证
      if(this.userName==''||this.passWord==''){
        this.$message({
          message: '账号密码不能为空！',
          type: 'warning'
        });
        return;
      }
	  axios.post("/login.html",qs.stringify({
			"user_name":this.userName,
			"password":this.passWord
		})).then((res)=>{
			console.log(res.data)
			
	         if(res.data.status==1){
				if(res.data.data.group_id == 3){
					var ses=window.sessionStorage;
					 //sessionStorage接收的好像是string所以这里吧data解析一下变成json字符串
					var d=JSON.stringify(res.data.data.sign)
					localStorage.setItem('token', "Bearer"+d)
					 //var d=res.data[0].username
					 //把拿到的data放在sessionStorage中
					ses.setItem('data',d)
					 //验证成功进入首页
					this.$router.push('/');
					 //这里有个小bug，登陆成功后导航上面需要刷新才能显示当前用户，暂时手动刷新
					window.location.reload()
				}else{
					this.$message({
					  message: '请使用企业用户登录！',
					  type: 'warning'
					});
				}
	           
	         }else{
	           this.$message({
	             message: '请输入正确的账号密码！',
	             type: 'warning'
	           });
	         }
	     })
      
    }
  }
}
</script>

<style scoped>
	@import "https://m.huibojob.com/static/css/wap/job/job.css"; 
	@import "https://m.huibojob.com/static/css/wap/login/index.css";</style>
