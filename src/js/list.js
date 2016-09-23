(function($){

})(jQuery);

$(function(){
	//product quick view
	(function(){
		var proItems = $('.pro-list li'),
			popUp = $('.popup').popUp();
			dimmer = $('.popup').dimmer();
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
				dimmer.showUp();
				popUp.showUp();
				view();
			});
			$('.popup content .J_prev').delegate('click',function(){
				dimmer.showUp();
				view();
			});
			$('.popup content .J_next').delegate('click',function(){
				dimmer.showUp();
				view();
			});
		};
		init();
	})();

	//lazyload Images
	$('.imgs').lazyLoadImg();
});