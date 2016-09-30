$(function(){
	var li = $(".J_li li"),
		div = $(".J_div>div");
	li.on('click',function(){
		index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		div.hide();
		div.eq(index).show();
	})
});