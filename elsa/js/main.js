var bkgfilter = 'radial-gradient(circle farthest-corner at 100% 100%, rgba(115, 115, 115, 0.70) 100%, rgba(0, 0, 0, 0)), '; //gray
var bkgimg =[
	'images/1.jpg',
	'images/2.jpg',
	'images/3.jpg',
	'images/4.jpg',
];
var transition = 'fadeInUp';
$(document).ready(function() {
	var timeToDisplay = 2000;
	var slideshow = $('#slideshow');
	var bkg = $('#bkg');
	var urls = [];
	for (i = 0; i < bkgimg.length; i++) {
		urls[i] = './' + bkgimg[i] + '';
	}
	var index = 0;
	var transition = function(ref) {
		var url = urls[index];
		ref.css('background-image', bkgfilter + ' url(' + url + ')');
		index = index + 1;
		if (index > urls.length - 1) {
			index = 0;
		}
	};
	var run = function() {
		transition(bkg);
		slideshow.fadeOut('slow', function() {
			transition(slideshow);
			setTimeout(function() {
				slideshow.fadeIn('slow', function() {
					setTimeout(run, timeToDisplay);
				});
			}, timeToDisplay);
		});
	}
	if (bkgimg.length > 1) {
		run();
	} else {
		transition(slideshow);
	}
});
//<![CDATA[
$(".click_1").click(function () {
	$("#question_1").hide("slow");
	$("#question_2").show("slow");
});
$(".click_2").click(function () {
	$("#question_2").hide("slow");
	$("#question_3").show("slow");
	window.dispatchEvent(new Event('resize'));
});
$(".click_3").click(function () {
	$("#question_3").hide("slow");
	$("#question_4").show("slow");
	window.dispatchEvent(new Event('resize'));
});
$(".click_4").click(function () {
	$("#question_4").hide("slow");
	$("#main").hide("slow");
	$("#ending").show("slow");
	window.dispatchEvent(new Event('resize'));
});
//]]>

//<![CDATA[
function clear_delay(timeoutID_here) {
	window.clearTimeout(timeoutID_here);
}
/* Run 1 */
function run_loading_run_1(time_delay) {
	timeoutID1 = window.setTimeout(run_loading_1, time_delay);
}
function run_loading_1() {
	$('.thank_for_close, .run_loading_2').fadeIn();
	$('.main_review').hide();
}
/* Run 2 */
function run_loading_run_2(time_delay) {
	timeoutID2 = window.setTimeout(run_loading_2, time_delay);
}
function run_loading_2() {
	$('.thank_for_close, .run_loading_2').hide();
	$('.run_loading_3, .li_run_loading_1, .li_run_loading_2').fadeIn();
}
/* Run 3 */
function run_loading_run_3(time_delay) {
	timeoutID3 = window.setTimeout(run_loading_3, time_delay);
}
function run_loading_3() {
	$('.run_loading_3').hide();
	$('.run_loading_4, .li_run_loading_3').fadeIn();
}
/* Run 4 */
function run_loading_run_4(time_delay) {
	timeoutID3 = window.setTimeout(run_loading_4, time_delay);
}
function run_loading_4() {
	$('.run_loading_4, .loading, .done_marker, .intro, a.message, img.loader').hide();
	$('.li_run_loading_4, li_run_loading_5, .run_loading_5, .show_end').fadeIn();
}
$(function () {
	$(document).on('click', '.next', function (e) {
		e.preventDefault();
		$(this).parent().hide().next().fadeIn();
	});
	$(document).on('click', '.run_loading', function (e) {
		e.preventDefault();
		$(this).parent().hide().next().fadeIn();
		$('.step5 .loading').show();
		run_loading_run_1('800');
		run_loading_run_2('1800');
		run_loading_run_3('3000');
		run_loading_run_4('4000');
	});
});
//]]>