(function($){

	"use strict";

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('.page-loader').delay(350).fadeOut('slow');
	});

	$(document).ready(function() {

		var moduleHero = $('.module-hero, .module-map'),
			mobileTest;

		/* ---------------------------------------------- /*
		 * Mobile detect
		/* ---------------------------------------------- */

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileTest = true;
		} else {
			mobileTest = false;
		}

		/* ---------------------------------------------- /*
		 * Full height module
		/* ---------------------------------------------- */

		$(window).resize(function() {
			if (moduleHero.length > 0) {
				if (moduleHero.hasClass('js-fullheight')) {
					moduleHero.height($(window).height());
				} else {
					moduleHero.height($(window).height() * 0.65);
				}
			}
		}).resize();

		
		/* ---------------------------------------------- /*
		 * Setting background of modules
		/* ---------------------------------------------- */

		var modules = $('.module-hero, .module, .module-sm, .module-xs, .sidebar');

		modules.each(function() {
			if ($(this).attr('data-background')) {
				$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
			}
		});

		/* ---------------------------------------------- /*
		 * Parallax
		/* ---------------------------------------------- */

		if (mobileTest === true) {
			modules.css({'background-attachment': 'scroll'});
		}

		
		/* ---------------------------------------------- /*
		 * Portfolio
		/* ---------------------------------------------- */

		var filters   = $('#filters'),
			worksgrid = $('#works-grid');

		$('a', filters).on('click', function() {
			var selector = $(this).attr('data-filter');
			$('.current', filters).removeClass('current');
			$(this).addClass('current');
			worksgrid.isotope({
				filter: selector
			});
			return false;
		});

		$(window).on('resize', function() {
			
		}).resize();

		/* ---------------------------------------------- /*
		 * Team hover
		/* ---------------------------------------------- */

		var team_item = $('.team-item');

		team_item.mouseenter(function(){
			$(this).addClass('js-hovered');
			team_item.filter(':not(.js-hovered)').addClass('js-fade');
		});

		team_item.mouseleave(function(){
			$(this).removeClass('js-hovered');
			team_item.removeClass('js-fade');
		});

		
		/* ---------------------------------------------- /*
		 * Progress bars, counters animations
		/* ---------------------------------------------- */

		$('.progress-bar').each(function() {
			$(this).appear(function() {
				var percent = $(this).attr('aria-valuenow');
				$(this).animate({'width' : percent + '%'});
				$(this).find('.progress-value').countTo({from: 0, to: percent, speed: 900, refreshInterval: 30});
			});
		});

		$('.counter').each(function() {
			$(this).appear(function() {
				var number = $(this).find('.counter-timer').attr('data-to');
				$(this).find('.counter-timer').countTo({from: 0, to: number, speed: 1500, refreshInterval: 30});
			});
		});

		

		/* ---------------------------------------------- /*
		 * Scroll Animation
		/* ---------------------------------------------- */

		$('.anim-scroll').on('click', function(e) {
			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing');
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * Scroll top
		/* ---------------------------------------------- */

		$('a[href="#top"]').on('click', function() {
			$('html, body').animate({ scrollTop: 0 }, 'slow');
			return false;
		});

		/* ---------------------------------------------- /*
		 * Ajax options
		/* ---------------------------------------------- */

		var pageNumber = 0,
			workNumberToload = 5;

		var doneText    = 'Done',
			loadText    = 'More works',
			loadingText = 'Loading...',
			errorText   = 'Error! Check the console for more information.';

		/* ---------------------------------------------- /*
		 * Ajax portfolio
		/* ---------------------------------------------- */

		// $('#show-more').on('click', function() {
		// 	$(this).text(loadingText);

		// 	setTimeout(function() {
		// 		ajaxLoad(workNumberToload, pageNumber);
		// 	}, 300);

		// 	pageNumber++;

		// 	return false;
		// });

		// function ajaxLoad(workNumberToload, pageNumber) {
		// 	var $loadButton = $('#show-more');
		// 	var dataString = 'numPosts=' + workNumberToload + '&pageNumber=' + pageNumber;

		// 	$.ajax({
		// 		type: 'GET',
		// 		data: dataString,
		// 		dataType: 'html',
		// 		url: 'assets/php/ajax-load-more.html',
		// 		success: function(data) {
		// 			var $data = $(data);
		// 			var start_index = (pageNumber - 1) * workNumberToload;
		// 			var end_index = + start_index + workNumberToload;

		// 			if ($data.find('.work-item').slice(start_index).length) {
		// 				var work = $data.find('.work-item').slice(start_index, end_index);

		// 				worksgrid.append(work).isotope('appended', work).resize();

		// 				setTimeout(function() {
		// 					$loadButton.text(loadText);
		// 				}, 300);
		// 			} else {
		// 				setTimeout(function() {
		// 					$loadButton.text(doneText);
		// 				}, 300);

		// 				setTimeout(function () {
		// 					$('#show-more').animate({
		// 						opacity: 0,
		// 					}).css('display', 'none');
		// 				}, 1500);
		// 			}
		// 		},

		// 		error: function (jqXHR, textStatus, errorThrown) {
		// 			console.log(jqXHR + " :: " + textStatus + " :: " + errorThrown);

		// 			setTimeout(function() {
		// 				$loadButton.removeClass('ss-loading');
		// 				$loadButton.text(errorText);
		// 			}, 300);

		// 		}
		// 	});
		// }

	});

})(jQuery);

    $(".to-top-link").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    }); 

    //  $('#myModal').on('shown.bs.modal', function() {
    //     $('#myInput').focus()
    // })
$(function () {
  // инициализировать все элементы на страницы, имеющих атрибут data-toggle="tooltip", как компоненты tooltip
  $('[data-toggle="tooltip"]').tooltip()
});
    $("#datetimepicker1").datepicker();
     $("#datetimepicker2").datepicker();