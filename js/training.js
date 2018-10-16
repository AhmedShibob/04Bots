

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
	$(".heart-img").click(function() {
		$(this).toggleClass("heart-icon");
	});
	$(".calender-img").click(function() {
		$(this).toggleClass("calenderhover");
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
		$('.to_icon').on('click', function() {
			$('#date2').datepicker('show');
    });
    $('.to_icon2').on('click', function() {
			$('#date111').datepicker('show');
	});
	
	$('.datepicker-me-class').on('changeDate', function() {
		let valdate = $('#date2 .in').val();
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
			$('.course-content-live_leave').addClass('red');
		}
	});

	//working on action of leaving button
	$('.course-content-live_leave').click(function() {
		$(this).slideUp(500);
		$(this).siblings('button').slideUp(500);
		$('.content_course_live .btns .noticing_form').slideDown(400);
	});
});