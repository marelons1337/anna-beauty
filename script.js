const thumbnail = document.getElementById("thumbnail");
const modalBox = document.getElementById("modalBox");

thumbnail.onclick = function() {
    modalBox.style.visibility = "visible";
    console.log("visible");
    
}
modalBox.onclick = function() {
    modalBox.style.visibility = "hidden"
}



