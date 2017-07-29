/**
* @package Elegance Framework 
* @author ThemeChoice http://www.themechoice.com
* @copyright Copyright (c) 2017 ThemeChoice
* @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
*/
jQuery(function($) {
	/* --------------------------------------------
	 Scroll To Top
	-------------------------------------------- */
    var totop = $('.scrollToTop');
	var win = $(window);   
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 800)
    });
	
	/* --------------------------------------------
	 		toggle class
	-------------------------------------------- */
	$( ".toogle_button" ).click(function() {
	  $( this ).toggleClass( "open" );
	});

});