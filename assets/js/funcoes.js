// JavaScript Document
$(document).ready(function(){
	
   /* MENU */
    $(".btMenu").click(function(){
	   $(".nav").toggleClass("mostrar");
	   $(".bgMenu").slideToggle();
    });

	$(".bgMenu").click(function(){
       $(".nav").toggleClass("mostrar");
	   $(".bgMenu").slideToggle();
    });
	
	$(".bt_close").click(function(){
       $(".nav").toggleClass("mostrar");
	   $(".bgMenu").slideToggle();
    });

});


/* SCROLL ANCORA */
var $doc = $("html, body");
$(".scrollSuave").click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, "href") ).offset().top
    }, 50);
    return false;
});


/* LIGHTBOX */
$(function(){
	$('.lightImovel').Chocolat({
		imageSize: 'contain'
	});
});

/* SMARTMENU */
$(function() {
	$('#menu').smartmenus({
		subMenusSubOffsetX: 1,
		subMenusSubOffsetY: -8
	});
});		
	
/* WOW */
new WOW().init();

/* SLIDE SLICK */
$(document).ready(function(){
	$('.slideHome').slick({
		slidesToShow: 1,
		variableWidth: false,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false
  	});
	
	$('.slideClientes').slick({
		slidesToShow: 3,
		variableWidth: false,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		responsive: [
    {
	breakpoint: 1200,
	settings: {
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  infinite: true,
	  dots: false
	}
	},
	{
	breakpoint: 960,
	settings: {
	  slidesToShow: 2,
	  slidesToScroll: 1
	}
    },
    {
	breakpoint: 550,
	settings: {
	  slidesToShow: 1,
	  slidesToScroll: 1
	}
  }

  ]
  	});
});


$(document).on('opening', '.remodal', function () {
    console.log('opening');
  });
  $(document).on('opened', '.remodal', function () {
    console.log('opened');
  });
  $(document).on('closing', '.remodal', function (e) {
    console.log('closing' + (e.reason ? ', reason: ' + e.reason : ''));
  });
  $(document).on('closed', '.remodal', function (e) {
    console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
  });
  $(document).on('confirmation', '.remodal', function () {
    console.log('confirmation');
  });
  $(document).on('cancellation', '.remodal', function () {
    console.log('cancellation');
  });
  $('[data-remodal-id=modal2]').remodal({
    modifier: 'with-red-theme'
  });
  
/* PLACEHOLDER */
$(document).ready(function() {
function add() {if($(this).val() == ''){$(this).val($(this).attr('placeholder')).addClass('placeholder');}}
function remove() {if($(this).val() == $(this).attr('placeholder')){$(this).val('').removeClass('placeholder');}}
if (!('placeholder' in $('<input>')[0])) { // Create a dummy element for feature detection
$('input[placeholder], textarea[placeholder]').blur(add).focus(remove).each(add); // Select the elements that have a placeholder attribute
$('form').submit(function(){$(this).find('input[placeholder], textarea[placeholder]').each(remove);}); // Remove the placeholder text before the form is submitted
}
});