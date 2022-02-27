const windowWidth = 800, windowHeight = 600;

const button = document.getElementById("button");
button.style.width = "100px";
button.style.height = "50px";
button.style.position = "center";

const image = document.getElementById("image");
image.style.visibility = "hidden";

button.addEventListener("click", myFunction);

function myFunction() {
    button.style.visibility = "hidden";
    image.style.visibility = "visible";
    document.getElementById("audio").play();
}