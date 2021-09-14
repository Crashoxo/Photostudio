btnPick_1.onclick = function () {
    //  隱藏其他calss  
     $(".clothing_1").hide();   
     $(".clothing_1").fadeIn(600);
     $(".clothing_2").hide();
     $(".clothing_3").hide();
     $(".clothing_4").hide();
     $(".clothing_5").hide();
     $(".clothing_6").hide();

     console.log($(".clothing_1").find("div"));
     console.log($(".clothing_1").find("div").eq(1)); 
   };

   btnPick_2.onclick = function () {
    //  隱藏其他calss  
     $(".clothing_2").hide();   
     $(".clothing_2").fadeIn(600);
     $(".clothing_1").hide();
     $(".clothing_3").hide();
     $(".clothing_4").hide();
     $(".clothing_5").hide();
     $(".clothing_6").hide();
   };

   btnPick_3.onclick = function () {
    //  隱藏其他calss  
     $(".clothing_3").hide();   
     $(".clothing_3").fadeIn(600);
     $(".clothing_1").hide();
     $(".clothing_2").hide();
     $(".clothing_4").hide();
     $(".clothing_5").hide();
     $(".clothing_6").hide();
   };

   btnPick_4.onclick = function () {
    //  隱藏其他calss  
     $(".clothing_4").hide();   
     $(".clothing_4").fadeIn(600);
     $(".clothing_1").hide();
     $(".clothing_2").hide();
     $(".clothing_3").hide();
     $(".clothing_5").hide();
     $(".clothing_6").hide();
   };

   btnPick_5.onclick = function () {
    //  隱藏其他calss  
     $(".clothing_5").hide();   
     $(".clothing_5").fadeIn(600);
     $(".clothing_1").hide();
     $(".clothing_2").hide();
     $(".clothing_3").hide();
     $(".clothing_4").hide();
     $(".clothing_6").hide();
   };

   btnPick_6.onclick = function () {
    //  隱藏其他calss  
     $(".clothing_6").hide();   
     $(".clothing_6").fadeIn(600);
     $(".clothing_1").hide();
     $(".clothing_2").hide();
     $(".clothing_3").hide();
     $(".clothing_4").hide();
     $(".clothing_5").hide();
   };

   btnBack.onclick = function () {
     $(".clothing_1").fadeIn(600);
     $(".clothing_2").fadeIn(600);
     $(".clothing_3").fadeIn(600);
     $(".clothing_4").fadeIn(600);
     $(".clothing_5").fadeIn(600);
     $(".clothing_6").fadeIn(600);
   };