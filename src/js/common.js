$(function(){
	//top mini cart
	(function(){
		var miniCart = $('.J_mini-cart'),
			loading = miniCart.find('.pop').dimmer();
		miniCart.mouseenter(function(e){
			if($(this).attr('data-loaded')==0){
				loading.showUp();
				miniCart.attr('data-loaded',1);
				getCart();
			}
		});
		miniCart.mouseleave(function(){
			
		});
		var getCart = function(){
			$.ajax({
				type: "GET",
				url: "data-topcart.json",
				//url: "checkout/cart/",
				data: "",
				dataType: "json",
				success: function(data){
					loading.hideDown();
					miniCart.find('.pop').html(data.html);
				},
				error: function(){
					miniCart.attr('data-loaded',0);
				}
			});
		};
	})();
});