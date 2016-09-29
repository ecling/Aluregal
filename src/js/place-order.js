$(function(){

(function(){
	var shippingMethodLoad = $('.shippingOptions').children('div').dimmer(),
		orderSummaryLoad = $('.order_summary').dimmer();

	//country and States
	$('.J_country').selectUnio('.J_state-select','.J_state-input');

	//selected shipping address
	$().on('change',function(){

	});

	//change country on shipping address 
	$('.J_country').on('change',function(){
		shippingMethodLoad.showUp();
		orderSummaryLoad.showUp();
		updateOrder();
	});

	//selected shipping method
	$("input[name='shipping_method']").on('change',function(){
		orderSummaryLoad.showUp();
		updateOrder();
	})

	//place to order 
	$('.J_place-order').on('click',function(e){
		e.preventDefault();
		if(validatePlaceForm()){
			placeOrder();
		}
	});
	//email  */
	
	$("#commentForm :input").blur(function(event) {
		if($(this).is('.required')){
			$(this).next('p').empty();
			if (this.value=="") {
				var error = 'This field is required.';
				$(this).after('<p class="error">'+error+'</p>');
			}else{
				$(this).next('p').empty();
			}
		}
		if ($(this).is('.email')) {
			$(this).next('p').empty();
			if (this.value == ''|| (this.value!="" && !/^\w+(\.\w+)*@\w+(\.\w+)+$/.test(this.value))) {
				var error = 'Please enter a valid email address.';
				$(this).after('<p class="error">'+error+'</p>');
			}else{
				$(this).next('p').empty();
			}
		}
	}).keyup(function(event) {
		$(this).triggerHandler('blur');
	}).focus(function(event) {
		$(this).triggerHandler('blur');
	});

	var validatePlaceForm = function(){ 
		return true;
	}
	
	var updateOrder = function(){
		$.ajax({
			type: "POST",
			url: $('#firecheckout-form').attr('update-url'),
			data: $('#firecheckout-form').serialize(),
			dataType: "json",
			success: function(data){
				if(data.update_section['shipping-method']){
					$('.shippingOptions').children('div').replaceWith(data.update_section['shipping-method']);
				}
				if(data.update_section.review){
					$('.order_summary').replaceWith(data.update_section.review);
				}
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
		$.ajax({
			type: "GET",
			url: $('#firecheckout-form').attr('save-url'),
			data: $('#firecheckout-form').serialize(),
			dataType: "json",
			success: function(){

			},
			error: function(){

			},
			fail: function(){

			}
		});
	};
})();

//right fix
(function(){
	var width = $(window).width(),
		fixOff= $('.cart_right').offset();

	if(width<1200){
		var position = 'absolute';
	}else{
		var position = 'fixed';
	}

	$(window).scroll(function(e){
		BoxPostion();
	});
	$(window).resize(function(){
		width = $(window).width();
		if(width<1200){
			position = 'absolute';
		}else{
			position = 'fixed';
		}
		BoxPostion();
	});
	var BoxPostion = function(){
		var scrollTop = $(document).scrollTop();
		if(fixOff.top<=scrollTop){
			if(position=='fixed'){
				var left = (width-1200)/2+745+55;
				left = parseInt(left)+'px';
				$('.cart_right').css({
					"position": "fixed",
					"top":"4px",
					"left":left
				});
			}else{
				var top = (scrollTop+4)+'px';
				var left = 745+55+'px';
				$('.cart_right').css({
					"position": "absolute",
					"top":top,
					"left":left,
					"background-color":"#fff"
				});
			}
		}else{
			$('.cart_right').css({
				"position": "static",
				"top":"4px",
				"left":left}
			);
		}
		
	};
})();

});