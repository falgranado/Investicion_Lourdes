/**
 * @author Joseph Ocasio and Francisco Granado
 */
var clickCounter=0;
function initialize(){
	
	expand('medical_devices_block');
	//@Author Joseph Ocasio
		$( "#secondBlockElement1" ).hide();
   		$( "#secondBlockElement2" ).hide();
    	$( "#secondBlockElement3" ).hide();
    	$( "#secondBlockElement4" ).hide();

	//popup
	    $(function() {
	    	$( "#dialog" ).dialog();
	    });
	// this draws the connectors
    	$("#secondBlockElement1").show();
        $("#secondBlockElement1").animate({
        width: "160",
        opacity: 60,
        marginLeft: "-0.5in",
        fontSize: "0em",
        borderWidth: "1px"
        }, 1500);
        
        $("#secondBlockElement2").show();
        $("#secondBlockElement2").animate({
        width: "33",
        opacity: 60,
        marginLeft: "-0.5in",
        fontSize: "0em",
        borderWidth: "1px"
        }, 1500);
        
        $("#secondBlockElement3").show();
        $("#secondBlockElement3").animate({
        width: "60",
        opacity: 60,
        marginLeft: "-0.5in",
        fontSize: "0em",
        borderWidth: "1px"
        }, 1500);
        
        $("#secondBlockElement4").show();
        $("#secondBlockElement4").animate({
        width: "50",
        opacity: 60,
        marginLeft: "-0.5in",
        fontSize: "0em",
        borderWidth: "1px"



        }, 1500, function(){
        	$("#secondBlockElement1").hide();
           	$("#secondBlockElement2").hide();
            $("#secondBlockElement3").hide();
            $("#secondBlockElement4").hide();
        }
        
        );
        $("#medical_devices_block").show();
	//END Joseph Ocasio codes
}
//Expands and contracts desired css
function expand(div_block_id){
	var id='#'+div_block_id;//ID received by function
	//Original ID of style
	var id_original_css=  {
		backgroundColor: '#bca',
	    width: '20px',
	    border: '1px solid black',
	    marginLeft:'0',
	    fontSize:'1em',
	    opacity:'100',
	    borderWidth:'1px',
	    borderHeight:'1px'
	    
	    
	};
	$(id).click(function(){
		//If the click counter is even then animate back to original state
		if(++clickCounter % 2 == 0){
			$(this).animate(id_original_css,500);
			$('.hrzt-bar').delay(10).animate({'width':'-175px', 'marginTop': '-23px'},500);
    		$('.hrzt-bar2').delay(20).animate({'width':'-175px', 'marginTop': '-185px'},500);
    		$('.hrzt-bar3').delay(25).animate({'width':'-175px', 'marginTop': '-340px'},500);
    		$('.hrzt-bar4').delay(28).animate({'width':'-175px', 'marginTop': '-490px'},500);
		}else{
			//Expand to desired css
			$(this).animate({
					width: "70%",
			        opacity: 60,
			        marginLeft: "0.6in",
			        fontSize: "2em",
				    borderWidth: "10px"},500);
					$('.hrzt-bar').delay(10).animate({'width':'175px', 'marginTop': '-23px'},1000);
    				$('.hrzt-bar2').delay(20).animate({'width':'175px', 'marginTop': '185px'},1000);
    				$('.hrzt-bar3').delay(25).animate({'width':'175px', 'marginTop': '340px'},1000);
    				$('.hrzt-bar4').delay(28).animate({'width':'175px', 'marginTop': '490px'},1000);
    
    
		}
	});
	
}
//Loads everything when DOM is fully loaded
$(document).ready(function(){
	initialize();
});
