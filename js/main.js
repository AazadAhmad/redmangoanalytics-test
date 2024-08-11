

$(window).on('load', function () {
	$('#offerdialog').modal('show');
});
$(document).ready(function () {
	$(document).on('click', 'nav span', function () {
		$('.sidenav').addClass("mobile-menu");
	});
	$(document).on('click', '.close-menu', function () {
		$('.sidenav').removeClass("mobile-menu");
	});

	$(document).on('click', '.box .btn', function () {
		$('.profDescription').fadeIn();
		$('.profile-detials').fadeOut();
		setTimeout(() => {
			var profDescription = $(this).parents(".box").find('.profile-description').html();
			$('.profile-detials .profDescription').html(profDescription);
			$('.profile-detials').fadeIn();
		}, 300)
	})

	$(document).on('click', '.close-btn', function () {
		$('.profile-detials').fadeOut();
	});
	$(document).on('click', '.Download', function () {
		$('.download-pr h4').fadeOut();
	});

	$(document).on('click', '.submit', function () {
		$(this).hide();
		$('.loader').show();
		function hideAndShowDivs() {
			setTimeout(function () {
				$('.loader').hide();
				$('.confirm').show();
			}, 2000);
		}
		hideAndShowDivs();
	});


	// Progress Bar
	$(".Download").eq(0).ElasticProgress({
		buttonSize: 60,
		colorBg: "#4bb0fe",
		colorFg: "#4bb0fe",
		highlightColor: "#fff",
		width: Math.min($(window).width()/2 - 250, 450),

		onClick: function (event) {
			$("#head polygon").attr("class", "");
			$("#line rect").attr("class", "");
			$("#label text").attr("class", "fill_white");

			console.log("onClick");
			$(this).ElasticProgress("open");
		},
		onOpen: function (event) {
			console.log("onOpen");
			fakeLoading($(this));
		},
		onComplete: function (event) {
			console.log("onComplete");
		},
		onClose: function (event) {
			console.log("onClose");
		},
		onFail: function (event) {
			console.log("onFail");
			$(this).ElasticProgress("open");
		},
		onCancel: function (event) {
			console.log("onCancel");
			$(this).ElasticProgress("open");
		}
	});

	setTimeout(function () {
		$("#head polygon").attr("class", "fill_white");
		$("#line rect").attr("class", "fill_white");
	}, 10);


	function fakeLoading($obj, speed, failAt) {
		if (typeof speed == "undefined") speed = 2;
		if (typeof failAt == "undefined") failAt = -1;
		var v = 0;
		var l = function () {
			if (failAt > -1) {
				if (v >= failAt) {
					if (typeof $obj.jquery != "undefined") {
						$obj.ElasticProgress("fail");
					} else {
						$obj.fail();
					}
					return;
				}
			}
			v += Math.pow(Math.random(), 2) * 0.1 * speed;

			if (typeof $obj.jquery != "undefined") {
				$obj.ElasticProgress("setValue", v);
			} else {
				$obj.setValue(v);
			}
			if (v < 1) {
				TweenMax.delayedCall(0.05 + (Math.random() * 0.14), l)
			}
		};
		l();
	}


});