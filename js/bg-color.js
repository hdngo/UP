(function(){

	$(document).ready(function(){

		$("body").css('background-color', 'rgb(11,94,193)')

		var slides = $('.slide')
		var colors = {};
		for(var i = 0; i < slides.length; i++){
			var breakpointVal = (724 * i).toString();
			colors[breakpointVal]
			colors[breakpointVal] = (slides[i].dataset.background)
		}
		var breakpoints = Object.keys(colors)

		function retrieveColor(scrollPosition){
			var bgColor = 'rgb(160, 234, 245)';
			for(var index=0; index<breakpoints.length; index++){
				if(scrollPosition < breakpoints[index + 1]){
					bgColor = colors[breakpoints[index]]
					break
				}
			}
			return bgColor;
		}
	
		var currentColor = "rgb(11,94,193)"

		$(document).scroll(function(){
			var scroll = $(window).scrollTop();
	    var scrollPositionColor = retrieveColor(scroll)
	    if(scrollPositionColor == currentColor){
	    	console.log('true')
	    }
	    else{
	    	$('body').animate({backgroundColor: scrollPositionColor}, 500)
	    	currentColor = scrollPositionColor;
	    }

		})
	
	})



}())