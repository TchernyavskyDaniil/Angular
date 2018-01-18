var buttonOpen = document.querySelector(".burger__toggle");
console.log(buttonOpen);
var buttonUnCross = document.querySelector(".burger__svg");
console.log(buttonUnCross);
var buttonCross = document.querySelector(".burger__svg-cross");

buttonOpen.addEventListener("click", function (e) {
    alert("LOL");
    e.preventDefault();
    buttonUnCross.classList.toggle("burger__svg--close");
    buttonCross.classList.toggle("burger__svg--close");
});