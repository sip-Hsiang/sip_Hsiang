// JavaScript Document
$(document).ready(function(){
	$("#register").click(function(){
		alert("暂时不开放注册呢╮(╯-╰)╭");							 
	});
	
	
	$(".big-box-btn").children("span").each(function(){
		if($(this).attr("class")!="dq"){	
		$(".big-box-img a").eq($(this).index()).addClass("big-boxout");
		};									
	});
	$(".big-box-btn span").click(function(){
		$(this).siblings("span").removeClass("dq").addClass("qt");
		$(this).removeClass("qt").addClass("dq");
		//alert($(this).index());
		$(".big-box-img a").eq($(this).index()).removeClass("big-boxout");
		$(".big-box-img a").eq($(this).index()).siblings(".big-box-img a").addClass("big-boxout");
		var title=$(".big-box-img a").eq($(this).index()).attr("big-box-title");
		$(".big-box-title p").html(title);
	});
})