import $ from 'jquery';

function changeNavbarBgColorWhenScrollDown() {
	$(document).scroll(function() {
		const navbar = $('.fixed-header');
		$(navbar).toggleClass('scrolled navbar-expand-md', $(this).scrollTop() > navbar.height());
	});
}

changeNavbarBgColorWhenScrollDown();