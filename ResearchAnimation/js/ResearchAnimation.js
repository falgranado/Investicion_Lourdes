/**
 * @author Joseph Ocasio and Francisco Granado
 */

//counters, consider change name
//need to take into account extremely large numbers, perhaps a reset when dealing with even numbers
var clickCounter=0;
var clickCounter2=0;
var clickCounter3=0;
var clickCounter4=0;
var clickCounter5=0;

function initialize(){
	// var counters = {};
		// var counters = new Array();
			// $('div').each(function(){
			// if(!this.id){}else{
			// var id = this.id +'counter';
				// counters.push(id);
				// counters[id] = 0 ;
			// alert(counters);
// 			
			// }
// 			
		// });
// 	
	expand('medical_devices_block');
	//@Author Joseph Ocasio
	//neccesary, so we will force that the blocks will be drawn only when the user clicks the medical devices bar
		 $( "#p_and_d_block" ).hide();
   		 $( "#fda_block" ).hide();
    	 $( "#standards_div_block" ).hide();
    	 $( "#upsto_block" ).hide();

	//popup
	    $(function() {
	    	$( "#dialog" ).dialog();
	    });
}
//Expands and contracts to desired css style
function expand(div_block_id){
	
	
	var id='#'+div_block_id;//ID received by function
	//Original ID of style
	var id_original_css=  {
		backgroundColor: '#bca',
	    width: '30px',
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
			$('.horizontal-bar').delay(10).animate({'width':'-175px', 'marginTop': '-23px'},500);
    		$('.horizontal-bar2').delay(20).animate({'width':'-175px', 'marginTop': '-185px'},500);
    		$('.horizontal-bar3').delay(25).animate({'width':'-175px', 'marginTop': '-340px'},500);
    		$('.horizontal-bar4').delay(28).animate({'width':'-175px', 'marginTop': '-490px'},500);
    		$('.horizontal-bar5').delay(25).animate({'width':'-112px'},500);
    		$('.horizontal-bar6').delay(25).animate({'width':'-112px'},500);
    		$('.horizontal-bar7').delay(25).animate({'width':'-112px'},500);
    		$('.horizontal-bar8').delay(25).animate({'width':'-112px'},500);

    		clickCounter2 = 0;

    		
    		
    		//de animate blocks
    		$("#p_and_d_block").show();
        	$("#p_and_d_block").show();
        			$("#p_and_d_block").animate({
        			width: "160",
        			opacity: 60,
        			marginLeft: "0.0in",
        			fontSize: "1em",
        			borderWidth: "0px"
        			}, 500);
        	$("#p_and_d_block").fadeOut("fast");
        	
        	$("#fda_block").show();
        	$("#fda_block").animate({
        			width: "160",
        			opacity: 60,
        			marginLeft: "0.0in",
        			fontSize: "1em",
        			borderWidth: "0px"
        			}, 500);
        	$("#fda_block").fadeOut("fast");
        	
        	$("#standards_div_block").show();
        	$("#standards_div_block").animate({
        			width: "160",
        			opacity: 60,
        			marginLeft: "0.0in",
        			fontSize: "1em",
        			borderWidth: "0px"
        			}, 500);
        	$("#standards_div_block").fadeOut("fast");
        	
        	
        	$("#upsto_block").show();
        	$("#upsto_block").animate({
        			width: "160",
        			opacity: 60,
        			marginLeft: "0.0in",
        			fontSize: "1em",
        			borderWidth: "0px"
        	},500);
        	$("#upsto_block").fadeOut("fast");


		}else{
			//Expand to desired css
			$(this).animate({
					width: "100%",
			        opacity: 60,
			        marginLeft: "0.5in",
				    borderWidth: "5px"},500);
				    
				    
				    //animate lines
					$('.horizontal-bar').delay(10).animate({'width':'112px', 'marginTop': '-23px'},1000);
    				$('.horizontal-bar2').delay(20).animate({'width':'112px', 'marginTop': '185px'},1000);
    				$('.horizontal-bar3').delay(25).animate({'width':'112px', 'marginTop': '340px'},1000);
    				$('.horizontal-bar4').delay(28).animate({'width':'112px', 'marginTop': '490px'},1000);
    				
    				//animate blocks
    				$("#p_and_d_block").show();
        			$("#p_and_d_block").animate({
        			width: "160",
        			opacity: 60,
        			marginLeft: "1.6in",
        			fontSize: "1em",
        			borderWidth: "5px"
        			}, 1500);
        
        			$("#fda_block").show();
        			$("#fda_block").animate({
        			width: "33",
        			opacity: 60,
        			marginLeft: "1.6in",
        			fontSize: "1em",
        			borderWidth: "5px"
        			}, 1500);
        	
			        $("#standards_div_block").show();
			        $("#standards_div_block").animate({
			        width: "60",
			        opacity: 60,
			        marginLeft: "1.6in",
			        fontSize: "1em",
			        borderWidth: "5px"
			        }, 1500);
        
			        $("#upsto_block").show();
			        $("#upsto_block").animate({
			        width: "50",
			        opacity: 60,
			        marginLeft: "1.6in",
			        fontSize: "1em",
			        borderWidth: "5px"
			        }, 1500);  
		}
	});
	
	//call elements that are in charge of using the counters and animating the lines when neccesary
	     $("#p_and_d_block").click(function() {
			if(++clickCounter2 % 2 == 1) $('.horizontal-bar5').animate({'width':'112px'},500);
			else $('.horizontal-bar5').animate({'width':'-112px'},500);
			});
			
	     $("#fda_block").click(function() {
			if(++clickCounter3 % 2 == 1) $('.horizontal-bar6').animate({'width':'112px'},500);
			else $('.horizontal-bar6').animate({'width':'-112px'},500);	
			});
			
	     $("#standards_div_block").click(function() {
			if(++clickCounter4 % 2 == 1) $('.horizontal-bar7').animate({'width':'112px'},500);
			else $('.horizontal-bar7').animate({'width':'-112px'},500);	
			});
		$("#upsto_block").click(function(){
			if(++clickCounter5 % 2 == 1) $('.horizontal-bar8').animate({'width':'112px'},500);
			else $('.horizontal-bar8').animate({'width':'-112px'},500);	
		});
					
					
					
}
//Loads everything when DOM is fully loaded
$(document).ready(function(){
	initialize();
});
