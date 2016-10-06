var proSummary = function(){
	var options = $('.J_option'),
		error = [],
		addCartLoad = '';
	var init = function(){
		$('.J_pro-images').switchImg();
		bind();
	};
	var bind = function(){
		options.find('li').on('click',function(e){
			var element = $(this);
			optionSelect(element);
		});

		$('.qty .j-minus').on('click',function(e){
			setNumInput($(this).siblings('input'),'minus');
			return false;
		});

		$('.qty .j-plus').on('click',function(e){
			setNumInput($(this).siblings('input'),'plus');
			return false;
		});

		$('.qty').find('input').on('blur keyup',function(e){
			setNumInput($(this));
		});

		$('.J_add-to-cart button').on('mouseover',function(){
			optionValidate();
			$(this).children('.tip').find('p').remove();
			if(error.length){
				$(this).addClass('processing');
				for(var i in error){
					$(this).children('.tip').append('<p>'+error[i]+'<p>');
				}
			}else{
				$(this).removeClass('processing');
			}
		});
		$('.J_add-to-cart button').on('mouseout',function(){

		});
		$('.J_add-to-cart button').on('click',function(e){
			e.preventDefault();
			if(!error.length){
				$(this).text('Adding...');
				addCartLoad = $('.product-cont').dimmer();	
				addCartLoad.showUp();
				addCart();
			}
		});
		$('.my-bag').on('mouseleave',function(){
			$('.my-bag').find('.baglist').removeClass('active');
		});
	};
	var optionSelect = function(ele){
		ele.siblings('li').removeClass('active');
		ele.parent().siblings('input').val(ele.attr('data-id'));
		ele.addClass('active');
	};
	var optionValidate = function(){
		error = [];
		options.each(function(i,e){
			var val = $(this).children('input').val(),
				label = $(this).children('label').text();
			if(!val){
				error.push(label)
			}
		});
	};

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
	};

	var addCart = function(){
		$.ajax({
			type: "POST",
			url: $("#product_addtocart_form").attr('data-url'),
			data: $("#product_addtocart_form").serialize(),
			dataType: "json",
			success: function(data){
				addCartLoad.hideDown();
				$('.my-bag').find('.pcs').text(data.qty);
				$('.my-bag').find('.baglist').html(data.html);
				$('.my-bag').find('.baglist').addClass('active');
				$('.J_add-to-cart button').text('Add To Bag');
			},
			error: function(){

			},
			fail: function(){

			}
		});	
	};
	init();
};
