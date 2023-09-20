const bulb = document.getElementById("bulb-off");


const onButton = document.getElementById("on");


const offButton = document.getElementById("off");


onButton.addEventListener("click", function () {
    bulb.style.backgroundColor = "yellow"
});

offButton.addEventListener("click", function () {
    bulb.style.backgroundColor = "#101011";
});
