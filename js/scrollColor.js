
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 400 && scroll < 1000) {
	    $(".fab").css("color" , "#000");
      $(".fab").css("transition" , ".3s");
	  }

	  else{
		  $(".fab").css("color" , "#fff");
	  }
  })
});
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $("nav").css("background" , "rgba(3, 169, 244,.99)");
      $("nav").css("box-shadow" , "2px 5px 5px -6px #000");
      $("nav").css("transition" , ".3s");
	  }

	  else{
		  $("nav").css("background-color" , "#000");
      $("nav").css("box-shadow" , "none");

	  }
  })
})
