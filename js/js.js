////////////////////////SLIDERS
$(document).ready(function(){
    $('.header__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        // dotsClass: "verticalDots",
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        vertical: true,
        verticalSwiping: true
    });
    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        prevArrow: '<div class="arrow news__arrow arrow--left"><svg viewBox="0 0 451.847 451.847"><path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/></svg></div>',
        nextArrow: '<div class="arrow news__arrow arrow--right"><svg viewBox="0 0 451.847 451.847"><path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/></svg></div>',
    });
    var addNews = document.createElement('div');
    addNews.innerHTML = '<img src="img/images/newsAdd.png">';
    addNews.className = "news__add";
    var firstNews = document.querySelector('.slick-current.news__elem');
    firstNews.appendChild(addNews);

    var sliderElem = "<div class=\"news__elem\">\n" +
        "                    <div class=\"news__image\">\n" +
        "                        <img src=\"img/images/slide2.jpg\" alt=\"slide2\">\n" +
        "                    </div>\n" +
        "                    <div class=\"news__info\">\n" +
        "                        <h3 class=\"news__title\">Effective Advertising Pointers.</h3>\n" +
        "                        <span class=\"news__text\">Having a home based business is a wonderful asset to your life...</span>\n" +
        "                        <div class=\"news__person person\">\n" +
        "                            <div class=\"person__photo\">\n" +
        "                                <img src=\"img/images/person2.png\" alt=\"person2\">\n" +
        "                            </div>\n" +
        "                            <span class=\"person__wrap\">\n" +
        "                                <span class=\"person__name\">Dominic Freeman</span>\n" +
        "                                <span class=\"person__date\">24 Apr 2017</span>\n" +
        "                            </span>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>";


    $('.news__add').on('click', function() {
        $('.news__slider').slick('slickAdd', sliderElem);
    });
});

/////////////////////////////////




// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}