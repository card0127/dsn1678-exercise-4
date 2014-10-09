var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttleSection = $('.shuttle-section');
var $shuttle = $('.shuttle');
var $shipSection = $('.ship-section');
var $ship1 = $('.ship1');
var $ship2 = $('.ship2');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', ' center ' + scrollPos / 2 + 'px');
	
	$shipSection.css('background-position', ' center ' + scrollPos / 2 + 'px');
});

$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, { offset: '50%' });

$shuttleSection.waypoint(function () {
	$shuttle.addClass('js-shuttle-fade');
}, { offset: '75%' });

$shipSection.waypoint(function () {
	$ship1.addClass('js-ship1-fade');
	$ship2.addClass('js-ship2-fade');
}, { offset: '75%' });
