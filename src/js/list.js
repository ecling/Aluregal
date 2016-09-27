(function($){

})(jQuery);

$(function(){
	//product quick view
	(function(){
		var proItems = $('.pro-list li'),
			popUp = $('.J_pop-dimmer').popUp({
				width: '958px',
				height: '533px'
			});
			//dimmer = $('.popup').dimmer();
			quickIndex = 0,
			quickId = 0,
			quickData = [];
		var init = function(){
			proItems.each(function(i,e){
				quickData.push($(e).attr('data-id'));
			});

			bind();
		};
		var view = function(id){

		};
		var bind = function(){
			proItems.children('.quickview').on('click',function(){
				//dimmer.showUp();
				popUp.showUp();
				//view();
			});

			$('.J_popup').delegate('.J_prev','click',function(){
				alert(1);
				//dimmer.showUp();
				//view();
			});
			$('.J_popup').delegate('.J_next','click',function(){
				alert(2);
				//dimmer.showUp();
				view();
			});
		};
		init();
	})();

	//lazyload Images
	$('.imgs').lazyLoadImg();
});