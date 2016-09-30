jQuery(document).ready(function($) {
	//valitade
	(function(){
		$("#commentForm2 :input").blur(function(event) {
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
	})();
	//delete
	(function(){
		$(".delete,.icon-shanchu").on('click',  function(event) {
			event.preventDefault();
			var result = confirm("delte this address ?");
			if (result) {
				$(this).parents("li").remove();
			}
		});
	})();
	//change address
	(function(){
		var popUp = $('.J_pop-dimmer').popUp(),
			dimmer = $('.popup').dimmer(),
			change = $('.icon-xiugai');
		var init = function(){
			change.on('click',  function(event) {
				event.preventDefault();
				alert("ss");
				popUp.showUp();
				dimmer.showUp();
			});		
		};
		init();
	})();	
});