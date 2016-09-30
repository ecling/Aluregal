(function($){

})(jQuery);

$(function(){
	//lazyLoadImg
	$('.pro-list li .pro-img').lazyLoadImg();

	//product quick view
	(function(){
		var proItems = $('.pro-list li'),
			popUp = $('.J_pop-dimmer').popUp({
				width: '1058px',
				height: '573px',
			}),
			dimmer = $('.popup').dimmer(),	
			index = 0,
			quickData = [];	
		var init = function(){
			proItems.each(function(i,e){
				quickData.push($(e).attr('data-id'));			
			});
			bind();
		};
		var bind = function(){
			proItems.children('.quickview').on('click',function(){	
				li = $(this).parent("li"),
				index = li.index(),
				popUp.showUp();
				view(quickData[index],index);
			});
			$('.J_popup .J_prev').on('click',function(){							
				if (index <1) {
					$(this).hide();
				}else{
					index--;
					view(quickData[index],index);
				}									
				return false;														
			});
			$('.J_popup .J_next').on('click',function(){
				if (index <  proItems.length-1) {
					index++;
					view(quickData[index],index);	
				}else{
					$(this).hide();
				}										
				return false;
			});
		};
		var view = function(id,index){
			dimmer.showUp();
			$.ajax({
				type:'GET',
				url: $('.pro-list').attr('data-url'),
				data: {"id":id},
				datetype:'html',
				beforeSend:function(){
					$('.J_prev,.J_next').hide();
				},
				success:function(date){
					$(".J_inner").html(date);
					$('.J_prev,.J_next').show();
					dimmer.hideDown()
				},
				error:function(){
					alert("error");
				},			
			});
		};
		init();
	})();
	(function(){
		var shoucang = $('.icon-xinshixin'),
			li = $('.list-center li');
			shoucang.on('click',function(){
				var id = $(this).parents("li").attr("data-id"),
					index = $(this).parents("li").index();	
				view(id,index);
		});		
		var view = function(id,index){
			$.ajax({
				type:'GET',
				date:{"id":id},
				datetype:'html',
				async:true,
				success:function(date){
					init(index);
				},
			});
		};
		var init = function(index){	
			var xinxin = li.eq(index).find('.icon-xinshixin'),
				id = li.eq(index).attr('data-id');
			if (xinxin.hasClass('active')) {
				var rulse = confirm("Cancel the collection?");
				if (rulse) {
					xinxin.removeClass('active');
					console.log(id);
					view(id);
				}else{
					return
				}
			}else{
				xinxin.addClass('active');
				console.log(id);
				view(id);			
			}
		};		
	})();
});