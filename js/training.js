
$(".mycourses-gray-header").on('click' ,function(){
  $(this).toggleClass("mycourses-header-active")
});

$(".mycourses_gray_header").on('click' ,function(){
  $(this).toggleClass("mycourses_header-active")
 });
 //mycourses-cart-details
 $(".progress-courses-item .mycourses-cart-details ").on("click",function(){
  $(this).parents(".tab-content").find(".hidden").fadeOut();
  $(this).parents(".tab-content").find(".mycourses__details").fadeIn();
 });
 $(".hidden .go_training_page").on("click",function(){
  $(this).parents(".tab-content").find(".hidden").fadeOut();
  $(this).parents(".tab-content").find(".mycourses_training_page").fadeIn();
 });
 $(".mycourses_details_page .back ").on("click",function(){
  $(this).parents(".mycourses_details_page").fadeOut();
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

	});
});