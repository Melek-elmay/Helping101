document.getElementById("button1").addEventListener("click", function() {

    const imageUrl = document.getElementById("imageLink1").value;
    const imageDisplay = document.getElementById("image1");
    
    imageDisplay.src = imageUrl

})