$(document).ready(function loop(){
	$(".footerTop").hide();
	var isEnd = 0;

	$(window).scroll(function(){
//	    console.log($(this).scrollTop());
		if ($(this).scrollTop() > 200) {
			$(".footerTop").slideDown('slow');
		} else {
			$(".footerTop").slideUp('slow');
		}
		//$(".footerTop").html($(window).scrollTop());
		if(isEnd == 0){	
			if($(window).scrollTop() > 1700) {			
					$(".footerTop").animate({"margin-bottom":"70px"}, 300);
				isEnd = 1;
			}else{
				$(".footerTop").css("margin-bottom","-20px");
			}
		}
		
		if($(window).scrollTop() < 1700){
			isEnd = 0;
			$(".footerTop").css("margin-bottom","-20px");
		}
		
});

});
  