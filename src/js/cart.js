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
				console.log(22);
				/*
				$.ajax({
					type: "",
					url: "",
					data: "",
					dataType: "",
					success: function(){

					},
					error: function(){

					}
				});
				*/
			};
			var bind = function(){
				$('.items').find('li').each(function(i){
					var li = $(this),
						numInput = li.find('.qty');
					li.find('.j-minus').on('click',function(e){
						setNumInput(numInput,'minus');
						return false;
					});
					li.find('.j-plus').on('click',function(){
						setNumInput(numInput,'plus');
						return false;
					});
					numInput.blur(function(e){
						setNumInput($(this));
						return;
					});
					numInput.keyup(function(e){
						setNumInput($(this));
						return;
					});
				});
			};
			bind();
		})();
	}
});