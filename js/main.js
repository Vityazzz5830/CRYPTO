let yandexmap = document.getElementsByClassName('yandexmap');

if (yandexmap[0]) {
ymaps.ready(function () {
    var myMap = new ymaps.Map('yandexmap', {
        center: [55.898744, 37.425802],
        zoom: 17,
        controls: []
    }, 

    {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark1 = new ymaps.Placemark([55.898805, 37.425162], {}, {
      // Опции.
      
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/mapsec_baloon.svg',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
    })

    myMap.geoObjects
        .add(myPlacemark1);
});

}



let yandexmap2 = document.getElementsByClassName('yandexmap2');

if (yandexmap2[0]) {
ymaps.ready(function () {
    var myMap2 = new ymaps.Map('yandexmap2', {
        center: [55.898873, 37.424977],
        zoom: 17,
        controls: []
    }, 

    {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark2 = new ymaps.Placemark([55.898873, 37.424977], {}, {
      // Опции.
      
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/mapsec_baloon.svg',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
    })

    myMap2.geoObjects
        .add(myPlacemark2);
});

}


window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});



const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});




/*-------------ТАБ-МЕНЮ УСЛУГИ-------------*/

let p_bold = document.getElementsByClassName('questions-list-item-title-p');
let listitem = document.getElementsByClassName('questions-list-item');
let wrapinfo = document.getElementsByClassName('questions-list-item-wrapinfo');

for (let i = 0; i < listitem.length; i++) {
  listitem[i].addEventListener('click', function() {
    wrapinfo[i].classList.toggle("questions-list-item-wrapinfo_js");
    listitem[i].classList.toggle("questions-list-item-btnwrap-imgactive");
    listitem[i].classList.toggle("questions-list-item-btnwrap-imgnoactive");
    p_bold[i].classList.toggle("questions-list-item-title-p_js");
    listitem[i].classList.toggle("questions-list-item_js");
  });
}


/*-------------СЛАЙДЕР КРИПТО-ОТЕЛЬ-------------*/

$('.posec_content_leftpart_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    dots: false,
    autoplay: true,
    prevArrow: $('.posec_content_leftpart-leftbtn'),
    nextArrow: $('.posec_content_leftpart-rightbtn')
});


/*-------------СЛАЙДЕР КОНТЕЙНЕРЫ ДЛЯ МАЙНИНГА-------------*/

$('.containers_titlesec_content_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    dots: false,
    autoplay: true,
    prevArrow: $('.containers_titlesec_content_slider-leftbtn'),
    nextArrow: $('.containers_titlesec_content_slider-rightbtn')
  });


/*-------------СЛАЙДЕР ОСОБЕННОСТИ СБОРКИ-------------*/
$('.containers_featuressec_content_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    dots: true,
    autoplay: false,
    prevArrow: $('.containers_featuressec_content_slider-leftbtn'),
    nextArrow: $('.containers_featuressec_content_slider-rightbtn')
  });


/*-------------СЛАЙДЕР ЭТАПЫ СБОРКИ-------------*/
$('.stagessec_content_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    prevArrow: $('.stagessec_content_slider-leftbtn'),
    nextArrow: $('.stagessec_content_slider-rightbtn')
  });