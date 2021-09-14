btnPick_1.onclick = function () {
    //  隱藏其他calss  
    $(".clothing_1").hide();   
    $(".clothing_1").fadeIn(600);
     $(".clothing_2").hide();
     $(".clothing_3").hide();
     $(".clothing_4").hide();
     $(".clothing_5").hide();
     $(".clothing_6").hide();
     // 去除class
     // $(".clothing_1").find("div").eq(1).removeClass('clothes_style_head');
     
     // $(".clothing_1").find("div").addClass('bg-primary'); //全套色 醜
     $(".clothing_1").find("div").eq(1).addClass('bg-primary'); //第二個
     $(".clothing_1").find("div").eq(4).addClass('bg-primary');
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

     $(".clothing_2").find("div").eq(1).addClass('bg-secondary'); //第二個
     $(".clothing_2").find("div").eq(4).addClass('bg-secondary');
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

     $(".clothing_3").find("div").eq(1).addClass('bg-success'); //第二個
     $(".clothing_3").find("div").eq(4).addClass('bg-success');
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

     $(".clothing_4").find("div").eq(1).addClass('bg-danger'); //第二個
     $(".clothing_4").find("div").eq(4).addClass('bg-danger');
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

     $(".clothing_5").find("div").eq(1).addClass('bg-warning'); //第二個
     $(".clothing_5").find("div").eq(4).addClass('bg-warning');
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

     $(".clothing_6").find("div").eq(1).addClass('bg-info'); //第二個
     $(".clothing_6").find("div").eq(4).addClass('bg-info');
    };
  
     
  btnBack.onclick = function () {
    $(".clothing_1").find("div").eq(1).removeClass(' bg-primary');
    $(".clothing_1").find("div").eq(4).removeClass(' bg-primary');
    $(".clothing_1").find("div").eq(1).addClass('clothes_style_head'); 
    $(".clothing_1").find("div").eq(4).addClass('clothes_style_head');

    $(".clothing_2").find("div").eq(1).removeClass(' bg-secondary');
    $(".clothing_2").find("div").eq(4).removeClass(' bg-secondary');
    $(".clothing_2").find("div").eq(1).addClass('clothes_style_head'); 
    $(".clothing_2").find("div").eq(4).addClass('clothes_style_head');

    $(".clothing_3").find("div").eq(1).removeClass(' bg-success');
    $(".clothing_3").find("div").eq(4).removeClass(' bg-success');
    $(".clothing_3").find("div").eq(1).addClass('clothes_style_head'); 
    $(".clothing_3").find("div").eq(4).addClass('clothes_style_head');

    $(".clothing_4").find("div").eq(1).removeClass(' bg-danger');
    $(".clothing_4").find("div").eq(4).removeClass(' bg-danger');
    $(".clothing_4").find("div").eq(1).addClass('clothes_style_head'); 
    $(".clothing_4").find("div").eq(4).addClass('clothes_style_head');

    $(".clothing_5").find("div").eq(1).removeClass(' bg-warning');
    $(".clothing_5").find("div").eq(4).removeClass(' bg-warning');
    $(".clothing_5").find("div").eq(1).addClass('clothes_style_head'); 
    $(".clothing_5").find("div").eq(4).addClass('clothes_style_head');

    $(".clothing_6").find("div").eq(1).removeClass(' bg-info');
    $(".clothing_6").find("div").eq(4).removeClass(' bg-info');
    $(".clothing_6").find("div").eq(1).addClass('clothes_style_head'); 
    $(".clothing_6").find("div").eq(4).addClass('clothes_style_head');

    $(".clothing_1").fadeIn(600);
    $(".clothing_2").fadeIn(600);
    $(".clothing_3").fadeIn(600);
    $(".clothing_4").fadeIn(600);
    $(".clothing_5").fadeIn(600);
    $(".clothing_6").fadeIn(600);
  };