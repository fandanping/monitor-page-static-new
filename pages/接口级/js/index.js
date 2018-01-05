$(document).ready(function(){
	$("#nav-list").on('click','li',function(){
		$(".main-body").find(".main-show").eq($(this).index()).show().siblings().hide()
	})

	$("#pressureMenu").on("click",'li',function(){
		var text = $(this).find('a').text()
		$("#pressure").find(".dropdown-text").text(text)
		
	})
	
})

