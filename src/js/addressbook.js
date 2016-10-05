jQuery(document).ready(function($) {
	(function(){
		if($('.J_pop-dimmer').length>0){
			var popUp = $('.J_pop-dimmer').popUp({width: '858px'}),
			dimmer = $('.popup').dimmer();
		}	 
		var deleted = function (element){
			element.on('click',  function(event) {
				event.preventDefault();
					var result = confirm("delete this address ?"),
						id = $(this).parents("li").attr("data-id");
				if (result) {
					$(this).parents("li").remove();
					view(id);
				}
			});
			var view = function(id){
				alert(id);
				$.ajax({
					url: 'data-url',
					type: 'GET',
					dataType: 'json',
					data: {id: 'id'},
				});	
			}
		};
		var xiugai = function (element){
			element.on('click',  function(event) {
				event.preventDefault();
				var id = $(this).parents("li").attr("data-id");
				view(id);
				dimmer.showUp();
			});
			var view = function(id){
				$.ajax({
					url: '/path/to/file',
					type: 'POST',
					dataType: 'json',
					data: {id: 'id'},
					success: function(){
						popUp.showUp();
						dimmer.hideDown();
					},
					error: function(){
						popUp.showUp(); 
						dimmer.hideDown();
					},
				});
			};
		};
		var NewAddress = function (element){
			element.on('click',  function(event) {
				event.preventDefault();
				popUp.showUp();
				dimmer.hideDown();
			});
		};
		var MakeDefault = function (element){
			element.on('click', function(event) {
				event.preventDefault();
				if ($(this).is('.defaultStyle')) {
					$(this).off('click',function(){
						return false;
					});
				}else{
					$(this).html("Default").addClass('defaultStyle')
					.parents("li").siblings()
					.find('.default').html("Make default")
					.removeClass('defaultStyle');
					var id = $(this).parents("li").attr("data-id");
					view(id);
				}
			});
			var view = function (id){
				alert(id);
				$.ajax({
					url: '/path/to/file',
					type: 'G',
					dataType: 'json',
					data: {id: 'id'},
					success: function(){
						
					},
					error: function(){
					
					},
				});	
			};
		};
		var validation = function (element){
			element.validate({
				errorElement: "p",
			 	rules: {
			 	   email: {
			 	    required: true,
			 	    email: true
			 	   },
			 	   password: {
			 	    required: true,
			 	    minlength: 8
			 	   },
			 	},
			 	messages: {
			 		email: "Please enter a valid email address.",
			 		password:"Please enter your password.",
			 	},
			});
		};
		deleted( $(".delete,.icon-shanchu"));
		xiugai( $('.icon-xiugai'));
		NewAddress( $('.J_newaddress'));
		MakeDefault( $('.default'));
		validation($('#commentForm2'));
	})();
});                                  