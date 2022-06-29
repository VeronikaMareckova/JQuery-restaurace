//NAVIGACE DO MOBILU (hamburgr)
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

//navigace skrolování JQ
(function($){
  $(function(){
      
      /* Scroll to sections */
      $(".jq--scroll-reference").click(function(){
         $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 1000);
      });
      
      $(".jq--scroll-menu-eat").click(function(){
         $("html, body").animate({scrollTop: $(".jq--menu-eat").offset().top}, 1500);
      });
      
      $(".jq--scroll-catering").click(function(){
         $("html, body").animate({scrollTop: $(".jq--catering").offset().top}, 1500);
      });
      
      $(".jq--scroll-kontakt").click(function(){
         $("html, body").animate({scrollTop: $(".jq--kontakt").offset().top}, 1500);
      });
     
  }); 
})(jQuery);


//uvodni obrazek zobraz se
$(function(){
  $(".jq--img1").hide().fadeIn(3000);
})

//=== Navigace zobraz se po kliknuti === 
  //Jídelní lístek (3 obrazky)
  $(document).ready(function(){
    $(".jq--TriObrazky").fadeOut(0);  //obrazek zmizi
    $(".jq--nav-TriObrazky").click(function(){ //po kliknutí
        
        $(".jq--TriObrazky").fadeIn("slow"); //zobraz se
    });
  });

  //Catering (6 ikon)
  $(document).ready(function(){
    $(".jq--SestIkon").fadeOut(0);  //obrazek zmizi
    $(".jq--nav-Catering").click(function(){ //po kliknutí
        
        $(".jq--SestIkon").fadeIn("slow"); //zobraz se
    });
  });

 

//=== Samovolne zobrazeni === 
  //3 obrazky
  $(document).ready(function(){
    $(".jq--TriObrazky").fadeOut(0);  //obrazek zmizi
    $(".jq--animace-TriObrazky").mouseenter(function(){ //po najeti mysi od...
        
        $(".jq--TriObrazky").fadeIn("slow"); //zobraz se
    });
  });

  //6 prvku
  $(document).ready(function(){
    $(".jq--SestPrvku").fadeOut(0);  //obrazek zmizi
    $(".jq--animace-SestPrvku").mouseenter(function(){ //po najeti mysi od...
        
        $(".jq--SestPrvku").fadeIn("slow"); //zobraz se
    });
  });









