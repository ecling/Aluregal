$(function(){

(function(){
	//selected shipping address
	$().on('change',function(){

	});

	//change country on shipping address 
	$('.J_country').on('change',function(){
		updateOrder();
	});

	//country and States
	$('.J_country').selectUnio('.J_state-select','.J_state-input');

	//selected shipping method
	$("input[name='shipping_method']").on('change',function(){
		updateOrder();
	})

	//place to order 
	$('.J_place-order').on('click',function(e){
		e.preventDefault();
		if(validatePlaceForm()){
			placeOrder();
		}
	});

	var validatePlaceForm = function(){
		return true;
	}
	
	var updateOrder = function(){
		$.ajax({
			type: "GET",
			url: "/data-quickview.html",
			data: "",
			dataType: "html",
			success: function(data){
				console.log(data);
			},
			error: function(){
				console.log('error');
			},
			fail: function(){
				console.log('fail');
			}
		});
	};
	var placeOrder = function(){
		alert('place');
	};
})();

//right fix
(function(){
	var width = $(document).width();
		position = 'fixed';
		fixOff= $('.cart_right').offset();
	$(window).scroll(function(e){
		BoxPostion();
	});
	$(window).resize(function(){
		width = $(window).width();
		if(width<1200){
			position = 'absolute';
		}
		BoxPostion();
	});
	var BoxPostion = function(){
		var scrollTop = $(document).scrollTop();
		if(fixOff.top<=scrollTop){
			var left = (width-1200)/2+745+55;
			left = parseInt(left)+'px';
			$('.cart_right').css({"position": "fixed","top":"4px","left":left});
		}else{
			$('.cart_right').css({"position": "static","top":"4px","left":left});
		}
		
	};
})();

});