
var xxTotal = 0
    
    function addImg1 () {
      
      document.getElementById("button1").addEventListener("click", function() {
      
          const imageUrl = document.getElementById("imageLink1").value;
          const imageDisplay = document.getElementById("image1");


          const kg = document.getElementById("Kg1").value;
          //// need to remember that kg is a string 
          var ReturnToString = ""
      
        // give my div an image 
          imageDisplay.src = imageUrl
          // giving my driver a small Image 
          $("#small1").attr("src",imageUrl);
          // giving
          
            xxTotal = (xxTotal + parseInt(kg)) 

            if (xxTotal < 100) {

              $("#Counter").text(xxTotal) 
            }
  
            else {
              $("#Counter").text("please make sure it is under 100Kg !")
            }

            
         
      })
    }


    
      function addImg2 () {
      document.getElementById("button2").addEventListener("click", function() {
      
          const imageUrl = document.getElementById("imageLink2").value;
          const imageDisplay = document.getElementById("image2");

          const kg = document.getElementById("Kg2").value;
          
          imageDisplay.src = imageUrl
          $("#small2").attr("src",imageUrl);
    

          xxTotal = xxTotal + parseInt(kg)

           if (xxTotal < 100) {
            
            $("#Counter").text(xxTotal) 
           }

           else {
            $("#Counter").text("please make sure it is under 100Kg !")
           }
           
            

            

            

      })
    }

      
      function addImg3 () {
      document.getElementById("button3").addEventListener("click", function() {
      
          const imageUrl = document.getElementById("imageLink3").value;
          const imageDisplay = document.getElementById("image3");

          const kg = document.getElementById("Kg3").value;
          
          imageDisplay.src = imageUrl
          $("#small3").attr("src",imageUrl);
            
            xxTotal = xxTotal + parseInt(kg)

            if (xxTotal < 100) {
            
              $("#Counter").text(xxTotal) 
             }
  
             else {
              $("#Counter").text("please make sure it is under 100Kg !")
             }
      })
    }
      



      function addImg4 () {

          document.getElementById("button4").addEventListener("click", function() {
      
          const imageUrl = document.getElementById("imageLink4").value;
          const imageDisplay = document.getElementById("image4");

          const kg = document.getElementById("Kg4").value;
          
          imageDisplay.src = imageUrl

          $("#small4").attr("src",imageUrl);

          xxTotal = xxTotal + parseInt(kg)


          if (xxTotal < 100) {
            
            $("#Counter").text(xxTotal) 
           }

           else {
            $("#Counter").text("please make sure it is under 100Kg !")
           }
            

      })
    }

    addImg1 ()
    addImg2 ()
    addImg3 ()
    addImg4 ()



    function addDrugImg1 () {

        document.getElementById("button-01").addEventListener("click", function() {
        
            const imageUrl = document.getElementById("imageLink1-01").value;
            const imageDisplay = document.getElementById("image1-01");

            const kg = document.getElementById("Kg5").value;
            
            imageDisplay.src = imageUrl
            $("#small5").attr("src",imageUrl);

            xxTotal = xxTotal + parseInt(kg)

            if (xxTotal < 100) {
               $("#Counter").text(xxTotal) 
             }
  
             else {
              $("#Counter").text("please make sure it is under 100Kg !")
             }
                
       
        })
      }


      function addDrugImg2 () {
        document.getElementById("button-02").addEventListener("click", function() {
        
            const imageUrl = document.getElementById("imageLink1-02").value;
            const imageDisplay = document.getElementById("image2-02");

            const kg = document.getElementById("Kg6").value;
            
            imageDisplay.src = imageUrl
            $("#small6").attr("src",imageUrl);

   
            
            xxTotal = xxTotal + parseInt(kg)

            if (xxTotal < 100) {
            
              $("#Counter").text(xxTotal) 
             }
  
             else {
              $("#Counter").text("please make sure it is under 100Kg !")
             }
                
  
        
        })
      }


      function addDrugImg3 () {
        document.getElementById("button-03").addEventListener("click", function() {
        
            const imageUrl = document.getElementById("imageLink1-03").value;
            const imageDisplay = document.getElementById("image3-03");

            const kg = document.getElementById("Kg7").value;
            
            imageDisplay.src = imageUrl
            $("#small7").attr("src",imageUrl);

                xxTotal = xxTotal + parseInt(kg)

                if (xxTotal < 100) {
                  $("#Counter").text(xxTotal) 
                 }
      
                 else {
                  $("#Counter").text("please make sure it is under 100Kg !")
                 }
                
        })
      }


      function addDrugImg4 () {
         document.getElementById("button-04").addEventListener("click", function() {
        
            const imageUrl = document.getElementById("imageLink1-04").value;
            const imageDisplay = document.getElementById("image4-04");

            const kg = document.getElementById("Kg8").value;
            
            imageDisplay.src = imageUrl

            $("#small8").attr("src",imageUrl);
            
            
                xxTotal = xxTotal + parseInt(kg)

                if (xxTotal < 100) {
                  $("#Counter").text(xxTotal) 
                }
      
                else {
                 $("#Counter").text("please make sure it is under 100Kg !")
                }
                
        })
      }

      addDrugImg1 () 
      addDrugImg2 () 
      addDrugImg3 () 
      addDrugImg4 () 


  
      // function reqDriver() {
      //     $("#TimeArrive").append("driver will arrive in 2 days")
      // }

      // function redToGreen() {
      //   $("#Red-to-green").css("background-color", "green")
      // }


      // function handleClick() {
      //   reqDriver();
      //   redToGreen();
      // }


      // $("#reqDriver").click(handleClick() )
     


      function money() {

        document.getElementById("moneyBtn").addEventListener("click", function() {
        const money = document.getElementById("money1").value;
        
        $("#moneyff").append(money)
          
      })

      }

      money()
      // $("CounterDiv").append(xxTotal)


      $("#reqDriver").click(function() {
        $("#truck").attr("src","https://i.pinimg.com/originals/c8/26/41/c8264172074eb50241381061719391fa.gif")
      })

      











      






