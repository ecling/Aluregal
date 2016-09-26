(function($){

})(jQuery);

$(function(){
	//product quick view
	(function(){
		var proItems = $('.pro-list li'),
			popUp = $('.J_pop-dimmer').popUp({
				width: '1058px',
				height: '573px',
			});
			//dimmer = $('.popup').dimmer();
			quickIndex = 0,
			quickIndex = 0,
			quickData = [];
		var init = function(){
			proItems.each(function(i,e){
				quickData.push($(e).attr('data-id'));
			});

			bind();
		};
		var view = function(id){
			$.ajax({
				type:'GET',
				url:'data-quickview.html',
				datetype:'html',
				success:function(date){
					$(".J_inner").html(date);
				},
				error:function(){
					alert("error");
				},			
			});
		};
		var bind = function(){

			proItems.children('.quickview').on('click',function(){
				//dimmer.showUp();
				
				popUp.showUp();
				//view();
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
	// close
	$('.J_close').click(function(event) {
		$(this).parents(".J_pop-dimmer").fadeOut();
	});
	//lazyload Images
	$('.imgs').lazyLoadImg();
});