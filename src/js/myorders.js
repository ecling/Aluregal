jQuery(document).ready(function($) {
	(function(){
		var J_next = $('.J_products_next'),
			J_prev = $('.J_products_prev'),
			index = 0;
		J_next.on('click', function(event) {
			var J_img = $(this).siblings('.products_show').find('.J_img img');
			event.preventDefault();
			index++;
			console.log(index);
			if (index > J_img.length-1) {
				index = 0;
			}
			J_img.hide().siblings().eq(index).show();
		});
		J_prev.on('click', function(event) {
			var J_img = $(this).siblings('.products_show').find('.J_img img');
			event.preventDefault();
			index--;
			console.log(index);
			if (index < 0 ) {
				index = J_img.length-1;
			}
			J_img.hide().siblings().eq(index).show();		
		});
	})();

	(function(){
		var popUp = $('.J_pop-dimmer').popUp(),
			dimmer = $('.popup').dimmer();
		var write = function (element){
			element.on('click', function(event) {
				event.preventDefault();
				popUp.showUp();
			});
		};
		write($('.write'));
	})();
});