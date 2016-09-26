(function($){

})(jQuery);

$(function(){
	$('.J_scroll-box').scrollBox(4,1200);
	$('.J_slider').slider();
});

jQuery(document).ready(function($) {
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
	(function(){
		$(".new_address_a").on('click',show);
		$(".edit").on('click',show);
		$(".icon-xiugai").on('click',show);
		$(".newaddress").on('click',show);
		$(".write").on('click',show);
		$(".quickview").on('click',show);
		$(".icon-guanbi").on('click',hide);
		$("#NewPassword_form button").on('click',show);
		$("#ForgottenPassword_submit button").on('click',show);
		$(".popup .button").on('click',hide);
		 function show(){
	    	$(".popup").show(300);
			$(".mask").css("height",$(document).height());     
	        $(".mask").css("width",$(document).width());     
	        $(".mask").show(300); 
	    }
	    function hide(){
	    	$(".popup").hide(300);
			$(".mask").hide(300);
	    }
	})();
	(function(){
		var minus = $(".listQty .j-minus");
		var plus = $(".listQty .j-plus");
		var input =$(".listQty input");
		var value = input.val();
		plus.on('click', function(event) {
			minus.removeClass('disble');
			value++;
			input.val(value);
		});
		minus.on('click', function(event) {
			value = $(this).parent().find('input').val();
			if (value <= 1) {				
				$(this).addClass('disble');
			}else{
				value--;
				input.val(value);
				$(this).removeClass('disble');
			}
		});	
	})();
});