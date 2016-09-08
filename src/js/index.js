jQuery(document).ready(function($) {
	var  $li_list = $(".banners-index li");
	var  $img_list = $(".banners-img li");
	var i = $img_list.length;
	var index = 0;
	$img_list.hide('slow').eq(0).show('slow');
	$li_list.on('click', tab);
 	function tab(event) {
 		var $index = $(this).index();
		$img_list.eq($index).show('slow').siblings('li').hide('slow');
		$(this).addClass('active').siblings('li').removeClass('active');
	};
	function next(event){
		index++;
		$img_list.eq(index).show('slow').siblings('li').hide('solw');
		if (index > i-1) {
			index=0;
		}
		$li_list.eq(index).addClass('active').siblings('li').removeClass('active');
	};
	function prev(event){
		index--;
		$img_list.eq(index).show('slow').siblings('li').hide('solw');
		if (index<0) {
			index=i-1;
		}
		$li_list.eq(index).addClass('active').siblings('li').removeClass('active');
	};
	$("#j_next").on('click',next);
	$("#j_prev").on('click',prev);

	$(".search-input").css({transform:'translatex(-100%)',opacity:0,}, 500);
	$(".big ").on('click',  function(event) {
		$(".search-input").css({
			"opacity":'1',
			"transition":"all 500ms ease",
			"transform":"translatex(0%)",
		});
		$(this).hide();
	});
});