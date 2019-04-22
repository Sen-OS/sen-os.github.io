$(document).ready(function() {
	var coverTyped = new Typed("#coverTyped", {
		strings: ["Hello, my name is Sen (or OverlordSnail) and I edit various images into various things using Adobe Photoshop CS6."],
		typeSpeed: 45,
		backSpeed: 15,
		startDelay: 500,
		showCursor: true,
		onComplete: function() {
			$("#coverTyped").hide();
			$(".typed-cursor").hide();
			$("#coverTypedSwitch").show();
			$("#subtext").show();
			$("#spacer").show();
			$("#scroll").css("opacity", "1");
		}
	});
});

$(window).scroll(function() {
	if ($(document).scrollTop() > 20) {
		$("#scroll").css("opacity", "0");
	} else {
		$("#scroll").css("opacity", "1");
	}
});