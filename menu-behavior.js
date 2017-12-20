$('#horizontal-menu, #vertical-menu').hover(() => {
	$('#vertical-menu').children('img').addClass('widthTestV').removeClass('pendingVerticalMenuItem');
	$('#horizontal-menu').children("img").addClass("heightTestH").removeClass('pendingVerticalMenuItem');
}, () => {
  if ($('#vertical-menu').children())
	$('#vertical-menu').children('img').removeClass('widthTestV').delay(300);
	$('#horizontal-menu').children("img").removeClass("heightTestH").delay(300);
  $('#horizontal-menu').children("img").not(".selectedMenuItem").addClass('pendingVerticalMenuItem')
  $('#vertical-menu').children("img").not(".selectedMenuItem").addClass('pendingVerticalMenuItem')
})

let verticalMenuItems = $('#v-one, #v-two, #v-three')

$('#v-one').click(() => {
  verticalMenuItems.removeClass('selectedMenuItem')  // .addClass('pendingVerticalMenuItem')
	$('#lightSlider').removeClass();
  $('#v-one').addClass('selectedMenuItem');
	$("#lightSlider").addClass('zerothMove');
})

$('#v-two').click(()=> {
  verticalMenuItems.removeClass('selectedMenuItem');
	$('#lightSlider').removeClass();
  $('#v-two').addClass('selectedMenuItem');
	$("#lightSlider").addClass('firstMove');
})

$('#v-three').click(()=> {
  verticalMenuItems.removeClass('selectedMenuItem');
	$('#lightSlider').removeClass();
  $('#v-three').addClass('selectedMenuItem');
	$("#lightSlider").addClass('secondMove');
})

let horizontalMenuItems = $('#one, #two, #three, #four, #five, #six');

$('#one').click(() => {
  horizontalMenuItems.removeClass('selectedMenuItem');
  $('#one').addClass('selectedMenuItem');
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();
	$("#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider").addClass('onethMove');
})

$('#two').click(()=> {
  horizontalMenuItems.removeClass('selectedMenuItem');
  $('#two').addClass('selectedMenuItem');
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();
	$("#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider").addClass('twothMove');
})

$('#three').click(()=> {
  horizontalMenuItems.removeClass('selectedMenuItem');
  $('#three').addClass('selectedMenuItem');
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();
	$("#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider").addClass('threethMove');
})

$('#four').click(() => {
  horizontalMenuItems.removeClass('selectedMenuItem');
  $('#four').addClass('selectedMenuItem');
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();
	$("#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider").addClass('fourthMove');
});

$('#five').click(()=> {
  horizontalMenuItems.removeClass('selectedMenuItem');
  $('#five').addClass('selectedMenuItem');
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();
	$("#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider").addClass('fifthMove');
});

$('#six').click(()=> {
  horizontalMenuItems.removeClass('selectedMenuItem');
  $('#six').addClass('selectedMenuItem');
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();
	$("#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider").addClass('sixthMove');
});

$('#home-symbol').hover(function() {
	$('#home-symbol > img').addClass('home-grow');
},function() {
	$('#home-symbol > img').removeClass('home-grow');
})

$('#home-symbol').click(function() {
	horizontalMenuItems.removeClass('selectedMenuItem').addClass('pendingVerticalMenuItem');
	verticalMenuItems.removeClass('selectedMenuItem').addClass('pendingVerticalMenuItem');
	$('#lightSlider').removeClass();
	$('#anotherLightSlider, #anotherAnotherLightSlider, #aaLightSlider').removeClass();

  $('#one').addClass('selectedMenuItem');
	$('#v-one').addClass('selectedMenuItem');
	$("#lightSlider").addClass('zerothMove');
});
