// JavaScript Document
$(document).ready(function(){
	$(".denglu").click(function(){
		var name=$(".zhanghu").val();
		var passwd=$(".mima").val();
			if(name==""|passwd==""){
				if(name==""){
					$(".denglu-box-p1 p").css("display","inline");
				}else{
					$(".denglu-box-p1 p").css("display","none");
				}
				if(passwd==""){
					$(".denglu-box-p2 p").css("display","inline");
				}else{
					$(".denglu-box-p2 p").css("display","none");
				}
			}	
	});
	$(".mimazhaohui a").click(function(){
		alert("该功能尚未完善(●'▽'●)");							 
	});
})