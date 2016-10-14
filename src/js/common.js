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
				url: miniCart.attr('data-url'),
				data: "",
				dataType: "json",
				success: function(data){
					loading.hideDown();
					miniCart.find('.pop').html(data.html);
					miniCart.find('.pcs').text(data.qty);
				},
				error: function(){
					miniCart.attr('data-loaded',0);
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