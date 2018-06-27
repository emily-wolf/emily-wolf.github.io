//Match column heights
$(".match-height-getting-up-and-running").matchHeight();
$(".match-height-finding-your-way-around").matchHeight();
$(".match-height-paperwork").matchHeight();

$(window).resize(function() {
	$(".match-height-getting-up-and-running").matchHeight();
	$(".match-height-finding-your-way-around").matchHeight();
	$(".match-height-paperwork").matchHeight();
})