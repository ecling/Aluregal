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
				for(var i in error){
					$(this).children('.tip').append('<p>'+error[i]+'<p>');
				}
			}
		});
		$('.J_add-to-cart button').on('mouseout',function(){

		});
		$('.J_add-to-cart button').on('click',function(e){
			e.preventDefault();
			if(!error.length){	
				addCart();
			}
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
		
	};
	init();
};
