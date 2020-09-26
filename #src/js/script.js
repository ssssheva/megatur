//= ../../node_modules/slick-carousel/slick/slick.min.js

function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

/*$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});*/

$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 5,
		infinite: false,
		responsive: [
			{
				breakpoint: 2000,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
});  