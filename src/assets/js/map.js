function init() {
    const block = document.querySelector('.main__placeholder');
    const blockApi = document.querySelector('.pop-up');
    myMap=new ymaps.Map("map", {
            center: [45.059424, 39.0059951],
            zoom: 13,
            controls: []
        }
    ),
      myPlacemark=new ymaps.Placemark([45.043124, 39.0056951], {
          hintContent: "sometext in hover",
          balloonContent: "Это наш офис"
        }
        ,
        {
          iconLayout: "default#image",
          // iconImageHref: "../img/placeholder.",
          iconImageSize: [36, 36],
          iconImageOffset: [0, 0]
        }
        )
    myMap.geoObjects.add(myPlacemark);
    ymaps.domEvent.manager
      .add(block, 'mouseenter', function (event) {
        event.preventDefault();
        console.log("one");
        blockApi.classList.toggle('pop-up-close');
      })
      .add(block, 'mouseleave', function (event) {
        event.preventDefault();
        blockApi.classList.toggle('pop-up-close');
      })
}

ymaps.ready(init);
