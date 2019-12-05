
$(function(){
    mui('body').on('tap', '.mui-popover-action li>a', function() {
    	var a = this,
    		parent;
    	//根据点击按钮，反推当前是哪个actionsheet
    	for (parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
    		if (parent.classList.contains('mui-popover-action')) {
    			break;
    		}
    	}
    	//关闭actionsheet
    	mui('#' + parent.id).popover('toggle');
    	if(a.innerHTML=="取消"){
    		return
    	}
    	$("[href='#"+parent.id+"'] .mui-input").val(a.innerHTML);
    	$("[href='#"+parent.id+"'] [type=hidden]").val($(this).attr("data-value"));
    })
    //期望福利
    $(".open-checkbox").click(function(){
    	dataid = $(this).attr("data-id");
    	$(".mask-black").show();
    	$("#"+dataid).addClass("brouce-in");
    })
    $("body").on("click",".mask-black",function(){
    	close();
    })
    
    
    //期望福利&&期望行业
    $(".mui-card .mui-checkbox").click(function(){
    	if($("#"+dataid+" .mui-card .mui-checkbox input:checked").length>5){
    		$(this).find("input").prop("checked",false);
    		mui.toast("最多选择五项！");
    	}
    })
    
    $(".job_tab_filter3-btn input[type=button]").click(function(){
    	$("[data-id="+dataid+"] span").html('');
    	var fuliName = [];
    	var fuliVal = [];
    	var fuliVal1 = null;
    	var ii=0;
    	$("#"+dataid+" .mui-card .mui-checkbox").each(function(){
    		var cd=$(this).find("input").prop("checked");
    		var ctext=$.trim($(this).find("label").text());
    		var cval=parseInt($(this).find("input").val());
    		if(cd==true){
    			fuliVal.push(cval);
    			fuliVal1=fuliVal1+cval;
    			fuliName.push(ctext);
    			ii++;
    			if(dataid=="hangye"){
    				
    			}else{
    				if(ii<=4){
	    				$("[data-id="+dataid+"] span").append('<em>'+ctext+'</em>');
	    				$("[data-id="+dataid+"] [type=text]").val(1);
	    			}
    			}
    		}
    	})
    	if(dataid=="hangye"){
    		$("[data-id="+dataid+"] [type=hidden]").val(fuliVal);
    		$("[data-id="+dataid+"] [type=text]").val(fuliName);
    	}else{
    		if(ii>4){
	    		ii=ii-4;
	    		$("[data-id="+dataid+"] span").append('<i>+'+ii+'</i>');
	    	}
    		fuliVal = fuliVal.join(',');
    		$("[data-id="+dataid+"] [type=hidden]").val(fuliVal1);
    	}
    	
    	close();

    	
    })
    
    mui('body').on('tap', '.mui-card .mui-radio', function() {
    	$("[data-id="+dataid+"] [type=text]").val($.trim($(this).find("label").text()));
    	$("[data-id="+dataid+"] [type=hidden]").val($(this).find("input").val());
    	close();
    })
    //时间选择
    $("[data-id=birthday]").click(function(){
    	var dataid=$(this).attr("id");
		var data=JSON.parse($("#"+dataid).attr("data-options"));
        var dtPicker = new mui.DtPicker(data);  
        dtPicker.show(function (selectItems) {
        	var now = new Date();
			var time = now.getFullYear() + "-" +((now.getMonth()+1)<10?"0":"")+(now.getMonth()+1)+"-"+(now.getDate()<10?"0":"")+now.getDate();
			var stra = new Date(time.replace("-", "/").replace("-", "/"));
			var endtime = selectItems.text;
			var end = new Date(endtime.replace("-", "/").replace("-", "/"));
        	if(end>stra){
        		mui.toast("所选月份不能大于当前月份");
        		return false;
        	}
           $("#"+dataid).find("input").val(selectItems.text); 
           
           dtPicker.dispose();
        })
    });
   
   /*联想查询*/
  	$("#school").focus(function(){
  		$(".xuexiao").slideDown(100);
  	})
  	$("#school").blur(function(){
  		$(".xuexiao").slideUp(100);
  	})
  	$(".xuexiao a").click(function(){
  		$("#school").val($(this).text());
  	})
})
function close(){
	$(".mask-black").hide();
	$(".brouce-in").removeClass("brouce-in");
}

//选择
function jobf(obj,a){
	var windowHeight = $(window).height();
	var navHeight = $(".mui-bar").height();
	var h=windowHeight-navHeight;
	$(".job_tab").height(h);
	$(obj).toggleClass("on").siblings().removeClass("on");
	$(".job_tab").show();
	$("body").addClass("modal-open");
	$(".job_tab .job_tab_filter"+a).toggleClass("active").not(this).siblings().addClass("active");
	if($(".job_tab .job_tab_filter"+a).hasClass("active")){
		$(".job_tab").hide();
		$("body").removeClass("modal-open");
	}
}