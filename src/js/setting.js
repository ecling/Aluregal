$(document).ready(function($) {
	var J_li = $(".J_li li"),
		J_div = $(".J_div>div");
	J_li.on('click',function(){
		index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		J_div.hide().eq(index).show();
	})
});