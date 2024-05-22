      function addImg1 () {
      
      document.getElementById("button1").addEventListener("click", function() {
      
          const imageUrl = document.getElementById("imageLink1").value;
          const imageDisplay = document.getElementById("image1");
      
          imageDisplay.src = imageUrl
      
      })
    }

      function addImg2 () {
      document.getElementById("button2").addEventListener("click", function() {
      
          const imageUrl = document.getElementById("imageLink2").value;
          const imageDisplay = document.getElementById("image2");
          
          imageDisplay.src = imageUrl
      
      })
    }
      
      function addImg3 () {
      document.getElementById("button3").addEventListener("click", function() {
      
          const imageUrl = document.getElementById("imageLink3").value;
          const imageDisplay = document.getElementById("image3");
          
          imageDisplay.src = imageUrl
      
      })
    }
      
      function addImg4 () {
      document.getElementById("button4").addEventListener("click", function() {
      
          const imageUrl = document.getElementById("imageLink4").value;
          const imageDisplay = document.getElementById("image4");
          
          imageDisplay.src = imageUrl
      
      })
    }

    addImg1 ()
    addImg2 ()
    addImg3 ()
    addImg4 ()