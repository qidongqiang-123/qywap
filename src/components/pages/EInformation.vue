<style scoped>
	@import "https://m.huibojob.com/static/css/wap/ydui.css"; 
	@import "../../../static/css/index.css",
</style>
<style>
	.el-input--suffix .el-input__inner{
		margin-bottom:0;
		border:0;
		width:100%;
		padding:0 !important;
	}
	.el-select{
		display: block;
	}
	.mui-from-box li a span em{
		padding:0.05rem;
		background: #FF6600;
		color:#fff;
		font-size:0.1rem;
		margin-right:0.05rem;
		border-radius: 3px;
	}

</style>
<template>
	<div>
		<van-nav-bar title="修改企业资料" left-text="返回" left-arrow ></van-nav-bar>
		<form id="" @submit.prevent="showData">
			<div class="face-box clearfix">
				<van-uploader :after-read="afterRead" />
				<p>上传企业LOGO</p>
			</div>
			<ul class="mui-from-box">
				<li>
				 	<p><span>*</span>企业名称</p>
				 	<a href="javascript:;" class="jt"><input type="text" value="青岛汇伯网络科技有限公司"  class="mui-input" readonly="readonly"/></a>
				</li>
		        <li>
				 	<p><span>*</span>企业简称</p>
				 	<a href="javascript:;" class="jt"><input type="text" placeholder="汇伯网" value="青岛汇伯网络科技有限公司" class="mui-input" /></a>
				</li>
				<li>
				 	<p><span>*</span>所在地区</p>
				 	<a href="javascript:;" class="J_Address" data-idname="adds" data-n="4" data-id="1" data-maxlength="1"><input type="text" placeholder="请选择现所在地" class="mui-input" readonly /><input type="hidden" v-model="formObj.city_id"/></a>
				</li>
				<li>
				 	<p><span>*</span>详细地址</p>
				 	<a href="javascript:;" class="jt"><input type="text" placeholder="请填写详细地址" v-model="formObj.company_address" value="" class="mui-input" /></a>
				</li>
				<li>
				 	<p><span>*</span>企业规模</p>
				 	<a href="javascript:void(0)">
						<select v-model="formObj.scale_id" >
							<option value="" disabled selected hidden>请选择</option>
						    <option v-for="actL in scalelist" v-bind:value="actL.scale_id">{{actL.scale_name}}</option>
						</select>
					</a>
				</li>
				<li>
				 	<p><span>*</span>企业性质</p>
				 	<a href="javascript:void(0)">
						<select v-model="formObj.type_id" >
							<option value="" disabled selected hidden>请选择</option>
						    <option v-for="actL in actList" v-bind:value="actL.type_id">{{actL.type_name}}</option>
						</select>
					</a>
				</li>
				<li>
				 	<p><span>*</span>所属行业</p>
					<a href="javascript:;">
						<select v-model="formObj.profession_id">
							<option value="" disabled selected hidden>请选择</option>
							<option v-for="actH in profession" v-bind:value="actH.profession_id">{{actH.profession_name}}</option>
						</select>
					</a>
				</li>
				<li>
				 	<p>企业网站</p>
				 	<a href="javascript:;" class="jt"><input type="text" placeholder="http://" v-model="formObj.company_url" class="mui-input" /></a>
				</li>
				<li>
				 	<p>企业自评</p>
				 	<a href="javascript:;" class="jt">
						<el-select v-model="scale" class="dd" multiple :multiple-limit="5" placeholder="请选择" >
						    <el-option
						      v-for="actA in appraise"
						      :key="actA.appraise_id"
							  :label="actA.appraise_name"
						      :value="actA.appraise_id">
						    </el-option>
						</el-select>
						<input type="hidden" v-model="formObj.appraise_code"  id="aa"/>
					</a>
				</li>

				<li>
				 	<p>主营业务</p>
				 	<a href="javascript:;" class="jt"><input type="text" v-model="formObj.company_outline" placeholder="请用一句好描述主营业务或行业地位" class="mui-input" /></a>
				</li>
				<li>
				 	<p>座机电话</p>
					<div class="dis-flex">
						<a href="javascript:;" class="jt"><input type="tel" v-model="formObj.company_tel_zone" placeholder="区号" class="mui-input" maxlength="4"/></a>
						<span>- </span>
						<a href="javascript:;" class="jt"><input type="tel" v-model="formObj.company_tel" placeholder="座机号" class="mui-input" maxlength="8"/></a>
						<span>- </span>
						<a href="javascript:;" class="jt"><input type="tel" v-model="formObj.company_tel_extension" placeholder="分机号" class="mui-input" maxlength="8"/></a>
					</div>
				</li>
				<li>
				 	<p><span>*</span>企业介绍</p>
				 	<a href="javascript:;" class="jt"><textarea v-model="formObj.company_intro" placeholder="请输入"></textarea></a>
				</li>
				
			</ul>
			<div style="padding: 0.15rem;background: #fff;">
			 	<p style="font-size:0.12rem;color:#474747">企业风采</p>
			 	<van-uploader
			 	  v-model="fileList"
			 	  multiple
			 	  :max-count="5"
			 	/>
			</div>
			<div class="btn-box">
				<button type="submit" class="mui-btn mui-btn-danger mui-btn-block" >保存</button>
			</div>
		</form>
			
			<div class="mask-black" style="display:none"></div>
	</div>
   
</template>
<script>
import { get_company_type,get_profession,get_company_appraise,get_company_scale } from '@/service/api';
import $ from 'jquery'
import axios from 'axios'
import { Toast} from 'vant'
import { LightBo } from '../../../static/js/ydui.js'

export default {
    data() {
		return {
			imageUrl: '',
			dialogImageUrl:'',
			dialogVisible: false,
			scalelist:[],
			actList: [],
			profession:[],
			appraise:[],
			scale:"",
			formObj:{
				profession_id:"",
				scale_id:"",
				type_id:"",
				appraise_code:"",
				company_tel_zone:'',
				company_tel:'',
				company_tel_extension:'',
				company_outline:'',
				company_url:'',
				company_address:'',
				city_id:''
			},
			fileList:[]
			
		}
	},
    created() { 
		this.getlist()
    },
	methods: {
		getlist() {   
			//企业规模
			get_company_scale({                    
			    type: 1            
			}).then(res => {
			    this.scalelist = res.data           
			})  
			//企业类型
            get_company_type({                    
                type: 1            
            }).then(res => {
                this.actList = res.data           
            })     
			//行业
			get_profession({
			   type: 1            
		    }).then(res => {
			   this.profession = res.data          
		    })   
			//企业印象
			get_company_appraise({
			   type: 1            
			}).then(res => {
			   this.appraise = res.data         
			}) 
        },

		// change(){//这个vId也就是value值
		// 	let sum=0
		// 	this.scale.forEach(actA => {
		// 		let ac=parseInt(actA)
		// 		sum+=ac;
		// 	})
		// 	this.formObj.appraise_code=String(sum)
		// },
		diyfun:function(){
		     LightBo();
		},
		showData(e){
			//axios
			axios.post('/member/company/index',this.formObj).then(res => {
				console.log(res)
			}).catch(err => {
				console.log(错误)
			});
			
		},afterRead(file) {
		  // 此时可以自行将文件上传至服务器
		  console.log(file);
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		}
		
	},
}

</script>

