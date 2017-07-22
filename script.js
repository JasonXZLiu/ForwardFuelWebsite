$(document).ready(function() {
	$("button").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#mainDescriptionRow").offset().top},
	        'slow');
	});
});