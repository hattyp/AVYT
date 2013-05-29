$(document).ready(function(){

	$("#menu").click(function () {
		if ($("#nav").height() == 0) {
			$("#nav").addClass("slideDown");
		} else {
			$("#nav").removeClass("slideDown");
		}
	});
});