(function(){

	addScrollEvents($('#navbar').children().length);
	
	function addScrollEvents(count) {
		for (var i = 1; i <= count; i++) {
			(function (i) {
				$('.navbar-link-'+i).click(function() {
					$.scrollTo('.parallax-'+i, {duration:'slow', offsetTop : '724'});
				});
			})(i);
		}
	}

})();