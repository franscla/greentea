$(document).ready(function loop(){
	if ( $(window).scrollTop() + $(window).height() < 1000)
	  $(".footerTop").hide();
	  var isEnd = 0;

	$(window).scroll(function(){
	   // console.log($(this).scrollTop(), $(window).scrollTop() + $(window).height());
		if ( $(window).scrollTop() + $(window).height() > 700) {
			$(".footerTop").slideDown('slow');
		} else {
			$(".footerTop").slideUp('slow');
		}
		//$(".footerTop").html($(window).scrollTop());
		if(isEnd == 0){	
			if($(this).scrollTop() + $(this).height() > $('.background').height()) {			
					$(".footerTop").animate({"margin-bottom":"70px"}, 300);
				isEnd = 1;
			}else{
				$(".footerTop").css("margin-bottom","-20px");
			}
		}
		
		if($(this).scrollTop() + $(this).height() < $('.background').height()){
			isEnd = 0;
			$(".footerTop").css("margin-bottom","-20px");
		}
		
});

});
