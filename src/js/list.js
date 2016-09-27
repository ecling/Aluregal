(function($){

})(jQuery);

$(function(){
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
				index--;
				view(quickData[index],index);
				return false;														
			});
			$('.J_popup .J_next').on('click',function(){					
				index++;
				view(quickData[index],index);	
				return false;
			});
		};
		var view = function(id,index){
			dimmer.showUp();
			$.ajax({
				type:'GET',
				url:'data-quickview.html',
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
	//lazyload Images
	$('.imgs').lazyLoadImg();
});