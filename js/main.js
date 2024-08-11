

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


	


});
