function setCarousel(){
	$('.carousel').slick({
		dots: true,
		mobileFirst: true
		//fade: true
	});
};

//CALL CAROUSEL
$(function(){
	setCarousel();
});
