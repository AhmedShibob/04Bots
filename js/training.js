
$(".mycourses-gray-header").on('click' ,function(){
  $(this).toggleClass("mycourses-header-active")
});


$(".mycourses_gray_header").on('click' ,function(){
  $(this).toggleClass("mycourses_header-active")
 });
 $(".progress-courses-item .mycourses-cart-details ").on("click",function(){
  $(this).parents(".tab-content").find(".hidden").fadeOut();
  $(this).parents(".tab-content").find(".mycourses_details_page").fadeIn();
 });
 $(".mycourses_details_page .back ").on("click",function(){
  $(this).parents(".mycourses_details_page").fadeOut();
  $(this).parents(".tab-content").find(".hidden").fadeIn();
 });
 $( document ).ready(function() {
  $('.mycourses-cart').click(function () {
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
