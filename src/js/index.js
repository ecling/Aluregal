(function($){

})(jQuery);

$(function(){
	$('.J_scroll-box').scrollBox(4,1200);
	$('.J_slider').slider();
});

jQuery(document).ready(function($) {
	(function(){
		$(".new_address_a").on('click',show);
		$(".edit").on('click',show);
		$(".icon-xiugai").on('click',show);
		$(".newaddress").on('click',show);
		$(".write").on('click',show);	
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
});