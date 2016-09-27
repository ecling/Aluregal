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
					data: "",
					dataType: "json",
					success: function(data){
						$('.shopping_cart .items').replaceWith(data.items);
						$('.shopping_cart .fixbox').replaceWith(data.summary);
						$('.my-bag .pcs').text(data.qty);
					},
					error: function(){

					}
				});
			};
			var bind = function(){
				$('.shopping_cart').delegate('.j-minus','click',function(e){
					var numInput = $(this).siblings('.qty');
					setNumInput(numInput,'minus');
					return false;
				});
				$('.shopping_cart').delegate('.j-plus','click',function(){
					var numInput = $(this).siblings('.qty');
					setNumInput(numInput,'plus');
					return false;
				});
				$('.shopping_cart').delegate('.qty','blur',function(e){
					setNumInput($(this));
					return;
				});
				$('.shopping_cart').delegate('.qty','keyup',function(e){
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