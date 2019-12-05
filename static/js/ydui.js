;(function($) {

	var LightBox = function() {

		var self = this;

		//创建遮罩和弹出框
		this.popupMask = $('<div class="mask-black" style="display:none"></div>');
		this.popupWin = $('<div class="m-cityselect"></div>');
		this.cityselectHeader = $('<div class="cityselect-nav"></div>');
		this.cityselect = $('<ul class="cityselect-content"></ul>');
		
		//保存body
		this.bodyNode = $("#app");
		this.bodyNoded = $(document.body);

		//渲染剩余的DOM插入到body;
		this.renderDOM();
		
		this.cityNav = this.cityselectHeader.find("a");
		this.cityA = this.cityselect.find("a");
		
		//事件委托
		this.numStyle=null;
		this.idStyle=null;
		this.idlength=null;
		this.idname=null;
		this.bodyNoded.delegate(".J_Address","click",function(e){
			//阻止冒泡
			e.stopPropagation();
			var dataIdname=$(this).attr("data-idname");//标识
			var dataN=$(this).attr("data-n");//联动数
			var dataId=$(this).attr("data-id");//分类
			var dataLength=parseInt($(this).attr("data-maxlength"));//选择数量
			
			if(dataId != self.idStyle || dataLength != self.idlength || dataN != self.numStyle){
				self.idname=dataIdname;
				self.numStyle=dataN;
				self.idStyle=dataId;
				self.idlength=dataLength;
				self.getGroup();
				if(self.idlength<=1){
					$(".cityselect-content p").hide();
				}else{
					$(".cityselect-content p").show();
				}
				//加载初始第一级数据   cid按等级输出从0开始
				$(".cityselect-content").removeClass("cityselect-move-animate cityselect-next-two cityselect-next cityselect-prev");
				$(".cityselect-title").html("");
				var strBuf = "";
				var parentID="0";
				if (self.idStyle == 1) {
					var aurl="https://www.huibojob.com/api/city/getcitylist"
					
					$.ajax({
			            data: { parent_id: parentID },
			            type: "POST", //提交方式
			            dataType: 'json',
			            url: aurl,
			            success: function (result) {
			            	console.log(result.data.citylist)
			                $.each(result.data.citylist, function (index, item) {
				                strBuf += '<a cid="0" id="" data-value="' + item.city_id + '" data-name="' + item.city_name +'"  href="javascript:;"><span>' + item.city_name + '</span></a>';
				            });
				            $("#city0").html(strBuf);
			            },
			            error: function () {
			                console.log('获取区域数据失败！');
			            }
			        });
		            
	            }else{
	            	var aurl="/jobclass/getclasslist"
					$.ajax({
			            data: { parent_id: parentID },
			            type: "POST", //提交方式
			            dataType: 'json',
			            url: aurl,
			            success: function (result) {
			            	console.log(result.data)
			                $.each(result.data.classlist, function (index, item) {
				                strBuf += '<a cid="0" id="" data-value="' + item.type_classid + '" data-name="' + item.type_name +'"  href="javascript:;"><span>' + item.type_name + '</span></a>';
				            });
				            $("#city0").html(strBuf);
			            },
			            error: function () {
			                console.log('获取职位数据失败！');
			            }
			        });
	            }
	            
	            
			}
			self.popupWin.addClass("brouce-in");
			self.popupMask.show();
		})
		//tabs点击
		this.bodyNoded.delegate(".cityselect-nav a","click",function(e){
			var $index=$(this).index();
			$(this).addClass('crt').siblings().removeClass('crt');
		    if($index<=1){
		    	$(".cityselect-content").removeClass("cityselect-move-animate cityselect-next-two cityselect-next").addClass("cityselect-move-animate cityselect-prev");
		    }else if($index==2){
		    	$(".cityselect-content").removeClass("cityselect-move-animate cityselect-prev cityselect-next-two").addClass("cityselect-move-animate cityselect-next");
		    }else if($index==3){
		    	$(".cityselect-content").removeClass("cityselect-move-animate cityselect-prev cityselect-next").addClass("cityselect-move-animate cityselect-next-two");
		    }
		})
		//城市点击加载
		this.bodyNoded.delegate(".cityselect-content a","click",function(e){
			var cid=parseInt($(this).attr("cid"));
			var dvalue=$(this).attr("data-value");
			var dname=$(this).attr("data-name");
			var $nav = $('.cityselect-nav a');
			var $city = $(".cityselect-content");
		    $nav.removeClass('crt');
		    $nav.eq(cid).html(dname);
		    $nav.eq(cid).attr("data-value",dvalue);
		    $nav.eq(cid + 1).addClass('crt').html('请选择');
		    $nav.eq(cid + 2).removeClass('crt').html('');
		    $nav.eq(cid + 3).removeClass('crt').html('');
			var aid=cid+1;
			if(aid<=1){
	    		$city .removeClass("cityselect-move-animate cityselect-next-two cityselect-next").addClass("cityselect-move-animate cityselect-prev");
		    }else if(aid==2){
		     	$city .removeClass("cityselect-move-animate cityselect-prev cityselect-next-two").addClass("cityselect-move-animate cityselect-next");
		    }else if(aid==3 && self.idStyle == 1){
		     	$city .removeClass("cityselect-move-animate cityselect-prev cityselect-next").addClass("cityselect-move-animate cityselect-next-two");
		    }
		    //判断是类型
		    if(self.idStyle==1){
				self.ajaxCity(cid,dvalue,dname);
			}else if(self.idStyle==2){
				self.ajaxJob(cid,dvalue,dname)
			}
			$("#city"+(cid+2)).html("");
			//判断是否是单选
			if(self.idlength==1){
				//最后一级选择关闭
				if(cid==(self.numStyle-1)){
					$(".mask-black").hide();
					$(".brouce-in").removeClass("brouce-in");
					console.log(dname)
					$("a[data-idname="+self.idname+"] .mui-input").val(dname);
					$("a[data-idname="+self.idname+"] input[type=hidden]").val(dvalue);
				}
			}else{
				//最后一级选 上
				if(cid==(self.numStyle-1)){
				    self.eachFun(dvalue);
				    self.xzFun(dname,dvalue);
				}
			}
		})
		//选择上一级城市
		this.bodyNoded.delegate(".cityselect-content p","click",function(e){
			var dvalue=$(this).attr("data-value");
			var dname=$(this).text();
		    self.eachFun(dvalue);
		    self.xzFun(dname,dvalue);
		})
		this.bodyNoded.delegate(".mask-black,.qding","click",function(){
			if(self.idlength>1 && $(".cityselect-title a").length>0){
				var valResult=[];
				var nameResult=[];
				$(".cityselect-title a").each(function(){
					var cvalue = $(this).attr("data-value");
					var cname = $(this).text();
				  	valResult.push(cvalue); 
				  	nameResult.push(cname); 
			  	}) 
			  	console.log(valResult,nameResult);
			  	valResult = valResult.join(',');
			  	nameResult = nameResult.join(',');
			  	$("a[data-idname="+self.idname+"] .mui-input").val(nameResult);
				$("a[data-idname="+self.idname+"] input[type=hidden]").val(valResult);
			}
			$(".mask-black").hide();
			$(".brouce-in").removeClass("brouce-in");
		})
		this.bodyNoded.delegate(".cityselect-title a","click",function(){
			$(this).remove();
	    })
		
	}
	LightBox.prototype = {
		//加载城市筛选数据
		ajaxCity:function(cid,dvalue,dname){
			var aid=cid+1;
			$("#city"+aid).parent().find("p").text(dname).attr("data-value",dvalue);
			var strBuf="";
			
			
			$.ajax({
	            data: { parent_id: dvalue},
	            type: "POST", //提交方式
	            dataType: 'json',
	            url: "https://www.huibojob.com/api/city/getcitylist",
	            success: function (result) {
	            	console.log(result.data.citylist)
	                $.each(result.data.citylist, function (index, item) {
		                strBuf += '<a cid="'+aid+'" id="" data-value="' + item.city_id + '" data-name="' + item.city_name +'"  href="javascript:;"><span>' + item.city_name + '</span></a>';
		            });
		            $("#city"+aid).html(strBuf);
	            },
	            error: function () {
	                console.log('获取区域数据失败！');
	            }
	      	});
			
		},
		//加载职位筛选数据
		ajaxJob:function(cid,dvalue,dname){
			var aid=cid+1;
			$("#city"+aid).parent().find("p").hide();
			var strBuf="";
			$.ajax({
	            data: { parent_id: dvalue },
	            type: "POST", //提交方式
	            dataType: 'json',
	            url: "/jobclass/getclasslist",
	            success: function (result) {
	            	console.log(result.data)
	                $.each(result.data.classlist, function (index, item) {
		                strBuf += '<a cid="'+aid+'" id="" data-value="' + item.type_classid + '" data-name="' + item.type_name +'"  href="javascript:;"><span>' + item.type_name + '</span></a>';
		            });
		            $("#city"+aid).html(strBuf);
	            },
	            error: function () {
	                console.log('获取职位数据失败！');
	            }
	        });
		},
		eachFun:function(dvalue){
			$(".cityselect-title a").each(function(){
			  	if($(this).attr("data-value")==dvalue){
			  		$(this).remove();
			  		return
			  	}
			})
		},
		xzFun:function(dname,dvalue){
			if($(".cityselect-title a").length>(this.idlength-1)){
		   		mui.toast("最多选择"+this.idlength+"项！");
		   		return
		    }else{
		    	var ahtml='<a href="javascript:;" data-value="'+dvalue+'">'+dname+'<i class="iconfont icon-cuohao"></i></a>';
			    $(".cityselect-title").append(ahtml);
		    }
		},
		//初始化
		getGroup:function(){
			$(".cityselect-title").html();
			var self = this;
			var numHtml='<a href="javascript:;" class="crt">请选择</a>';
			var cHtml='';
			for(var i=1;i<this.numStyle;i++){
				numHtml=numHtml+'<a href="javascript:;"></a>';
			}
			
			for(var i=0;i<this.numStyle;i++){
				if(i>0){
					cHtml=cHtml+'<li class="cityselect-item">'+
							    '<p data-value="0"></p>'+
								'<div class="cityselect-item-box" id="city'+i+'">'+
								'</div>'+
							'</li>';
				}else{
					cHtml=cHtml+'<li class="cityselect-item">'+
								'<div class="cityselect-item-box" id="city'+i+'">'+
								'</div>'+
							'</li>';
				}
			}
			$(".cityselect-nav").html(numHtml);
			$(".cityselect-content").html(cHtml);
		},
		renderDOM: function() {
			var strDom = '<div class="cityselect-header">' +
				'<div class="citybtn clearfix"></div>' +
				'<p class="cityselect-title"></p>' +
				'<div class="cityselect-nav">' +
				'</div>' +
				'</div>' +
				'<ul class="cityselect-content">' +
				'</ul>';

			//插入到this.popupWin;
			this.popupWin.html(strDom);

			//把遮罩和弹出框插入到body;
			this.bodyNode.append(this.popupMask, this.popupWin);
			
			
		}

	};

	window["LightBox"] = LightBox;

})(jQuery);
$(function(){
	setTimeout(function(){
		var city = new LightBox();
	},200)
})

