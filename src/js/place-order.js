$(function(){

(function(){
	var shippingMethodLoad = $('.shippingOptions').children('div').dimmer(),
		orderSummaryLoad = $('.order_summary').dimmer(),
		popup = $('.J_pop-dimmer').popUp({width:'800px'}),
		dimmer = $('.popup').dimmer();
	
	
	//country and States
	$('.J_country').selectUnio('.J_state-select','.J_state-input');

	//selected shipping address
	$().on('change',function(){

	});
	//show address form
	$('.J_newaddress').on('click',function(){
		showForm()
	});

	//save address
	$('.J_saveAdress').on('click',function(){
		saveAdress(this);
	});

	//change country on shipping address 
	$('.J_country').on('change',function(){
		shippingMethodLoad.showUp();
		orderSummaryLoad.showUp();
		updateOrder();
	});

	//selected shipping method
	$('#firecheckout-form').delegate("input[name='shipping_method']",'change',function(){
		orderSummaryLoad.showUp();
		updateOrder();
	});

	//place to order 
	$('.J_place-order').on('click',function(e){
		//e.preventDefault();
		validatePlaceForm();
		return false;
	});

	var showForm = function(){
		popup.showUp();
	};

	var saveAdress = function(element){
		var form = $(element).parents('form');
		form.validate({
			errorElement: "p",
			submitHandler: function(){
				dimmer.showUp();
				$.ajax({
					type: "POST",
					url: form.attr('action'),
					data: form.serialize(),
					dataType: "json",
					success: function(data){
						dimmer.hideDown();
						$('.address_list').find('.J_newaddress').before(data.html);					
						popup.hideDown();
					},
					error: function(){

					}
				});
			}
		});
		
	};
	/*var save = function(element){
		var form = $(element).parents('form');
		form.validate({
			errorElement: "p",
			submitHandler: function(){
				loading.showUp();
				$.ajax({
					type: "POST",
					url: form.attr('action'),
					data: form.serialize(),
					dataType: "json",
					success: function(data){
						loading.hideDown();
						if(index==-1){
							$('.address_list').find('.J_newaddress').before(data.html);
						}else{
							var li = $('.address_list').children('li').eq(index);
							li.replaceWith(data.html);
						}
						popup.hideDown();
					},
					error: function(){

					}
				});
			}
		});
	};*/

	var validatePlaceForm = function(){ 
		var test = $('#firecheckout-form').validate({
			errorElement: "p",
			submitHandler: function(){
				placeOrder();
			}
		});
	};
	var updateOrder = function(){
		$.ajax({
			type: "POST",
			url: $('#firecheckout-form').attr('update-url'),
			data: $('#firecheckout-form').serialize(),
			dataType: "json",
			success: function(data){
				if(data.update_section['shipping-method']){
					$('.shippingOptions').children('div').html(data.update_section['shipping-method']);
				}
				if(data.update_section.review){
					$('.order_summary').html(data.update_section.review);
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
			type: "POST",
			url: $('#firecheckout-form').attr('save-url'),
			data: $('#firecheckout-form').serialize(),
			dataType: "json",
			success: function(data){
				if(data.redirect){
					window.location.href = data.redirect;
				}
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
		if(width<1000){
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
				"left":left
			});
		}
	};
})();

});