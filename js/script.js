
$(document).ready(function () {
	$('.burger__btn').click(function (event) {
		$('.burger__btn, .galleryburger').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function(){
    $('.spoiler__btn').click(function(event) {
        if($('.services__body').hasClass('one')){
            $('.spoiler__btn').not($(this)).removeClass('active');
            $('.services__item-content').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300)
    }); 
});



function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});