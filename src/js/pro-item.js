var proSummary = function(){
	var options = $('.J_option'),
		error = [];
	var init = function(){
		$('.J_pro-images').switchImg();
		bind();
	};
	var bind = function(){
		options.find('li').on('click',function(){
			var element = $(this);
			optionSelect(element);
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
	var addCart = function(){
		$.ajax({
			type: "GET",
			url: "data-topcart.json",
			data: $("#product_addtocart_form").serialize(),
			dataType: "json",
			success: function(data){
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
