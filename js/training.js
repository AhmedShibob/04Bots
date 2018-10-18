

$(".mycourses-gray-header").on('click' ,function(){
  $(this).toggleClass("mycourses-header_active")
 });
 //mycourses-cart-details
 $(".mycourses-out-item .progress-card-vertical").on("click",function(){
  $(this).parents(".tab-content").find(".hidden").fadeOut();
  $(this).parents(".tab-content").find(".mycourses-complete-page").fadeIn();
 });
 $(".hidden .go-out-details-page").on("click",function(){
  $(this).parents(".tab-content").find(".hidden").fadeOut();
  $(this).parents(".tab-content").find(".mycourses-out-details-page").fadeIn();
 });
 $(".mycourses-details-page .back ").on("click",function(){
  $(this).parents(".mycourses-details-page").fadeOut();
  $(this).parents(".tab-content").find(".hidden").fadeIn();
 });
 $( document ).ready(function() {
  $('.course-info').click(function () {
    $(this).parents('.tab-content').find('.show-part').hide(
            500);
    $(this).parents('.tab-content').find('.hide-part').show(
            500);
});
$('#back-courses').click(function () {
  $(this).parents('.tab-content').find('.hide-part').hide(
          500);
  $(this).parents('.tab-content').find('.show-part').show(
          500);
});
});

$(document).ready(function() {

	/* change icon svg background */

	$(".card-react-heartImg").click(function() {

		$(this).toggleClass("heartHover");

	});

	$(".card-react-calenderImg").click(function() {

		$(this).toggleClass("calenderHover");

	})

	/* datapickr calender */

	$(function() {

		$('.datepicker-me-class').datepicker({

			language: 'es',

			weekStart: 1,

			todayBtn: true,

			autoclose: true,

			todayHighlight: true,

			startView: 2,

			minViewMode: 2,

			forceParse: false

		});

		$('.card-react-calenderImg').on('click', function() {

			$('#date2').datepicker('show');

	});
	$('.profilePage-calender .input-group').on('click', function() {
		$('#profilePage-date').datepicker('show');
	});

    $('.to_icon2').on('click', function() {

			$('#date111').datepicker('show');

	});

	

	$('.datepicker-me-class,.profilePage-calender .input-group').on('changeDate', function() {

		let valdate = $('#date2 .in,#profilePage-date .in').val();

		 let scliceByDat = valdate.slice(3,5)

		console.log( scliceByDat );

	
		});



	});

	/* horizontal scroll for carts by owl carousel.js */

	$('.owl-carousel.owl-drag .owl-item').removeClass("owl-item").addClass("owel-item--custom");

	$('.owl-carousel').owlCarousel({

		loop: false,

		rtl: true,

		margin: 10,

		autoplayHoverPause: true,

		center: true,

  });

  $('.owl-stage .owl-item').removeClass("owl-item").addClass("owel-item--custom");

});


// function related to live course page---
function liveCourse() {
	$('.showing').click(function() {
		if( $(this).hasClass('collapsed') ) {
			$('.btn-link i').css('transform', 'rotate(0deg)');
			$(this).children('span').html('اخفاء');
		} else {
			$('.btn-link i').css('transform', 'rotate(180deg)');
			$(this).children('span').html('ظهور');
		}
	});
} liveCourse();

$(document).ready(function() {
	//working on action of attendace button
$('.course-content-live_attend').click(function() {
	$(this).html('تم الحضور');
	$(this).attr('disabled', 'disabled');
	if($(this).attr('disabled')) {
		$(this).addClass('disabled');
		$('.course-content-live_leave').css({'background-color': 'red'});
	}
});    //events to handle colors on btn in agenda tap
$('.course-content-live_leave').click(function() {
	$(this).addClass('hide_btn').removeClass('show_btn');
	$(this).siblings('button').addClass('hide_btn').removeClass('show_btn');
	$('.content_course_live .btns .noticing_form').addClass('show_btn').removeClass('hide_btn');
});

$('.accordion-live-course-card .content .live-course .content_course_live .btns form .live-course_action').click(function() {
	$('.content_course_live .btns .noticing_form').addClass('hide_btn').removeClass('show_btn');
	$('.course-content-live_leave').addClass('show_btn').removeClass('hide_btn').html('تم الانصراف').css({width: '105px', 'background-color': '#929292'}).attr('disabled', 'disabled');
	$('.course-content-live_leave').siblings('button').addClass('show_btn').removeClass('hide_btn');
});

//profilePage
	$(".moreBox").slice(0, 3).show();
	if ($(".profilePage-chart-item:hidden").length != 0) {
		$("#loadMore").show();
	}		
	$("#loadMore").on('click', function (e) {
		e.preventDefault();
		$(".moreBox:hidden").slice(0, 5).slideDown();
		if ($(".moreBox:hidden").length == 0) {
			$("#loadMore").fadeOut('slow');
			$(".profilePage-content .profilePage-content-chart1").addClass("hidden-shadow")
		}
	});
});
