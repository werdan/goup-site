//Decorations
var scrollDuration = 400;
var marginAnimation = 400;
var marginAnimation2 = 20;
var fadeOutDuration = 200;

/** All-pages bindings **/
	jQuery(document).ready(function() {
		// Search box functionality
		$("input#searchbox").data('invitation',$("input#searchbox").val());
		$("input#searchbox").focusout(function() {
			if($(this).val().length == 0) {
				$(this).attr('value',$(this).data('invitation'));
			}
		});
		$("input#searchbox").focusin(function(){
			if($(this).val() == $(this).data('invitation')) {
				$(this).attr('value','');
			}
		});
		$("input#searchbox").click(function(){
			$(this).focus();
		});

		$('ul.lava-menu').lavaLamp({speed: 300});

		$(".animated").each(function(){
			$(this).data('class', $(this).attr('class'));
		});
		$(".animated").hover(
			function () {
				$(this).removeClass();
				$(this).addClass($(this).data('class'));
				$(this).addClass("hover");
			},
			function () {
				$(this).removeClass();
				$(this).addClass($(this).data('class'));
			}	
		);
		$(".animated").mousedown(
			function () {
				$(this).removeClass();
				$(this).addClass($(this).data('class'));
				$(this).addClass("click");
		});
		$(".animated").mouseup(
			function () {
				$(this).removeClass();
				$(this).addClass($(this).data('class'));
		});

	});
