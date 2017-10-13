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

});
