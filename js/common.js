$(function() {

$('#my-menu').mmenu({
	extensions: [ 'effect-menu-slide', 'pagedim-black' ],
	navbar: false,
	offCanvas: {
		position: 'right' // menu position
	}
});

var api = $('#my-menu').data('mmenu');
api.bind('open:finish', function() {
	$('.hamburger').addClass('is-active');
}).bind('close:finish', function() {
	$('.hamburger').removeClass('is-active');
	});

$('.category').hover(function() {
	$(this).css({
		//'background-color' : '#fff',
		'border' : 'solid 3px #000',
	});
}, function() {
		$(this).css({
		//'background-color' : '#F3F3F3',
		'border' : 'none',
	});
});


 $(".featured-products-carousel").owlCarousel({
 		loop: true,
 		margin: 20,
 		items: 4,
 		dots: true,
 		dotsEach: true,
 		dotData: true,
 });

// $(".fa .fa-heart-o").click(function() {
// 	$(this).css("color", "#FF3B30	");
// }, function() {
// 	$(this).css("color", "#000");
// }); 

$(".featured-product").hover(function() {
	$(this).find(".product-button").css("display", "flex");
	$(this).find(".product-image").css("border", "solid 1px #000");
}, function() {
	$(this).find(".product-button").css("display", "none");
	$(this).find(".product-image").css("border", "none");
});

});
