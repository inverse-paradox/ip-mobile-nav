jQuery(document).ready(function($) {

	//mobile drops
	$('.nav li.menu-item-has-children').each(function(){
		$(this).append("<div class='sub-icon'><span class='plus'>+</span><span class='minus'>-</span></div>");
	});

	$('.sub-icon').on('click', function(){
		$(this).toggleClass('active');
		$(this).siblings('.sub-menu').toggleClass('active');
	});
});