$(function(){
	//top mini cart
	(function(){
		var miniCart = $('.J_mini-cart'),
			loading = miniCart.find('.pop').dimmer();
		miniCart.mouseenter(function(e){
			$(this).find('.pop').show();
			if($(this).attr('data-loaded')==0){
				loading.showUp();
				miniCart.attr('data-loaded',1);
				getCart();
			}
		});
		miniCart.mouseleave(function(){
			$(this).find('.pop').hide();
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
					$(this).find('.pop').html(data.html);
				},
				error: function(){
					$(this).attr('data-loaded',0);
				}
			});
		};
	})();
	//
	(function(){
		$(".search-input").css({transform:'translatex(-78%)',opacity:0,}, 500);
		$(".big ").on('click',  function(event) {
			$(".search-input").css({
				"opacity":'1',
				"transition":"all 500ms ease",
				"transform":"translatex(0%)",
			});
			$(this).hide();
		});
	})();
});