$(function(){
	//account login
	if($('#signIn_form').length>0){
		$('#signIn_form').validate({
			errorElement: "p"
		});
	}

	if($('#register_form').length>0){
		$('#register_form').validate({
			errorElement: "p"
		});
	}

	//account setting
	if($('#account_setting_form').length>0){
		$('#account_setting_form').validate();
	}

	if($('#change_email_form').length>0){
		$('#change_email_form').validate();
	}

	if($('#change_password_form').length>0){
		$('#change_password_form').validate();
	}

	//address manage
	if($('#address-edit-form').length>0){
		$('#address-edit-form').validate();
	}

	if($('.addressbook').length>0){
		(function(){
			var loading = $('.J_popup').dimmer(),
				popup = $('.J_pop-dimmer').popUp({width: '800px',height: '683px'}),
				index = -1;
			var bind  = function(){
				$('.addressbook').delegate('.J_delete','click',function(){
					deleted(this);
					return false;
				});
				$('.addressbook').delegate('.J_edit','click',function(){
					showForm(this);
					return false;
				});
				$('.addressbook').delegate('.default','click',function(e){
					MakeDefault(this);
					return false;
				});
				$('.J_newaddress').on('click',function(){
					showForm(this);
					return false;
				});
				$('.J_inner').delegate('button','click',function(e){
					save(this);
				});
			};

			var deleted = function(element){
				var url = $(element).attr('href');
				$.ajax({
					type: "GET",
					url: url,
					dataType: "json",
					success: function(data){
						if(data.result){
							$(element).parents("li").remove();
						}else{
							console.log('delete error');
						}
					},	
					error: function(){

					}
				});
			};

			var showForm = function(element){
				var id = $(element).parents('li').attr('data-id'),
					url = $(element).attr('href');
				loading.showUp();
				popUp.showUp();
				index = $(element).parents('li').index();
				if(!id){
					id = -1;
				}	
				$.ajax({
					type: "GET",
					url: url,
					dataType: "html",
					success: function(data){
						$('.J_inner').html(data);
						loading.hideDown();
					},
					error: function(){

					}
				});
				
			};

			var save = function(element){
				var form = $(element).parents('form');
				form.validate({
					errorElement: "p",
					submitHandler: function(){
						loading.showUp();
						$.ajax({
							type: "POST",
							url: form.attr('data-url'),
							data: form.serialize(),
							dataType: "json",
							success: function(data){
								loading.hideDown();
								if(index==-1){
									$('.addressbook').find('.new_address').before(data.html);
								}else{
									var li = $('.addressbook').children('li').eq(index);
									li.replaceWith(data.html);
								}
								popup.hideDown();
							},
							error: function(){
								
							}
						});
					}
				});
			};

			var MakeDefault = function(element){
				if(!$(element).hasClass('defaultStyle')){
					url = $(element).attr('href');
					$.ajax({
						type: "GET",
						url: url,
						dataType: "json",
						success: function(){

						},
						error: function(){

						}
					});
				}
			};
			bind();
		})();
	}

	//account setting tab
	if($('.account_setting_tab').length>0){
		(function(){
			var J_li = $(".J_li li"),
			J_div = $(".J_div>div");

			J_li.on('click',function(){
				var index = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				J_div.hide().eq(index).show();
			});
		})();	
	}
})