/**
 * @author Joseph Ocasio and Francisco Granado
 */
var clickCounter=0;
var clickCounter2=0;
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
		$( "#dialog" ).remove();
		if(++clickCounter % 2 == 0){
			$(this).animate(id_original_css,1500);
			
			//de animate lines
			$('.hrzt-bar').delay(10).animate({'width':'-175px', 'marginTop': '-23px'},500);
    		$('.hrzt-bar2').delay(20).animate({'width':'-175px', 'marginTop': '-185px'},500);
    		$('.hrzt-bar3').delay(25).animate({'width':'-175px', 'marginTop': '-340px'},500);
    		$('.hrzt-bar4').delay(28).animate({'width':'-175px', 'marginTop': '-490px'},500);
    		
    		
    		//de animate blocks
    		$("#secondBlockElement1").show();
        	$("#secondBlockElement1").show();
        			$("#secondBlockElement1").animate({
        			width: "160",
        			opacity: 60,
        			marginLeft: "0.0in",
        			fontSize: "1em",
        			borderWidth: "0px"
        			}, 500);
        	$("#secondBlockElement1").fadeOut("fast");
        	
        	$("#secondBlockElement2").show();
        	$("#secondBlockElement2").animate({
        			width: "160",
        			opacity: 60,
        			marginLeft: "0.0in",
        			fontSize: "1em",
        			borderWidth: "0px"
        			}, 500);
        	$("#secondBlockElement2").fadeOut("fast");
        	
        	$("#secondBlockElement3").show();
        	$("#secondBlockElement3").animate({
        			width: "160",
        			opacity: 60,
        			marginLeft: "0.0in",
        			fontSize: "1em",
        			borderWidth: "0px"
        			}, 500);
        	$("#secondBlockElement3").fadeOut("fast");
        	
        	
        	$("#secondBlockElement4").show();
        	$("#secondBlockElement4").animate({
        			width: "160",
        			opacity: 60,
        			marginLeft: "0.0in",
        			fontSize: "1em",
        			borderWidth: "0px"
        	},500);
        	$("#secondBlockElement4").fadeOut("fast");


		}else{
			//Expand to desired css
			$(this).animate({
					width: "100%",
			        opacity: 60,
			        marginLeft: "0.5in",
				    borderWidth: "5px"},500);
				    
				    
				    //animate lines
					$('.hrzt-bar').delay(10).animate({'width':'112px', 'marginTop': '-23px'},1000);
    				$('.hrzt-bar2').delay(20).animate({'width':'112px', 'marginTop': '185px'},1000);
    				$('.hrzt-bar3').delay(25).animate({'width':'112px', 'marginTop': '340px'},1000);
    				$('.hrzt-bar4').delay(28).animate({'width':'112px', 'marginTop': '490px'},1000);
    				
    				
    				//animate blocks
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
			
			
			     if(++clickCounter2 % 2 == 1){
					$("#secondBlockElement1").click(function() {
					$('.hrzt-bar5').animate({'width':'112px', 'marginTop': '-23px'},1000);
					});
							}
					else{
    				$('.hrzt-bar5').animate({'width':'-112px', 'marginTop': '-185px'},500);
							}
    
		}
	});
	
}
//Loads everything when DOM is fully loaded
$(document).ready(function(){
	initialize();
});
