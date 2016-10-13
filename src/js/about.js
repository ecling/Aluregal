jQuery(document).ready(function($) {
	(function(){
		var slide = function(element){
			option = element.parents(".J_aboutus").children('div,dl'),
			element.next().hide();
			option.eq(0).find('div,dl').show();
			element.on('click',  function(event) {
				event.preventDefault();
				$(this).toggleClass('active').next().slideToggle()
				.parent().siblings().find(element).removeClass('active')
				.next().slideUp();
			});
		};
		slide($('.aboutus h1'));
		slide($('dt'));
	})();
});