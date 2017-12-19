$('icon-wrapper-home').addClass('red');

$('#horizontal-menu, #vertical-menu').hover(() => {
	$('#vertical-menu').children('img').addClass('widthTestV').removeClass('pendingVerticalMenuItem');
	$('#squiggle').addClass('none');
	$('#horizontal-menu').children("img").addClass("heightTestH").removeClass('pendingVerticalMenuItem');
}, () => {
  if ($('#vertical-menu').children())
	$('#vertical-menu').children('img').removeClass('widthTestV').delay(300);
	$('#horizontal-menu').children("img").removeClass("heightTestH").delay(300);
	$('#squiggle').removeClass('none');
  $('#horizontal-menu').children("img").not(".selectedMenuItem").addClass('pendingVerticalMenuItem')
  $('#vertical-menu').children("img").not(".selectedMenuItem").addClass('pendingVerticalMenuItem')
  $('#squiggle').removeClass('pendingVerticalMenuItem')
})

let verticalMenuItems = $('#v-one, #v-two, #v-three')

$('#v-one').click(() => {
  verticalMenuItems.removeClass('selectedMenuItem')  // .addClass('pendingVerticalMenuItem')
	$('#lightSlider').removeClass();
  $('#v-one').addClass('selectedMenuItem');
	$("#lightSlider").addClass('zerothMove');
})

$('#v-two').click(()=> {
  verticalMenuItems.removeClass('selectedMenuItem')  // .addClass('pendingVerticalMenuItem')
	$('#lightSlider').removeClass();
  $('#v-two').addClass('selectedMenuItem');
	$("#lightSlider").addClass('firstMove');
})

$('#v-three').click(()=> {
  verticalMenuItems.removeClass('selectedMenuItem')  // .addClass('pendingVerticalMenuItem')
	$('#lightSlider').removeClass();
  $('#v-three').addClass('selectedMenuItem');
	$("#lightSlider").addClass('secondMove');
})

let horizontalMenuItems = $('#one, #two, #three, #four, #five, #six');

$('#one').click(() => {
  horizontalMenuItems.removeClass('selectedMenuItem')  // .addClass('pendingVerticalMenuItem');
  $('#one').addClass('selectedMenuItem');
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();
	$("#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider").addClass('onethMove');
})

$('#two').click(()=> {
  horizontalMenuItems.removeClass('selectedMenuItem')  // .addClass('pendingVerticalMenuItem');
  $('#two').addClass('selectedMenuItem');
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();
	$("#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider").addClass('twothMove');
})

$('#three').click(()=> {
  horizontalMenuItems.removeClass('selectedMenuItem')  // .addClass('pendingVerticalMenuItem');
  $('#three').addClass('selectedMenuItem');
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();
	$("#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider").addClass('threethMove');
})

$('#four').click(() => {
  horizontalMenuItems.removeClass('selectedMenuItem')  // .addClass('pendingVerticalMenuItem');
  $('#four').addClass('selectedMenuItem');
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();
	$("#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider").addClass('fourthMove');
})

$('#five').click(()=> {
  horizontalMenuItems.removeClass('selectedMenuItem')  // .addClass('pendingVerticalMenuItem');
  $('#five').addClass('selectedMenuItem');
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();
	$("#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider").addClass('fifthMove');
})

$('#six').click(()=> {
  horizontalMenuItems.removeClass('selectedMenuItem')  // .addClass('pendingVerticalMenuItem');
  $('#six').addClass('selectedMenuItem');
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();
	$("#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider").addClass('sixthMove');
})
