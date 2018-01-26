// MENU HOVER BEHAVIOR

$('#horizontal-menu, #vertical-menu').hover(() => {
	$('#vertical-menu').children('img').addClass('widthHoverV').removeClass('pendingMenuItem');
	$('#horizontal-menu').children('.baseH').addClass('heightHoverH').removeClass('pendingMenuItem')
}, () => {
  if ($('#vertical-menu').children())
	$('#vertical-menu').children('img').removeClass('widthHoverV').delay(300);
	$('#horizontal-menu').children('.baseH').removeClass("heightHoverH").delay(300);
	$('#horizontal-menu').children('.baseH').addClass('pendingMenuItem');
  $('#vertical-menu').children("img").not(".selectedMenuItem").addClass('pendingMenuItem')
})


// VERTICAL MENU BEHAVIOR
let verticalMenuItems = $('#v-one, #v-two, #v-three')
vertMenuMover('#v-one', 'zerothMove')
vertMenuMover('#v-two', 'firstMove')
vertMenuMover('#v-three', 'secondMove')

function vertMenuMover(menuItem, move) {
	$(menuItem).click(() => {
	  verticalMenuItems.removeClass('selectedMenuItem')
		$('#grid-wrapper').removeClass();
	  $(menuItem).addClass('selectedMenuItem');
		$("#grid-wrapper").addClass(move);
	})
}


// HORIZONTAL MENU BEHAVIOR
let horizontalMenuItems = $('#h-one, #h-two, #h-three, #h-four, #h-five, #h-six');
// special third row for narrative
$('#h-one').click(() => {
  horizontalMenuItems.removeClass('selectedMenuItem');
	$('#home-symbol').removeClass('fade');
  $('#h-one').addClass('selectedMenuItem');
	$('#row-one, #row-three, #row-two').removeClass();
	$('#v-three').removeClass('none').removeClass('fade')
	$("#row-one, #row-three, #row-two").addClass('twothMove');
})

horizMenuMover('#h-two', 'threethMove');
horizMenuMover('#h-three', 'fourthMove');
horizMenuMover('#h-four', 'fifthMove');
horizMenuMover('#h-five', 'sixthMove');
horizMenuMover('#h-six', 'seventhMove');


function horizMenuMover(menuItem, move) {
	$(menuItem).click(()=> {
		horizontalMenuItems.removeClass('selectedMenuItem'); // generic
		$('#v-three').addClass('none').addClass('fade'); // generic
		returnToTitles() // generic
		$('#home-symbol').removeClass('fade'); //generic
	  $(menuItem).addClass('selectedMenuItem');
		$('#row-one, #row-two, #row-three').removeClass();
		$("#row-one, #row-two, #row-three").addClass(move);
	})
}

// STORY ROW ONLY ACCESSED ON ULMUS COLUMN
function returnToTitles() {
	if ($('#v-three').hasClass('none')&& $('#v-three').hasClass('selectedMenuItem')) {
		verticalMenuItems.removeClass('selectedMenuItem');
		$('#grid-wrapper').removeClass();
		$('#v-two').addClass('selectedMenuItem');
		$("#grid-wrapper").addClass('firstMove');
	}
}

// HOME BUTTON BEHAVIOR
$('#home-symbol').hover(function() {
	$('#home-symbol > img').addClass('home-grow');
},function() {
	$('#home-symbol > img').removeClass('home-grow');
})

$('#home-symbol').click(function() {
	horizontalMenuItems.removeClass('selectedMenuItem').addClass('pendingMenuItem');
	verticalMenuItems.removeClass('selectedMenuItem').addClass('pendingMenuItem');
	$('#v-three').addClass('none').addClass('fade');
	$('#grid-wrapper').removeClass();
	$('#row-one, #row-three, #row-two').removeClass();
  $('#home-symbol').addClass('fade');
	$('#v-one').addClass('selectedMenuItem');
	$("#grid-wrapper").addClass('zerothMove');
});
