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
var clickCounter6=0;
var clickCounter7=0;

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
		 $("#risk_management_process_block").hide();
		 $("#production_planning_process_block").hide();
		 $("#post_launch_process_block").hide();
		 $("#clinical_needs_process_block").hide();
		 $("#competencies_analysis_block").hide();
		 $("#customer_analysis_block").hide();
		 $("#market_analysis_block").hide();
		 $("#technology_analysis_block").hide();
		 $("#competitive_analysis_block").hide();
		 $("#regulatory_analysis_block").hide();
		 $("#legal_analysis_block").hide();
		 $("#reimb_analysis_block").hide();
		 $("#financial_analysis_block").hide();
		 $("#product_life_cycle_block").hide();
		 $("#business_proposals_block").hide();
		 $("#company_block").hide();
		 $("#customers_block").hide();
		 $("#define_needs_of_the_block").hide();
		 $("#customer_survey_block").hide();
		 $("#personal_experiences_block").hide();
		 $("#clinical_literature_block").hide();
		 $("#vendor_block").hide();
		 $("#segmentation_block").hide();
		 $("#technical_block").hide();
		 $("#design_development_block").hide();
		 $("#design_inputs_block").hide();
		 $("#design_outputs_block").hide();
		 $("#prototype_block").hide();
		 $("#design_review_block").hide();
		 $("#design_verification_block").hide();
		 $("#design_validation_block").hide();







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

    		clickCounter2 = 0;
    		clickCounter6=0;
      		clickCounter7 = 0;


    		
    		
    		//de animate blocks and all lines
    		$("#p_and_d_block").hide('slow');
        	$("#fda_block").hide('slow');
        	$("#standards_div_block").hide('slow');
        	$("#upsto_block").hide('slow');
        	$('.horizontal-bar-p-and-d').hide('slow');
			$('.vertical-bar-p-and-d').hide('slow');
			$("#product_definition_process_block").hide('slow');
			$("#design_process_block").hide('slow');
			$("#risk_management_process_block").hide('slow');
 			$("#production_planning_process_block").hide('slow');
		    $("#post_launch_process_block").hide('slow');		
		    $('.connector-pdp').delay(28).hide('slow');
		   	$('.connector-dp').delay(28).hide('slow');
		    $('.connector-rmm').delay(28).hide('slow');
		    $('.connector-ppp').delay(28).hide('slow');
		    $('.connector-milp').delay(28).hide('slow');
			$("#clinical_needs_process_block").hide('slow');
			$('.pdp-tree-connector').delay(28).hide('slow');
			$("#clinical_needs_process_block").hide('slow');
			$("#competencies_analysis_block").hide('slow');
			$("#customer_analysis_block").hide('slow');
			$("#market_analysis_block").hide('slow');
			$("#technology_analysis_block").hide('slow');
			$("#competitive_analysis_block").hide('slow');
			$("#regulatory_analysis_block").hide('slow');
			$("#legal_analysis_block").hide('slow');
			$("#reimb_analysis_block").hide('slow');
			$("#financial_analysis_block").hide('slow');

			$(".pdp-tree-connector-vrtcl").hide('slow');
			$(".pdp-tree-connector-hrzt").hide('slow');
			
			$(".life-cycle-hrzt").hide('slow');
			$(".life-cycle-hrzt2").hide('slow');
			$(".life-cycle-vrtcl").hide('slow');
			$("#product_life_cycle_block").hide('slow');
		 	$("#business_proposals_block").hide('slow');
			$("#company_block").hide('slow');
		 	$("#customers_block").hide('slow');
		 	$(".customers-hrzt").hide('slow');
		 	$(".customers-hrzt2").hide('slow');
		 	$(".customers-vrtcl").hide('slow');
		 	$("#define_needs_of_the_block").hide('slow');
		 	$(".survey-vrtcl").hide('slow');
		 	$(".survey-hrzt").hide('slow');
		 	$(".survey-hrzt2").hide('slow');
			$(".survey-hrzt3").hide('slow');
			$(".survey-hrzt4").hide('slow');
		 	$("#customer_survey_block").hide('slow');
			$("#personal_experiences_block").hide('slow');
		 	$("#clinical_literature_block").hide('slow');
		 	$("#vendor_block").hide('slow');
		 	$(".vendor-vrtcl").hide('slow');
		 	$(".vendor-vrtcl2").hide('slow');
		 	$(".vendor-hrzt").hide('slow');
		 	$(".vendor-hrzt2").hide('slow');
		 	$("#segmentation_block").hide('slow');
		 	$(".segmentation-vrtcl").hide('slow');
		 	$(".segmentation-vrtcl2").hide('slow');
		 	$(".segmentation-hrzt").hide('slow');
		 	$(".segmentation-hrzt2").hide('slow');
		 	$("#technical_block").hide('slow');
		 	$(".technical-vrtcl").hide('slow');
		 	$(".technical-vrtcl2").hide('slow');
		 	$(".technical-hrzt").hide('slow');
		 	$(".technical-hrzt2").hide('slow');
			$("#design_development_block").hide('slow');
			$("#design_inputs_block").hide('slow');
			$("#design_outputs_block").hide('slow');
			$("#prototype_block").hide('slow');
			$("#design_review_block").hide('slow');
			$("#design_verification_block").hide('slow');
			$("#design_validation_block").hide('slow');
			//when unpressed, delete borders
			$("#p_and_d_block").animate({borderStyle: 'solid', borderWidth: '0px'});






        	

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
				$("#p_and_d_block").animate({borderStyle: 'solid', borderWidth: '5px'});
				$('.vertical-bar-p-and-d').show('slow').animate({'height':'439px'},500);
				$('.horizontal-bar-p-and-d').show('slow').animate({'width':'48px'},500);
				$("#product_definition_process_block").show('slow');
        		$("#design_process_block").show('slow');
        		$("#risk_management_process_block").show('slow');
        		$("#production_planning_process_block").show('slow');
				$("#post_launch_process_block").show('slow');
				$('.connector-pdp').show('slow').animate({'width': '9px'});
				$('.connector-dp').show('slow').animate({'width': '9px'});
				$('.connector-rmm').show('slow').animate({'width': '9px'});
				$('.connector-ppp').show('slow').animate({'width': '9px'});
				$('.connector-milp').show('slow').animate({'width': '9px'});
				

        		

			}
			else 
			{
				$("#p_and_d_block").animate({borderStyle: 'solid', borderWidth: '0px'});
				$('.horizontal-bar-p-and-d').hide('slow');
				$('.vertical-bar-p-and-d').hide('slow');
				$("#product_definition_process_block").hide('slow');
				$( "#design_process_block").hide('slow');
				$("#risk_management_process_block").hide('slow');
        		$("#production_planning_process_block").hide('slow');
				$("#post_launch_process_block").hide('slow');
				$('.connector-pdp').hide('slow');
				$('.connector-dp').hide('slow');
				$('.connector-rmm').hide('slow');
				$('.connector-ppp').hide('slow');
				$('.connector-milp').hide('slow');
				
				$("#clinical_needs_process_block").hide('slow');
				$("#competencies_analysis_block").hide('slow');
				$("#customer_analysis_block").hide('slow');
				$("#market_analysis_block").hide('slow');
				$("#technology_analysis_block").hide('slow');
				$("#competitive_analysis_block").hide('slow');
				$("#regulatory_analysis_block").hide('slow');
				$("#legal_analysis_block").hide('slow');
				$("#reimb_analysis_block").hide('slow');
				$("#financial_analysis_block").hide('slow');
				$(".pdp-tree-connector").hide('slow');
				$(".pdp-tree-connector-vrtcl").hide('slow');
				$(".pdp-tree-connector-hrzt").hide('slow');
				$(".life-cycle-hrzt").hide('slow');
				$(".life-cycle-hrzt2").hide('slow');
				$(".life-cycle-vrtcl").hide('slow');
				$("#product_life_cycle_block").hide('slow');
		 		$("#business_proposals_block").hide('slow');
		 		$("#company_block").hide('slow');
		 		$("#customers_block").hide('slow');
				$(".customers-hrzt").hide('slow');
		 		$(".customers-hrzt2").hide('slow');
		 		$(".customers-vrtcl").hide('slow');
		 		$("#define_needs_of_the_block").hide('slow');
		 		$(".survey-vrtcl").hide('slow');
		 		$(".survey-hrzt").hide('slow');
		 		$(".survey-hrzt2").hide('slow');
				$(".survey-hrzt3").hide('slow');
				$(".survey-hrzt4").hide('slow');
				$("#customer_survey_block").hide('slow');
		 		$("#personal_experiences_block").hide('slow');
		 		$("#clinical_literature_block").hide('slow');
		 		$("#vendor_block").hide('slow');
		 		$(".vendor-vrtcl").hide('slow');
		 		$(".vendor-vrtcl2").hide('slow');
		 		$(".vendor-hrzt").hide('slow');
		 		$(".vendor-hrzt2").hide('slow');
				$("#segmentation_block").hide('slow');
		 		$(".segmentation-vrtcl").hide('slow');
		 		$(".segmentation-vrtcl2").hide('slow');
		 		$(".segmentation-hrzt").hide('slow');
		 		$(".segmentation-hrzt2").hide('slow');
		 		$("#technical_block").hide('slow');
		 		$(".technical-vrtcl").hide('slow');
		 		$(".technical-vrtcl2").hide('slow');
		 		$(".technical-hrzt").hide('slow');
		 		$(".technical-hrzt2").hide('slow');
		 		$("#design_development_block").hide('slow');
				$("#design_inputs_block").hide('slow');
				$("#design_outputs_block").hide('slow');
				$("#prototype_block").hide('slow');
				$("#design_review_block").hide('slow');
				$("#design_verification_block").hide('slow');
				$("#design_validation_block").hide('slow');
				clickCounter6=0;
				clickCounter7=0;

			}

			});
			
		$("#product_definition_process_block").click(function(){
			if(++clickCounter6 % 2 == 1) {
				$("#product_definition_process_block").animate({borderStyle: 'solid', borderWidth: '5px'});
				$("#clinical_needs_process_block").show('slow');
				$("#competencies_analysis_block").show('slow');
				$("#customer_analysis_block").show('slow');
				$("#market_analysis_block").show('slow');
				$("#technology_analysis_block").show('slow');
				$("#competitive_analysis_block").show('slow');
				$("#regulatory_analysis_block").show('slow');
				$("#legal_analysis_block").show('slow');
				$("#reimb_analysis_block").show('slow');
				$("#financial_analysis_block").show('slow');
				$(".pdp-tree-connector").show("slow").animate({'width': '755px'});
				$(".pdp-tree-connector-vrtcl").show("slow").animate({'height': '30px'});
				$(".pdp-tree-connector-hrzt").show("slow").animate({'width': '21px'});
				$("#product_life_cycle_block").show("slow");
				$("#business_proposals_block").show("slow");
				$(".life-cycle-hrzt").show('slow').animate({'width': '5px'});
				$(".life-cycle-hrzt2").show('slow').animate({'width': '5px'});
				$(".life-cycle-vrtcl").show('slow').animate({'height': '39px'});
				$("#company_block").show('slow');
		 		$("#customers_block").show('slow');
		 		$(".customers-hrzt").show('slow').animate({'width': '10px'});
		 		$(".customers-hrzt2").show('slow').animate({'width': '10px'});
		 		$(".customers-vrtcl").show('slow').animate({'height': '99px'});
		 		$("#define_needs_of_the_block").show('slow');
		 		$(".survey-vrtcl").show('slow').animate({'height': '61px'});
		 		$(".survey-hrzt").show('slow').animate({'width': '10px'});
		 		$(".survey-hrzt2").show('slow').animate({'width': '5px'});
				$(".survey-hrzt3").show('slow').animate({'width': '5px'});
				$(".survey-hrzt4").show('slow').animate({'width': '5px'});
				$("#customer_survey_block").show('slow');
		 		$("#personal_experiences_block").show('slow');
		 		$("#clinical_literature_block").show('slow');
		 		$("#vendor_block").show('slow');
		 		$(".vendor-vrtcl").show('slow').animate({'height': '18px'});
		 		$(".vendor-vrtcl2").show('slow').animate({'height': '4px'});
		 		$(".vendor-hrzt").show('slow').animate({'width': '10px'});
		 		$(".vendor-hrzt2").show('slow').animate({'width': '115px'});
		 		$("#segmentation_block").show('slow');
		 		$(".segmentation-vrtcl").show('slow').animate({'height': '15px'});
		 		$(".segmentation-vrtcl2").show('slow').animate({'height': '8px'});
		 		$(".segmentation-hrzt").show('slow').animate({'width': '10px'});
		 		$(".segmentation-hrzt2").show('slow').animate({'width': '115px'});
				$("#technical_block").show('slow');
		 		$(".technical-vrtcl").show('slow').animate({'height': '15px'});
		 		$(".technical-vrtcl2").show('slow').animate({'height': '8px'});
		 		$(".technical-hrzt").show('slow').animate({'width': '10px'});
		 		$(".technical-hrzt2").show('slow').animate({'width': '40px'});
			}
			else{
				$("#product_definition_process_block").animate({borderStyle: 'solid', borderWidth: '0px'});
				$("#clinical_needs_process_block").hide('slow');
				$("#competencies_analysis_block").hide('slow');
				$("#customer_analysis_block").hide('slow');
				$("#market_analysis_block").hide('slow');
				$("#technology_analysis_block").hide('slow');
				$("#competitive_analysis_block").hide('slow');
				$("#regulatory_analysis_block").hide('slow');
				$("#legal_analysis_block").hide('slow');
				$("#reimb_analysis_block").hide('slow');
				$("#financial_analysis_block").hide('slow');
				$(".pdp-tree-connector").hide('slow');
				$(".pdp-tree-connector-vrtcl").hide('slow');
				$(".pdp-tree-connector-hrzt").hide('slow');
				$("#product_life_cycle_block").hide("slow");
				$("#business_proposals_block").hide("slow");
				$(".life-cycle-hrzt").hide('slow');
				$(".life-cycle-hrzt2").hide('slow');
				$(".life-cycle-vrtcl").hide('slow');
				$("#company_block").hide('slow');
		 		$("#customers_block").hide('slow');
				$(".customers-hrzt").hide('slow');
		 		$(".customers-hrzt2").hide('slow');
		 		$(".customers-vrtcl").hide('slow');
		 		$("#define_needs_of_the_block").hide('slow');
		 		$(".survey-vrtcl").hide('slow');
		 		$(".survey-hrzt").hide('slow');
		 		$(".survey-hrzt2").hide('slow');
				$(".survey-hrzt3").hide('slow');
				$(".survey-hrzt4").hide('slow');
				$("#customer_survey_block").hide('slow');
				$("#personal_experiences_block").hide('slow');
		 		$("#clinical_literature_block").hide('slow');
		 		$("#vendor_block").hide('slow');
		 		$(".vendor-vrtcl").hide('slow');
		 		$(".vendor-vrtcl2").hide('slow');
		 		$(".vendor-hrzt").hide('slow');
		 		$(".vendor-hrzt2").hide('slow');
		 		$("#segmentation_block").hide('slow');
		 		$(".segmentation-vrtcl").hide('slow');
		 		$(".segmentation-vrtcl2").hide('slow');
		 		$(".segmentation-hrzt").hide('slow');
		 		$(".segmentation-hrzt2").hide('slow');
		 		$("#technical_block").hide('slow');
		 		$(".technical-vrtcl").hide('slow');
		 		$(".technical-vrtcl2").hide('slow');
		 		$(".technical-hrzt").hide('slow');
		 		$(".technical-hrzt2").hide('slow');		 		 
							 		}

						});
						
		$("#design_process_block").click(function() {
			if(++clickCounter7 % 2 == 1) {
				$("#design_development_block").show('slow');
				$("#design_inputs_block").show('slow');
				$("#design_outputs_block").show('slow');
				$("#prototype_block").show('slow');
				$("#design_review_block").show('slow');
				$("#design_verification_block").show('slow');
				$("#design_validation_block").show('slow');
		

			}
			else {
				$("#design_development_block").hide('slow');
				$("#design_inputs_block").hide('slow');
				$("#design_outputs_block").hide('slow');
				$("#prototype_block").hide('slow');
				$("#design_review_block").hide('slow');
				$("#design_verification_block").hide('slow');
				$("#design_validation_block").hide('slow');
			}
			});
	     $("#fda_block").click(function() {
			if(++clickCounter3 % 2 == 1) {
				
		

			}
			else {}
			});
			
	     $("#standards_div_block").click(function() {
			if(++clickCounter4 % 2 == 1) $('.horizontal-bar7').animate({'width':'112px'},500);
			else $('.horizontal-bar7').animate({'width':'-112px'},500);	
			});
		$("#upsto_block").click(function(){
			if(++clickCounter5 % 2 == 1) $('.horizontal-bar8').animate({'width':'112px'},500);
			else $('.horizontal-bar8').animate({'width':'-112px'},500);	
		});
		
		$("#product_definition_process_block").click(function(){
			if(++clickCounter5 % 2 == 1) $('.horizontal-bar8').animate({'width':'112px'},500);
			else $('.horizontal-bar8').animate({'width':'-112px'},500);	
		});
					
					
					
}
//Loads everything when DOM is fully loaded
$(document).ready(function(){
	initialize();
});
