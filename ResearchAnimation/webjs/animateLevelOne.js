function animateLevelOne(){
	

$("#medicalDevices").click(function () {
$("#medicalDevices").hide();
	$("#secondBlockElement1").hide();
	    $("#medicalDevicesBlock").animate({
	    // borderStyle: "dashed",
		width: "35px",
        opacity: 60,
        marginLeft: "0.6in",
        borderWidth: "3px"
    }, 1500, function () {
	
	// this draws the connectors
    $('.hrzt-bar').delay(1000).animate({'width':'175px', 'marginTop': '-23px'},1000);
    $('.hrzt-bar2').delay(2000).animate({'width':'175px', 'marginTop': '185px'},1000);
    $('.hrzt-bar3').delay(2500).animate({'width':'175px', 'marginTop': '340px'},1000);
    $('.hrzt-bar4').delay(2800).animate({'width':'175px', 'marginTop': '490px'},1000);
    

    	$("#secondBlockElement1").show();

        $("#secondBlockElement1").animate({
        width: "160",
        opacity: 60,
        marginLeft: "1.6in",
        fontSize: "1em",
        borderWidth: "5px"
        }, 1500);
        
        $("#secondBlockElement2").show();
        $("#secondBlockElement2").animate({
        width: "33",
        opacity: 60,
        marginLeft: "1.6in",
        fontSize: "1em",
        borderWidth: "5px"
        }, 1500);
        
        $("#secondBlockElement3").show();
        $("#secondBlockElement3").animate({
        width: "60",
        opacity: 60,
        marginLeft: "1.6in",
        fontSize: "1em",
        borderWidth: "5px"
        }, 1500);
        
        $("#secondBlockElement4").show();
        $("#secondBlockElement4").animate({
        width: "50",
        opacity: 60,
        marginLeft: "1.6in",
        fontSize: "1em",
        borderWidth: "5px"
        }, 1500);
    });
});
}