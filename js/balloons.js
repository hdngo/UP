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

		$('.navbar-link-1').click( function(){
			$.scrollTo(".parallax-1", {duration:'slow', offsetTop : '500'});

		});

		$('.navbar-link-2').click( function(){
			$.scrollTo(".parallax-2", {duration:'slow', offsetTop : '500'});

		});


		$('.navbar-link-3').click( function(){
			$.scrollTo(".parallax-3", {duration:'slow', offsetTop : '500'});

		});




		

	})

}())

// var scroll = function(){
	
// };

//();

// 100, 