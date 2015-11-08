(function(){

	$(document).ready(function(){
		console.log('sUP')

		$(window).scroll(function (event) {
		    var scroll = $(window).scrollTop();
		    // Do something
		    console.log(scroll)
		    if(scroll >= 800){
		    	$('body').animate({backgroundColor: 'red'}, 1000)
		    	console.log('yoyoyo')
		    }
		});

	})



}())