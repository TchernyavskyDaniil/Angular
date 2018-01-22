function init() {
    const blockApi = document.querySelector('.pop-up');
    myMap=new ymaps.Map("map", {
            center: [45.043124, 39.0056951],
            zoom: 13,
            controls: []
        }
    ),
      myPlacemark=new ymaps.Placemark([45.043124, 39.0056951],
        {
          // balloonContent: "Ваша машина тут"
        },
        {
          iconLayout: "default#image",
          iconImageHref: "../assets/img/icon-transport.svg",
          iconImageSize: [36, 36],
          iconImageOffset: [0, 0]
        }
        )
    myMap.geoObjects.add(myPlacemark);
    myPlacemark.events
      .add('mouseenter', function (event) {
        event.preventDefault();
        console.log("one");
        blockApi.classList.toggle('pop-up-close');
      })
      .add('mouseleave', function (event) {
        event.preventDefault();
        blockApi.classList.toggle('pop-up-close');
      })
}

ymaps.ready(init);
