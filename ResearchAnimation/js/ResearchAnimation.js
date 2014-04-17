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
	var counters = {};
		var counters = new Array();
			$('div').each(function(){
			if(!this.id){}else{
			var id = this.id +'counter';
				counters.push(id);
				counters[id] = 0 ;
			//alert(counters);
			
			}
			
		});
	
	expand('medical_devices_block');
	//@Author Joseph Ocasio
	//neccesary, so we will force that the blocks will be drawn only when the user clicks the medical devices bar
		 $( "#p_and_d_block" ).hide();
   		 $( "#fda_block" ).hide();
    	 $( "#standards_div_block" ).hide();
    	 $( "#upsto_block" ).hide();
    	 $( "#product_definition_process_block").hide();
    	 $( "#design_process_block").hide();


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
			$('.horizontal-bar').delay(10).hide('slow');
    		$('.horizontal-bar2').delay(20).hide('slow');
    		$('.horizontal-bar3').delay(25).hide('slow');
    		$('.horizontal-bar4').delay(28).hide('slow');
    		$('.horizontal-bar5').delay(25).hide('slow');
    		$('.horizontal-bar6').delay(25).hide('slow');
    		$('.horizontal-bar7').delay(25).hide('slow');
    		$('.horizontal-bar8').delay(25).hide('slow');

    		clickCounter2 = 0;

    		
    		
    		//de animate blocks and all lines
    		$("#p_and_d_block").hide('slow');
        	$("#fda_block").hide('slow');
        	$("#standards_div_block").hide('slow');
        	$("#upsto_block").hide('slow');
        	$('.horizontal-bar-p-and-d').hide('slow');
			$('.vertical-bar-p-and-d').hide('slow');
			$("#product_definition_process_block").hide('slow');
			$("#design_process_block").hide('slow');

        	

		}else{
			//Expand to desired css
			$(this).animate({
					width: "100%",
			        opacity: 60,
			        marginLeft: "0.5in",
				    borderWidth: "5px"},500);
				    
				    //animate lines
					$('.horizontal-bar').show('slow').delay(10).animate({'width':'80px'},1000);
    				$('.horizontal-bar2').show('slow').delay(20).animate({'width':'80px'},1000);
    				$('.horizontal-bar3').show('slow').delay(25).animate({'width':'80px'},1000);
    				$('.horizontal-bar4').show('slow').delay(28).animate({'width':'80px'},1000);
    				
    				//animate blocks
    				$("#p_and_d_block").show('slow');
        			$("#p_and_d_block").animate({
        			width: "160",
        			opacity: 60,
        			marginLeft: "0.33in",
        			fontSize: "1em",
        			borderWidth: "1px"
        			}, 1500);
        
        			$("#fda_block").show('slow');
        			$("#fda_block").animate({
        			width: "33",
        			opacity: 60,
        			marginLeft: "0.33in",
        			fontSize: "1em",
        			borderWidth: "1px"
        			}, 1500);
        	
			        $("#standards_div_block").show('slow');
			        $("#standards_div_block").animate({
			        width: "60",
			        opacity: 60,
			        marginLeft: "0.33in",
			        fontSize: "1em",
        			borderWidth: "1px"
			        }, 1500);
        
			        $("#upsto_block").show('slow');
			        $("#upsto_block").animate({
			        width: "50",
			        opacity: 60,
			        marginLeft: "0.33in",
			        fontSize: "1em",
        			borderWidth: "1px"
			        }, 1500);  
		}
	});
	
	//call elements that are in charge of using the counters and animating the lines when neccesary
	     $("#p_and_d_block").click(function() {
			if(++clickCounter2 % 2 == 1) 
			{
				$('.vertical-bar-p-and-d').show('slow').animate({'height':'450px'},500);
				$('.horizontal-bar-p-and-d').show('slow').animate({'width':'48px'},500);
				$("#product_definition_process_block").show('slow');
        			$("#p_and_d_block").animate({
        			width: "160",
        			opacity: 60,
        			marginLeft: "0.33in",
        			fontSize: "1em",
        			borderWidth: "1px"
        			}, 1500);
        			
        		$("#design_process_block").show('slow');
        			$("#p_and_d_block").animate({
        			width: "160",
        			opacity: 60,
        			marginLeft: "0.33in",
        			fontSize: "1em",
        			borderWidth: "1px"
        			}, 1500);
				
			}
			else 
			{
				$('.horizontal-bar-p-and-d').hide('slow');
				$('.vertical-bar-p-and-d').hide('slow');
				$("#product_definition_process_block").hide('slow');
				$( "#design_process_block").hide('slow');


			}
			
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
