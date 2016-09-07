jQuery(document).ready(function($) {
	var  $li_list = $(".banners-index li");
	var  $img_list = $(".banners-img li");
	var i = $img_list.length;
	var index = 0;
	$img_list.css({"opacity":0,}).eq(0).css({"opacity":1,});
	$li_list.on('click',  function(event) {
		var $index = $(this).index();
		$img_list.eq($index).css({
			
			"opacity":1,
		}).siblings('li').css({
			
			"opacity":0,
		});
		$(this).addClass('active').siblings('li').removeClass('active');
	});
	$("#j_next").on('click',next);
	$("#j_prev").on('click',prev);
	function next(){
		var index_ = $(this).index();
		$img_list.eq(index_+1).css({"opacity":1,"transition":"all 1s ease-in-out",})
		.siblings('li').css({"opacity":0,"transition":"all 1s ease-in-out",});
		if(index_==(i)){
			index_ = 0;
		}else{
			index_++;
		}
	};
	function prev(){
		$img_list.eq(index_).css({"opacity":1,"transition":"all 1s ease-in-out",})
		.siblings('li').css({"opacity":0,"transition":"all 1s ease-in-out",});
		if(index_==(0)){
			index_ = i;
		}else{
			index_--;
		}
	};
});