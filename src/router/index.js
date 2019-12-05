import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/welcome'
import Login from '@/components/login'
//企业职位简历管理
import JManagement from '@/components/pages/JobManagement'
import RManagement from '@/components/pages/ResumeManagement'
import EInformation from '@/components/pages/EInformation'
import Whsme from '@/components/pages/Whsme'
import Rechargebi from '@/components/pages/RechargeBi'
import RechargeDian from '@/components/pages/RechargeDian'
import RechargeSxDian from '@/components/pages/RechargeSxDian'
import RechargeGl from '@/components/pages/RechargeGl'

Vue.use(Router)

const router = new Router({
	mode : 'hash',
	 base: '/',
  routes: [
    //欢迎页
    {path: '/',name: 'welcome',component: Welcome,meta:{needLogin:true}},
    //登陆
    {path: '/login',name: 'login',component: Login},
    //用户列表
    {
      path: '/pages/Whsme',
      component: Whsme,
      meta:{
        needLogin:true
      }
    },
	//职位管理
	{
	  path: '/pages/JobManagement',
	  component: JManagement,
	  meta:{
	    needLogin:true
	  }
	},
	//简历管理
	{
	  path: '/pages/ResumeManagement',
	  component: RManagement,
	  meta:{
	    needLogin:true
	  }
	},
	//汇伯币充值
	{
	  path: '/pages/Rechargebi',
	  component: Rechargebi,
	  meta:{
	    needLogin:true
	  }
	},
	//简历点充值
	{
	  path: '/pages/RechargeDian',
	  component: RechargeDian,
	  meta:{
	    needLogin:true
	  }
	},
	//刷新点充值
	{
	  path: '/pages/RechargeSxDian',
	  component: RechargeSxDian,
	  meta:{
	    needLogin:true
	  }
	},
	//充值管理
	{
	  path: '/pages/RechargeGl',
	  component: RechargeGl,
	  meta:{
	    needLogin:true
	  }
	},
	//企业资料
	{
	  path: '/pages/EInformation',
	  component: EInformation,
	  meta:{
	    needLogin:true
	  }
	}
    //用户列表->用户编辑
    // {
    //   path: '/pages/userEdit',
    //   name: 'userEdit',
    //   component: Uedit,
    //   meta:{
    //     needLogin:true
    //   },
    //   children:[
    //     {path:'/',name:'userDetail',component: Udetail,meta:{needLogin:true}},//个人信息
    //     {path:'userDiscount',name:'userDiscount',component: Udiscount,meta:{needLogin:true}},//优惠券
    //     {path:'userExpense',name:'userExpense',component: Uexpense,meta:{needLogin:true}},//消费记录
    //     {path:'userAct',name:'userAct',component: Uact,meta:{needLogin:true}},//活动
    //     {path:'userGetCash',name:'userGetCash',component: UgetCash,meta:{needLogin:true}},//提现
    //     {path:'userWorkOrder',name:'userWorkOrder',component: UworkOrder,meta:{needLogin:true}}//工单
    //   ]
    // },
    //用户组管理
   
  ]
})
router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
router.beforeEach((to, from, next) => {
  //debugger
  if (to.meta.needLogin) {
    if(window.sessionStorage.data){
		next()
	}else{
		next("/login")
	}
  }else{
    next()
  }
})

    

export default router;