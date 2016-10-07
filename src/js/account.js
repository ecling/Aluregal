$(function(){
	//account setting tab
	if($('.account_setting_tab').length>0){
		(function(){
			var J_li = $(".J_li li"),
			J_div = $(".J_div>div");

			J_li.on('click',function(){
				var index = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				J_div.hide().eq(index).show();
			});
		})();	
	}
})