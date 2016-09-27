$(function(){
	//top mini cart
	(function(){
		var miniCart = $('.J_mini-cart'),
			loading = miniCart.find('.pop').dimmer();
		miniCart.mouseenter(function(e){
			if($(this).attr('data-loaded')==0){
				loading.showUp();
				getCart();
			}
		});
		miniCart.mouseleave(function(){
			console.log(2);
		});
		var getCart = function(){
			console.log(1);
			loading.hideDown();
			miniCart.attr('data-loaded',1);
		};

	})();
});