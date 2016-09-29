$(function(){
	//shopping cart
	if($('.shopping_cart ').length>0){
		(function(){
			var t;	
			var setNumInput = function(input,action){
				var min = input.attr('min'),
					max = input.attr('max');
				num = input.val();
				if(action=='minus'){
					newNum = parseInt(num)-1;
				}else if(action=='plus'){
					newNum = parseInt(num)+1;
				}else{
					newNum = parseInt(num);
				}
				
				if(isNaN(newNum)||newNum<min){
					input.val(min);
				}else if(newNum>max){
					input.val(max);
				}else{
					input.val(newNum);
				}
				clearTimeout(t);
				t = setTimeout(updateCart,1000);
			};

			var updateCart = function(){
				$.ajax({
					type: "GET",
					url: "data-cart.json",
					//url: "/checkout/cart/updateajax",
					data: $('#shopping-cart-update').serialize(),
					dataType: "json",
					success: function(data){
						$('.progress').remove();
						$('.shopping_cart').replaceWith(data.html);
						$('.my-bag .pcs').text(data.qty);
					},
					error: function(){

					}
				});
			};
			var bind = function(){
				$('.checkout-cart-index').delegate('.j-minus','click',function(e){
					var numInput = $(this).siblings('.qty');
					setNumInput(numInput,'minus');
					return false;
				});
				$('.checkout-cart-index').delegate('.j-plus','click',function(){
					var numInput = $(this).siblings('.qty');
					setNumInput(numInput,'plus');
					return false;
				});
				$('.checkout-cart-index').delegate('.qty','blur',function(e){
					setNumInput($(this));
					return;
				});
				$('.checkout-cart-index').delegate('.qty','keyup',function(e){
					setNumInput($(this));
					return;
				});
			};

			//first loaddding
			bind();

			if($('.shopping_cart .items .loading').length){
				updateCart();
			}
		})();
	}
});