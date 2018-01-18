function init() {
    myMap=new ymaps.Map("map", {
            center: [45.043124, 39.0056951],
            zoom: 13,
            controls: []
        }
    ),
        myPlacemark=new ymaps.Placemark([45.043124, 39.0056951], {
                hintContent: "Мы тут!",
                balloonContent: "Это наш офис"
            }
            , {
                iconLayout: "default#image",
                // iconImageHref: "../../img/icon-map-marker.svg",
                iconImageSize: [36, 36],
                iconImageOffset: [0, 0]
            }
        ),
        myMap.geoObjects.add(myPlacemark)
}

ymaps.ready(init);
var myMap;
