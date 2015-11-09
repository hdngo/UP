(function(){

	$(document).ready(function(){
		console.log('sUP')

		$("body").css('background-color', 'white')


		var slides = $('.slide')
		var colors = {};
		for(var i = 0; i < slides.length; i++){
			var breakpointVal = (800 * i).toString();
			colors[breakpointVal]
			colors[breakpointVal] = (slides[i].dataset.background)
		}
		var breakpoints = Object.keys(colors)

		var windowPos = 0;

	function scrollCallback(){
		var scroll = $(window).scrollTop();

		var elementBGColor = retrieveColor(scroll);
		console.log('current color is ' + elementBGColor)
		$('body').animate({ backgroundColor: elementBGColor }, 1000);
	}

	function retrieveColor(scrollPosition){
		var bgColor = 'rgb(160, 234, 245)';
		for(var index=0; index<breakpoints.length; index++){
			if(scrollPosition < breakpoints[index + 1]){
				console.log('lower than ' + breakpoints[index])
				bgColor = colors[breakpoints[index]]
				console.log('set color to ' + bgColor)
				break
			}
		}
		return bgColor;
	}
	

	$(document).scroll(scrollCallback)
	
	})



}())