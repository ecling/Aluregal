(function($){
	var GallaryZoom = function(element,options){
		setting = {
	        'zoomAreaW': 400,
	        'zoomAreaH': 400,
	        'showAreaW': 400,
	        'showAreaH': 400,
	        'originalImgW': 600,
	        'originalImgH': 600
    	};
    	var imgW = 0;
    		imgH = 0;
    		dimmer = '';
    		zoomDimmer = '';
    		zoomFilter = '';
    		zoomIn = '';
    		zoomInImg = '';

    	var extend = function(options){
    		for (var i in options) {
            	this.setting[i] = options[i]
        	}
    	};
    	var init = function(){
    		imgW = targetImg.attr('width');
	        imgH = targetImg.attr('height');
	        createDimmer();
	        createZoomFilter();
	        createZoomDimmer();
	        createZoomIn();
	        bind();
    	};
    	var createZoomDimmer = function(){
    		zoomDimmer = $("<div></div>");
	        zoomDimmer.css({
	            position: 'absolute',
	            width: '100%',
	            height: '100%',
	            left: '0px',
	            top: '0px'
	        });
	        zoomDimmer.appendTo(this.targetCon);
    	};
    	var createZoomFilter = function(){
    		zoomFilter = $("<div></div>");
	        zoomFilter.css({
	            position: 'absolute',
	            border: '1px solid white',
	            background: 'rgba(255,255,255,0.7)',
	            width: setting.zoomFilterW,
	            height: setting.zoomFilterH,
	            display: 'none'
	        });
	        zoomFilter.appendTo(this.targetCon);
    	};
    	var createZoomIn = function(){
    		zoomIn = $("<div><img src=''/></div>");
	        zoomIn.css({
	            position: 'absolute',
	            overflow: 'hidden',
	            top: '0px',
	            marginLeft: '10px',
	            display: 'none',
	            zIndex:'10',
	            left: sizeRect(this.containt.find('ul')).sizeW + sizeRect(targetCon).sizeH,
	            width: setting.zoomAreaW,
	            height: setting.zoomAreaH
	        });
	        zoomInImg = zoomIn.find('img');
	        zoomInImg.attr('src', lis.eq(0).attr('data-zoom'));
	        zoomInImg.css({
	            position: 'absolute'
	        });
	        zoomIn.appendTo(this.containt);
    	};
    	var createDimmer = function(){
    		dimmer = $("<div></div>").css({
	            position: 'absolute',
	            width: '100%',
	            height: '100%',
	            zIndex: '2',
	            display: 'none',
	            left: '0px',
	            top: '0px',
	            background: 'rgba(255,255,255,0.5)'
	        });
	        dimmer.append($("<div class='square-spin ajax-loading'><div></div></div>"));
    	};
    	var showDimmer = function(){
    		dimmer.appendTo(targetCon).fadeIn('fast');
    	};
    	var hideDimmer = function(){
    		dimmer.fadeOut('fast', function() {
	            $(this).remove();
	        });
    	};
    	var updateStyle = function(index){
    		lis.removeClass('selected');
        	lis.eq(index).addClass('selected').addClass('loaded');
    	};
    	var updateImg = function(img){
	        img.attr({
	            width: imgW,
	            height: imgH
	        });
	        targetCon.find('img').fadeOut('fast', function() {
	            $(this).remove();
	            targetCon.append(img);
	        });
    	};
    	var loadImg = function(url, index, loaded){
    		var img = new Image();
	        if (loaded) {
	            updateImg($(img));
	            updateStyle(index);
	        } else {
	            showDimmer();
	            img.onload = function() {
	                hideDimmer();
	                updateImg($(img));
	                updateStyle(index);
	            }
	            img.onerror = function() {
	                hideDimmer();
	            }
	        }
	        img.src = url;
    	};
    	var positionFilter = function(x,y){
    		var w = setting.zoomFilterW,
	            h = setting.zoomFilterH,
	            sw = setting.showAreaW,
	            sh = setting.showAreaH,
	            left, top;
	        left = x - w / 2;
	        top = y - h / 2;
	        if (x < w / 2) {
	            left = 0;
	        }
	        if (y < h / 2) {
	            top = 0;
	        }
	        if (sw - x < w / 2) {
	            left = sw - w;
	        }
	        if (sh - y < h / 2) {
	            top = sh - h;
	        }
	        zoomFilter.css({
	            left: left,
	            top: top
	        });
	        zoomInImg.css({
	            left: 0 - left,
	            top: 0 - top
	        });
    	};
    	var bind = function(){
	        lis.click(function(event) {
	            var index = $(this).index(),
	                url = $(this).attr('data-url'),
	                zoomUrl = $(this).attr('data-zoom'),
	                loaded = $(this).hasClass('loaded');
	            loadImg(url, index, loaded);
	            zoomInImg.attr('src', zoomUrl);
	        });
	        zoomDimmer.mouseenter(function(event) {
	            zoomFilter.fadeIn('fast');
	            zoomIn.fadeIn('fast');
	        }).mouseleave(function(event) {
	            zoomFilter.fadeOut('fast');
	            zoomIn.fadeOut('fast');
	        }).mousemove(function(event) {
	            positionFilter(event.offsetX, event.offsetY)
	        });
    	};

    	extend(options);
    	setting.zoomFilterW = setting.originalImgW - setting.zoomAreaW;
    	setting.zoomFilterH = setting.originalImgH - setting.zoomAreaH;
    	containt = $(element);
    	lis = containt.find('li');
    	targetCon = containt.find('div');
    	targetImg = targetCon.find('img');
    	init();
	};

	var sizeRect = function(dom){
		var w = $(dom).outerWidth();
	    var h = $(dom).outerHeight();
	    var margins = $(dom).css('margin').split(' ');
	    if (margins.length > 1) {
	        var width = parseInt(margins[1]) + parseInt(margins[3]) + w;
	        var height = parseInt(margins[0]) + parseInt(margins[2]) + h;
	    } else {
	        var width = w;
	        var height = h;
	    }
	    return {
	        'sizeW': width,
	        'sizeH': height
	    }
	};
	
	$.fn.gallaryZoom = function(options){
		var gallaryZoom = new GallaryZoom(this,options);
	};
})(jQuery);

$(function(){
	proSummary();
	$('.J_pro-images').gallaryZoom();

	//product reivew
	//var productPop = $('.J_pop-dimmer').popUp({width: '800px',height: '500px'});
	$('.reviews').find('.button').on('click',function(e){
		//productPop.showUp();
		return false;
	});


	//new scroll
	$('.new-in').scrollBox(4,1200);
});