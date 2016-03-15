$(document).ready(function(){
    $("#choose").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("value")=="tech"){
                $(".box").not(".tech").hide();
                
                $(".tech").animate({
						height: "toggle",
						padding: "toggle"
				});
            }
            else if($(this).attr("value")=="moral"){
                $(".box").not(".moral").hide();

                $(".moral").animate({
						height: "toggle",
						padding: "toggle"
				});
            }
            else if($(this).attr("value")=="psych"){
                $(".box").not(".psych").hide();

                $(".psych").animate({
						height: "toggle",
						padding: "toggle"
				});
            }
            else{
                $(".box").hide();
            }
        });
    }).change();
});