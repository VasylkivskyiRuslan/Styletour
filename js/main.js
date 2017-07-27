$(function() {
  $('#slider').lightSlider({
    adaptiveHeight: true,
    auto: true,
    item: 1,
    slideMargin:0,
    loop:true,
    pauseOnHover: true
  });
});

$(function() {
  $('#slider-aside').lightSlider({
    adaptiveHeight: false,
    auto: true,
    item: 1,
    slideMargin: 0,
    loop: true
  });
});

$(function() {
  $('#products-list-1, #products-list-2, #products-list-3, #slider-brands').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
  });
});

$(function() {
    $('a#go').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#order-window')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '35%'}, 200);
        });
    });

    $('#order-close, #overlay').click( function(){
		    $('#order-window')
			     .animate({opacity: 0, top: '35%'}, 200,
				       function(){
					           $(this).css('display', 'none');
					           $('#overlay').fadeOut(400);
				       }
			     );
	  });
});

$( ".cross" ).hide();
$( ".menu__navbar-tablet" ).hide();
$( ".hamburger" ).click(function() {
  $( ".menu__navbar-tablet" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
  });
});

$( ".cross" ).click(function() {
  $( ".menu__navbar-tablet" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
  });
});

$( ".cross-nav" ).hide();
$( ".nav-panel__menu-tablet" ).hide();
$( ".hamburger-nav" ).click(function() {
  $( ".nav-panel__menu-tablet" ).slideToggle( "slow", function() {
    $( ".hamburger-nav" ).hide();
    $( ".cross-nav" ).show();
  });
});

$( ".cross-nav" ).click(function() {
  $( ".nav-panel__menu-tablet" ).slideToggle( "slow", function() {
    $( ".cross-nav" ).hide();
    $( ".hamburger-nav" ).show();
  });
});

$( ".navbar__dropdown-lang-tablet" ).hide();
$( ".navbar__language-tablet" ).click(function() {
  $( ".navbar__dropdown-lang-tablet" ).slideToggle( "normal" );
});

$(document).on( "click", function(e) {
  if (!$(e.target).closest( ".navbar__language-tablet" ).length) {
    $( ".navbar__dropdown-lang-tablet" ).hide();
  }
  e.stopPropagation();
});

$( ".navbar__dropdown-cur-tablet" ).hide();
$( ".navbar__currecy-tablet" ).click(function() {
  $( ".navbar__dropdown-cur-tablet" ).slideToggle( "normal" );
});

$(document).on( "click", function(e) {
  if (!$(e.target).closest( ".navbar__currecy-tablet" ).length) {
    $( ".navbar__dropdown-cur-tablet" ).hide();
  }
  e.stopPropagation();
});

$( ".search" ).hide();
$( ".nav-panel__search-tablet" ).click(function() {
  $( ".search" ).slideToggle( "normal" );
});

$(function($){
	$(document).mouseup(function (e){
		var div = $( ".search" );
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			div.hide();
		}
	});
});

$( ".accordeon ul" ).hide().prev().click(function () {
  $(this).parents(".accordeon").find( "ul" ).not(this).slideUp().prev().removeClass( "active" );
	$(this).next().not( ":visible" ).slideDown().prev().addClass( "active" );
});
