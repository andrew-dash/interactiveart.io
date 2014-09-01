var scrollHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.nav-bar' ),
		didScroll = false,
		changeHeaderOn = 160;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 150 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$( header ).addClass( 'scrolled' );
		}
		else {
			$( header ).removeClass( 'scrolled' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();