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
				popup = $('.J_pop-dimmer').popUp(),
				index = 0;
			var bind  = function(){
				$('.addressbook').delegate('.J_delete','click',function(){
					deleted(this);
					return false;
				});
				$('.addressbook').delegate('.J_edit','click',function(){
					showForm(this);
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
				var url = $(element).attr('url');
				$.ajax({
					type: "GET",
					url: url,
					dataType: "json",
					success: function(data){
						$(element).parents("li").remove();
					},	
					error: function(){

					}
				});
			};

			var showForm = function(element){
				var id = $(element).parents('li').attr('data-id');
				if(id){
					loading.showUp();
					popUp.showUp();
					index = $(element).parents('li').index();
					$.ajax({
						type: "",
						url: "",
						dataType: "html",
						success: function(data){
							$('.J_inner').html(data);
						},
						error: function(){

						}
					});
				}else{
					popUp.showUp();
				}
			};

			var save = function(element){
				var form = element.parents('form'),
				form.validate({
					errorElement: "p",
					submitHandler: function(){
						$.ajax({
							type: "POST",
							url: form.attr('action'),
							data: form.serialize(),
							dataType: "html",
							success: function(data){
								if(data.action=='insert'){
									$('.addressbook').append(data.html);
								}else{
									var li = $('.addressbook').children('li').index(index);
									li.replaceWith(data.html);
								}
							},
							error: function(){

							}
						});
					}
				});
			};

			var MakeDefault = function(element){

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