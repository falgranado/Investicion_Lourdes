/**
 * @author Joseph Ocasio
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
var clickCounter8 = 0;
var clickCounter9 = 0;
var clickCounter10=0;
var clickCounter11=0;
var clickCounter12=0;
var clickCounter13=0;
var clickCounter14=0;
var clickCounter15=0;
var clickCounter16=0;
var clickCounter17=0;
var clickCounter18=0;
var clickCounter19=0;
var clickCounter20=0;
var clickCounter21=0;
var clickCounter22=0;
var clickCounter23=0;
var clickCounter24=0;
var clickCounter25=0;
var clickCounter26=0;
var clickCounter27=0;
var clickCounter28=0;
var clickCounter29=0;
var clickCounter30=0;
var clickCounter31=0;


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
		 $("#dfx_methods_block").hide();
		 $("#customers_block").hide();
		 $("#requirements_block").hide();
		 $("#production_specifications_block").hide();
		 $("#production_specifications_box_block").hide();
		 $("#other_descriptive_block").hide();
		 $("#other_descriptive_box_block").hide();
		 $("#risk_identification_block").hide();
		 $("#risk_control_block").hide();
		 $("#risk_monitoring_block").hide();
		 $("#risk_analysis_block").hide();
		 $("#process_validation_block").hide();
		 $("#retrospective_block").hide();
		 $("#prospective_block").hide();
		 $("#conditions_process_block").hide();
		 $("#design_transfer_block").hide();
		 $("#process_validation_box_block").hide();
		 $("#market_preparation_block").hide();
		 $("#patent_review_block").hide();
		 $("#regulatory_strategy_block").hide();
		 $("#reimbursement_strategy_block").hide();
		 $("#production_branding_block").hide();
		 $("#sales_training_block").hide();
		 $("#physician_training_block").hide();
		 $("#post_surveillance_block").hide();
		 $("#clinical_validation_block").hide();
		 $("#quality_audits_block").hide();
		 $("#product_cintinuous_block").hide();
		 $("#process_cintinuous_block").hide();
		 $(".post-launch-vrtcl").hide();
		 $(".post-launch-hrzt").hide();
	 	 $(".post-launch-hrzt2").hide();
	     $(".post-launch-vrtcl2").hide();
		 $(".post-launch-vrtcl3").hide();
	     $(".post-launch-vrtcl4").hide();
	     $(".post-launch-vrtcl5").hide();
		 $(".post-launch-vrtcl6").hide();
		 $(".post-launch-vrtcl7").hide();
		 $(".post-launch-vrtcl8").hide();
		 $(".post-launch-vrtcl9").hide();
		 $(".post-launch-vrtcl10").hide();
		 $(".post-launch-vrtcl11").hide();
		 $(".post-launch-vrtcl12").hide();
		 $(".post-launch-vrtcl13").hide();
		 $("#medical_device_records_block").hide();
      	 $("#design_history_file_block").hide();
      	 $("#device_master_record_block").hide();
      	 $("#device_history_records_block").hide();
      	 $("#technical_device_documentation_file_block").hide();
      	 $("#cdrh_block").hide();
		 $("#clasification_generic_block").hide();
		 $("#medical_specialties_block").hide();
		 $("#medical_specialties_box_block").hide();
		 $("#classI_block").hide('slow');
		 $("#classII_block").hide();
		 $("#classIII_block").hide();
		 $("#intended_use_block").hide();
		 $("#indication_use_block").hide();
		 $("#risk_based_block").hide();
		 $("#gmpqs_block").hide();
		 $("#reserved_device_block").hide();
		 $("#n510k_block").hide('slow');
		 $("#limitations_device_block").hide();
		 $("#classIII_devices_block").hide();
		 $("#special_controls_block").hide();
		 $("#special_controls_box_block").hide();
		 $("#regulatory_classes_block").hide();
		 $("#hde_block").hide();
		 $("#pma_block").hide();
		 $("#n510_block").hide();
		 $("#traditional_pma_block").hide();
		 $("#modular_pma_block").hide();
		 $("#streamlined_pma_block").hide();
		 $("#traditional510_block").hide();
		 $("#abbreviated510_block").hide();
		 $("#special510_block").hide();
		 $("#substancial_equivalence_block").hide();
		 $("#general_controls_box_block").hide();
		 $("#submission_types_block").hide();
		 $("#general_controls_block").hide();
		 $("#gmp_block").hide();
		 $("#device_standards_block").hide();
		 $("#test_standards_block").hide();
		 $("#material_standards_block").hide();
		 $("#procedure_standards_block").hide();
		 $("#organizations_block").hide();
		 $("#schematics_block").hide();
		 $("#laboratory_block").hide();
		 $("#result_block").hide();
		 $("#org_box_block").hide();
		 $("#schem_box_block").hide();
		 $("#test_box_block").hide();
		 $("#material_box_block").hide();
		 $("#utility_patents_block").hide();
		 $("#design_patents_block").hide();
		 $("#patent_qualifications_block").hide();
		 $("#usefulness_block").hide();
		 $("#novelty_block").hide();
		 $("#no_block").hide();
		 $("#improvement_block").hide();
		 $("#design_block").hide();
		 $("#patentable_block").hide();
		 $("#patents_block").hide();
		 $("#process_method_block").hide();
		 $("#machine_block").hide();
		 $("#composition_block").hide();
		 $("#article_block").hide();


		 																				$("#design_controls_block").hide();

		 
		 

		 
		 
		 
		 //box
		 $("#performance_characteristics_block").hide();
		 $("#performance_characteristics_box_block").hide();
		 $("#product_characteristics_block").hide();
		 $("#product_characteristics_box_block").hide();
		 $("#market_requirements_block").hide();
		 $("#market_requirements_box_block").hide();
		 $("#regulatory_quality_block").hide();
		 $("#regulatory_quality_box_block").hide();

		 $("#finished_design_outputs_block").hide();
		 $("#design_evaluation_block").hide();
		 $("#resolution_concerns_block").hide();
		 $("#corrective_actions_block").hide();
		 
		 $("#design_verification_box_block").hide();
		 
		 $("#human_factors_block").hide();
		 
		 $("#design_validation_box_block").hide();











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
			clickCounter17=0;
			clickCounter18=0;
			clickCounter19=0;
			clickCounter20=0;
			clickCounter21=0;
			clickCounter22=0;
			clickCounter23=0;
			clickCounter24=0;
			clickCounter25=0;
			clickCounter26=0;
			clickCounter27=0;
			clickCounter28=0;
			clickCounter29=0;
			clickCounter30=0;
			clickCounter31=0;

    		
    		
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
			$(".pdp-vrtcl").hide('slow');
			$(".pdp-vrtcl2").hide('slow');
			$(".pdp-vrtcl3").hide('slow');
			$(".pdp-vrtcl4").hide('slow');
			$(".pdp-vrtcl5").hide('slow');
			$(".pdp-vrtcl6").hide('slow');
			$(".pdp-vrtcl7").hide('slow');
			$(".pdp-vrtcl8").hide('slow');
			$(".pdp-vrtcl9").hide('slow');
			$(".pdp-vrtcl10").hide('slow');
			$("#dfx_methods_block").hide('slow');
			$(".design-process-hrzt").hide('slow');
			$(".design-process-vrtcl").hide('slow');
			$(".design-process-hrzt2").hide('slow');
			$(".design-vrtcl").hide('slow');
			$(".design-vrtcl2").hide('slow');
			$(".design-vrtcl3").hide('slow');
			$(".design-vrtcl4").hide('slow');
			$(".design-vrtcl5").hide('slow');
			$(".design-vrtcl6").hide('slow');
			$(".design-vrtcl7").hide('slow');
			$(".dfx-vrtcl").hide('slow');
			$(".dfx-hrzt").hide('slow');
			$("#requirements_block").hide('slow');
			$(".requirements-vrtcl").hide('slow');
			$(".requirements-hrzt").hide('slow');
			$("#performance_characteristics_block").hide('slow');
		 	$("#performance_characteristics_box_block").hide('slow');
		 	$("#product_characteristics_block").hide('slow');
		 	$("#product_characteristics_box_block").hide('slow');
		 	$("#market_requirements_block").hide('slow');
		 	$("#market_requirements_box_block").hide('slow');
		 	$("#regulatory_quality_block").hide('slow');
		 	$("#regulatory_quality_box_block").hide('slow');
		 	$(".design-inputs-hrzt").hide('slow');
			$(".design-inputs-vrtcl").hide('slow');
			$(".design-inputs-hrzt2").hide('slow');
			$(".design-inputs-hrzt3").hide('slow');
			$(".design-inputs-hrzt4").hide('slow');
			$("#finished_design_outputs_block").hide('slow');
			$(".design-outputs-vrtcl").hide('slow');
			$("#production_specifications_block").hide('slow');
			$("#production_specifications_box_block").hide('slow');
			$("#other_descriptive_block").hide('slow');
			$("#other_descriptive_box_block").hide('slow');
			$("#design_evaluation_block").hide('slow');
		 	$("#resolution_concerns_block").hide('slow');
		 	$("#corrective_actions_block").hide('slow');
		 	$("#design_verification_box_block").hide('slow');
			$("#human_factors_block").hide('slow');
			$("#design_validation_box_block").hide('slow');
			$(".design-verification-hrzt").hide('slow');
			$(".design-verification-vrtcl").hide('slow');
			$(".design-verification-hrzt2").hide('slow');
			$(".design-review-hrzt").hide('slow');
			$(".design-review-vrtcl").hide('slow');
			$(".design-review-hrzt2").hide('slow');
			$(".design-review-hrzt3").hide('slow');
			$(".design-review-hrzt4").hide('slow');
			$(".design-outputs-vrtcl").hide('slow');
			$(".design-outputs-vrtcl2").hide('slow');
			$(".design-outputs-hrzt2").hide('slow');
			$(".design-outputs-hrzt3").hide('slow');
			$(".design-outputs-hrzt").hide('slow');
			$("#risk_identification_block").hide('slow');
		 	$("#risk_control_block").hide('slow');
		 	$("#risk_monitoring_block").hide('slow');
		 	$("#risk_analysis_block").hide('slow');
		 	$('.risk-management-hrzt').hide('slow');
			$('.risk-management-hrzt2').hide('slow');
			$('.risk-management-hrzt3').hide('slow');
			$('.risk-management-hrzt4').hide('slow');
			$('.risk-management-hrzt5').hide('slow');
			$('.risk-management-vrtcl').hide('slow');
			$(".production-planning-hrzt").hide('slow');
			$(".production-planning-vrtcl").hide('slow');
			$(".production-planning-hrzt2").hide('slow');
			$(".production-planning-hrzt3").hide('slow');
			$(".production-planning-hrzt4").hide('slow');
			$(".production-planning-hrzt5").hide('slow');
			$(".production-planning-hrzt6").hide('slow');
			$("#process_validation_block").hide('slow');
			$("#retrospective_block").hide('slow');
			$("#prospective_block").hide('slow');
			$("#conditions_process_block").hide('slow');
			$("#design_transfer_block").hide('slow');
			$("#process_validation_box_block").hide('slow');
			$("#market_preparation_block").hide('slow');
			$("#patent_review_block").hide('slow');
			$("#regulatory_strategy_block").hide('slow');
			$("#reimbursement_strategy_block").hide('slow');
			$("#production_branding_block").hide('slow');
			$("#sales_training_block").hide('slow');
			$("#physician_training_block").hide('slow');
			$("#post_surveillance_block").hide('slow');
			$("#clinical_validation_block").hide('slow');
			$("#quality_audits_block").hide('slow');
			$("#product_cintinuous_block").hide('slow');
			$("#process_cintinuous_block").hide('slow');
			$(".post-launch-vrtcl").hide('slow');
			$(".post-launch-hrzt").hide('slow');
			$(".post-launch-hrzt2").hide('slow');
			$(".post-launch-vrtcl2").hide('slow');
			$(".post-launch-vrtcl3").hide('slow');
			$(".post-launch-vrtcl4").hide('slow');
			$(".post-launch-vrtcl5").hide('slow');
			$(".post-launch-vrtcl6").hide('slow');
			$(".post-launch-vrtcl7").hide('slow');
			$(".post-launch-vrtcl8").hide('slow');
			$(".post-launch-vrtcl9").hide('slow');
			$(".post-launch-vrtcl10").hide('slow');
			$(".post-launch-vrtcl11").hide('slow');
			$(".post-launch-vrtcl12").hide('slow');
			$(".post-launch-vrtcl13").hide('slow');
			$('.medical-device-hrzt').hide('slow');
      	    $('.medical-device-hrzt2').hide('slow');
      	    $('.medical-device-vrtcl').hide('slow');
      	    $('.medical-device-hrzt3').hide('slow');
      		$('.medical-device-vrtcl2').hide('slow');
      		$('.medical-device-vrtcl3').hide('slow');
      		$('.medical-device-vrtcl4').hide('slow');
      		$('.medical-device-vrtcl5').hide('slow');
      		$("#medical_device_records_block").hide('slow');
      		$("#design_history_file_block").hide('slow');
      		$("#device_master_record_block").hide('slow');
      		$("#device_history_records_block").hide('slow');
      		$("#technical_device_documentation_file_block").hide('slow');
      		$("#cdrh_block").hide('slow');
			$("#clasification_generic_block").hide('slow');
			$("#medical_specialties_block").hide('slow');
			$("#medical_specialties_box_block").hide('slow');
			$("#classI_block").hide('slow');
			$("#classII_block").hide('slow');
			$("#classIII_block").hide('slow');
			$("#intended_use_block").hide('slow');
			$("#indication_use_block").hide('slow');
			$("#risk_based_block").hide('slow');
			$("#gmpqs_block").hide('slow');
			$("#reserved_device_block").hide('slow');
			$("#n510k_block").hide('slow');
			$("#limitations_device_block").hide('slow');
			$("#classIII_devices_block").hide('slow');
			$("#special_controls_block").hide('slow');
			$("#special_controls_box_block").hide('slow');
			$("#regulatory_classes_block").hide('slow');
			$("#hde_block").hide('slow');
			$("#pma_block").hide('slow');
			$("#n510_block").hide('slow');
			$("#traditional_pma_block").hide('slow');
			$("#modular_pma_block").hide('slow');
			$("#streamlined_pma_block").hide('slow');
			$("#traditional510_block").hide('slow');
			$("#abbreviated510_block").hide('slow');
			$("#special510_block").hide('slow');
			$("#substancial_equivalence_block").hide('slow');
			$("#general_controls_box_block").hide('slow');
			$("#submission_types_block").hide('slow');
			$("#general_controls_block").hide('slow');
			$("#gmp_block").hide('slow');
			$(".generic-vrtcl").hide('slow');
			$(".generic-hrzt").hide('slow');
			$(".generic-vrtcl2").hide('slow');
			$(".generic-hrzt2").hide('slow');
			$(".generic-vrtcl3").hide('slow');
			$(".generic-vrtcl4").hide('slow');
			$(".generic-vrtcl5").hide('slow');
			$(".generic-vrtcl6").hide('slow');
			$(".fda-hrzt").hide('slow');
			$(".regulatory-hrzt").hide('slow');
			$(".regulatory-vrtcl").hide('slow');
			$(".regulatory-hrzt2").hide('slow');
			$(".regulatory-hrzt3").hide('slow');
			$(".regulatory-hrzt4").hide('slow');
			$(".classes-hrzt").hide('slow');
			$(".classes-vrtcl").hide('slow');
			$(".classes-hrzt2").hide('slow');
			$(".classes-hrzt3").hide('slow');
			$(".classes-hrzt4").hide('slow');
			$(".classI-hrzt").hide('slow');
			$(".classI-vrtcl").hide('slow');
			$(".classI-hrzt2").hide('slow');
			$(".classI-hrzt3").hide('slow');
			$(".classII-hrzt").hide('slow');
			$(".classIII-hrzt").hide('slow');
			$(".submission-hrzt").hide('slow');
			$(".submission-vrtcl").hide('slow');
			$(".submission-hrzt2").hide('slow');
			$(".submission-hrzt3").hide('slow');
			$(".submission-hrzt4").hide('slow');
			$(".n510-hrzt").hide('slow');
			$(".n510-vrtcl").hide('slow');
			$(".n510-hrzt2").hide('slow');
			$(".n510-vrtcl2").hide('slow');
			$(".n510-vrtcl3").hide('slow');
			$(".n510-vrtcl4").hide('slow');
			$(".n510-hrzt3").hide('slow');
			$("#device_standards_block").hide('slow');
			$("#test_standards_block").hide('slow');
			$("#material_standards_block").hide('slow');
			$("#procedure_standards_block").hide('slow');
			$("#organizations_block").hide('slow');
			$("#schematics_block").hide('slow');
			$("#laboratory_block").hide('slow');
			$("#result_block").hide('slow');
			$("#org_box_block").hide('slow');
			$("#schem_box_block").hide('slow');
			$("#test_box_block").hide('slow');
			$("#material_box_block").hide('slow');
			$(".standards-hrzt").hide('slow');
			$(".standards-vrtcl").hide('slow');
			$(".standards-vrtcl2").hide('slow');
			$(".standards-vrtcl3").hide('slow');
			$(".standards-vrtcl4").hide('slow');
			$(".standards-vrtcl5").hide('slow');
			$(".standards-vrtcl6").hide('slow');
			$(".standards-vrtcl7").hide('slow');
			$(".standards-hrzt2").hide('slow');
			$("#utility_patents_block").hide('slow');
			$("#design_patents_block").hide('slow');
			$("#patent_qualifications_block").hide('slow');
			$("#usefulness_block").hide('slow');
			$("#novelty_block").hide('slow');
			$("#no_block").hide('slow');
			$("#improvement_block").hide('slow');
			$("#design_block").hide('slow');
			$("#patentable_block").hide('slow');
			$("#patents_block").hide('slow');
			$("#process_method_block").hide('slow');
			$("#machine_block").hide('slow');
			$("#composition_block").hide('slow');
			$("#article_block").hide('slow');
			$("#article_block").hide('slow');
			$(".upsto-vrtcl").hide('slow');
			$(".upsto-vrtcl2").hide('slow');
			$(".patent-hrzt").hide('slow');
			$(".patent-vrtcl").hide('slow');
			$(".patent-vrtcl2").hide('slow');
			$(".patent-vrtcl3").hide('slow');
			$(".patent-vrtcl4").hide('slow');
			$(".patent-vrtcl5").hide('slow');
			$(".patent-vrtcl6").hide('slow');
			$(".upsto-hrzt").hide('slow');
			$(".patentable-hrzt").hide('slow');
			$(".patentable-vrtcl").hide('slow');
			$(".patentable-hrzt2").hide('slow');
			$(".patentable-hrzt3").hide('slow');
			$(".patentable-hrzt4").hide('slow');
			$(".patentable-hrzt5").hide('slow');
			$(".design-control-hrzt").hide('slow');
			$(".design-control-vrtcl").hide('slow');
																				$("#design_controls_block").hide('slow');




			clickCounter7=0;
			clickCounter8=0;
			clickCounter9 = 0;
			clickCounter10=0;
			clickCounter11=0;
			clickCounter12=0;
			clickCounter13=0;
			clickCounter14=0;
			clickCounter15=0;
			clickCounter16=0;
			clickCounter17=0;
			clickCounter18=0;
			clickCounter19=0;
			clickCounter20=0;
			//when unpressed, delete borders
			$("#p_and_d_block").animate({borderStyle: 'solid', borderWidth: '0px'});






        	

		}else{
			//Expand to desired css
			$(this).animate({
					width: "1400px",
			        opacity: 60,
			        marginLeft: "0.5in",
				    borderWidth: "5px"},500);
				    
				    //animate lines
					$('.horizontal-bar').show('slow').delay(10).animate({'width':'80px'},1000);
    				$('.horizontal-bar2').show('slow').delay(20).animate({'width':'80px'},1000);
    				$('.horizontal-bar3').show('slow').delay(25).animate({'width':'80px'},1000);
    				$('.horizontal-bar4').show('slow').delay(28).animate({'width':'80px'},1000);
    				$('.medical-device-hrzt').show('slow').delay(28).animate({'width':'400px'},1000);
      				$('.medical-device-hrzt2').show('slow').delay(28).animate({'width':'20px'},1000);
      				$('.medical-device-vrtcl').show('slow').delay(28).animate({'height':'21px'},1000);
      				$('.medical-device-hrzt3').show('slow').delay(28).animate({'width':'245px'},1000);
      				$('.medical-device-vrtcl2').show('slow').delay(28).animate({'height':'21px'},1000);
      				$('.medical-device-vrtcl3').show('slow').delay(28).animate({'height':'21px'},1000);
      				$('.medical-device-vrtcl4').show('slow').delay(28).animate({'height':'21px'},1000);
      				$('.medical-device-vrtcl5').show('slow').delay(28).animate({'height':'21px'},1000);
      				$("#medical_device_records_block").show('slow').delay(28).animate({'height':'21px'},1000);
      				$("#design_history_file_block").show('slow').delay(28).animate({'height':'21px'},1000);
      				$("#device_master_record_block").show('slow').delay(28).animate({'height':'21px'},1000);
      				$("#device_history_records_block").show('slow').delay(28).animate({'height':'21px'},1000);
      				$("#technical_device_documentation_file_block").show('slow').delay(28).animate({'height':'21px'},1000);






    				
    				
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
				$('.vertical-bar-p-and-d').show('slow').animate({'height':'479px'},500);
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
				$(".pdp-vrtcl").hide('slow');
				$(".pdp-vrtcl2").hide('slow');
				$(".pdp-vrtcl3").hide('slow');
				$(".pdp-vrtcl4").hide('slow');
				$(".pdp-vrtcl5").hide('slow');
				$(".pdp-vrtcl6").hide('slow');
				$(".pdp-vrtcl7").hide('slow');
				$(".pdp-vrtcl8").hide('slow');
				$(".pdp-vrtcl9").hide('slow');
				$(".pdp-vrtcl10").hide('slow');
				$("#dfx_methods_block").hide('slow');
				$(".design-process-hrzt").hide('slow');
				$(".design-process-vrtcl").hide('slow');
				$(".design-process-hrzt2").hide('slow');
				$(".design-vrtcl").hide('slow');
				$(".design-vrtcl2").hide('slow');
				$(".design-vrtcl3").hide('slow');
				$(".design-vrtcl4").hide('slow');
				$(".design-vrtcl5").hide('slow');
				$(".design-vrtcl6").hide('slow');
				$(".design-vrtcl7").hide('slow');
				$(".dfx-vrtcl").hide('slow');
				$(".dfx-hrzt").hide('slow');
				$("#requirements_block").hide('slow');
				$(".requirements-vrtcl").hide('slow');
				$(".requirements-hrzt").hide('slow');
				$("#performance_characteristics_block").hide('slow');
		 		$("#performance_characteristics_box_block").hide('slow');
		 		$("#product_characteristics_block").hide('slow');
		 		$("#product_characteristics_box_block").hide('slow');
		 		$("#market_requirements_block").hide('slow');
		 		$("#market_requirements_box_block").hide('slow');
		 		$("#regulatory_quality_block").hide('slow');
		 		$("#regulatory_quality_box_block").hide('slow');
		 		$(".design-inputs-hrzt").hide('slow');
				$(".design-inputs-vrtcl").hide('slow');
				$(".design-inputs-hrzt2").hide('slow');
				$(".design-inputs-hrzt3").hide('slow');
				$(".design-inputs-hrzt4").hide('slow');
				$("#finished_design_outputs_block").hide('slow');
				$(".design-outputs-vrtcl").hide('slow');
				$("#production_specifications_block").hide('slow');
				$("#production_specifications_box_block").hide('slow');
				$("#other_descriptive_block").hide('slow');
				$("#other_descriptive_box_block").hide('slow');
				$("#design_evaluation_block").hide('slow');
		 		$("#resolution_concerns_block").hide('slow');
		 		$("#corrective_actions_block").hide('slow');
		 		$("#design_verification_box_block").hide('slow');
				$("#human_factors_block").hide('slow');
				$("#design_validation_box_block").hide('slow');
				$(".design-verification-hrzt").hide('slow');
				$(".design-verification-vrtcl").hide('slow');
				$(".design-verification-hrzt2").hide('slow');
				$(".design-review-hrzt").hide('slow');
				$(".design-review-vrtcl").hide('slow');
				$(".design-review-hrzt2").hide('slow');
				$(".design-review-hrzt3").hide('slow');
				$(".design-review-hrzt4").hide('slow');
				$(".design-outputs-vrtcl").hide('slow');
				$(".design-outputs-vrtcl2").hide('slow');
				$(".design-outputs-hrzt2").hide('slow');
				$(".design-outputs-hrzt3").hide('slow');
				$(".design-outputs-hrzt").hide('slow');
				$("#risk_identification_block").hide('slow');
		 		$("#risk_control_block").hide('slow');
		 		$("#risk_monitoring_block").hide('slow');
		 		$("#risk_analysis_block").hide('slow');
		 		$('.risk-management-hrzt').hide('slow');
				$('.risk-management-hrzt2').hide('slow');
				$('.risk-management-hrzt3').hide('slow');
				$('.risk-management-hrzt4').hide('slow');
				$('.risk-management-hrzt5').hide('slow');
				$('.risk-management-vrtcl').hide('slow');
				$(".production-planning-hrzt").hide('slow');
				$(".production-planning-vrtcl").hide('slow');
				$(".production-planning-hrzt2").hide('slow');
				$(".production-planning-hrzt3").hide('slow');
				$(".production-planning-hrzt4").hide('slow');
				$(".production-planning-hrzt5").hide('slow');
				$(".production-planning-hrzt6").hide('slow');
				$("#process_validation_block").hide('slow');
				$("#retrospective_block").hide('slow');
				$("#prospective_block").hide('slow');
				$("#conditions_process_block").hide('slow');
				$("#design_transfer_block").hide('slow');
				$("#process_validation_box_block").hide('slow');
				$("#market_preparation_block").hide('slow');
				$("#patent_review_block").hide('slow');
				$("#regulatory_strategy_block").hide('slow');
				$("#reimbursement_strategy_block").hide('slow');
				$("#production_branding_block").hide('slow');
				$("#sales_training_block").hide('slow');
				$("#physician_training_block").hide('slow');
				$("#post_surveillance_block").hide('slow');
				$("#clinical_validation_block").hide('slow');
				$("#quality_audits_block").hide('slow');
				$("#product_cintinuous_block").hide('slow');
				$("#process_cintinuous_block").hide('slow');
				$(".post-launch-vrtcl").hide('slow');
				$(".post-launch-hrzt").hide('slow');
				$(".post-launch-hrzt2").hide('slow');
				$(".post-launch-vrtcl2").hide('slow');
				$(".post-launch-vrtcl3").hide('slow');
				$(".post-launch-vrtcl4").hide('slow');
				$(".post-launch-vrtcl5").hide('slow');
				$(".post-launch-vrtcl6").hide('slow');
				$(".post-launch-vrtcl7").hide('slow');
				$(".post-launch-vrtcl8").hide('slow');
				$(".post-launch-vrtcl9").hide('slow');
				$(".post-launch-vrtcl10").hide('slow');
				$(".post-launch-vrtcl11").hide('slow');
				$(".post-launch-vrtcl12").hide('slow');
				$(".post-launch-vrtcl13").hide('slow');
				$(".design-control-hrzt").hide('slow');
								$(".design-control-vrtcl").hide('slow');
																												$("#design_controls_block").hide('slow');

				clickCounter6=0;
				clickCounter7=0;
				clickCounter8=0;
				clickCounter9=0;
				clickCounter10=0;
				clickCounter11=0;
				clickCounter12=0;
				clickCounter13=0;
				clickCounter14=0;
				clickCounter15=0;
				clickCounter16=0;
				clickCounter17=0;
				clickCounter18=0;
				clickCounter19=0;
				clickCounter20=0;
			}

			});
			
		$("#product_definition_process_block").click(function(){
			if(++clickCounter6 % 2 == 1) {
				$(".pdp-vrtcl").show('slow').animate({'height': '7px'});
				$(".pdp-vrtcl2").show('slow').animate({'height': '7px'});
				$(".pdp-vrtcl3").show('slow').animate({'height': '7px'});
				$(".pdp-vrtcl4").show('slow').animate({'height': '7px'});
				$(".pdp-vrtcl5").show('slow').animate({'height': '7px'});
				$(".pdp-vrtcl6").show('slow').animate({'height': '7px'});
				$(".pdp-vrtcl7").show('slow').animate({'height': '7px'});
				$(".pdp-vrtcl8").show('slow').animate({'height': '7px'});
				$(".pdp-vrtcl9").show('slow').animate({'height': '7px'});
				$(".pdp-vrtcl10").show('slow').animate({'height': '7px'});
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
				$(".pdp-tree-connector").show("slow").animate({'width': '760px'});
				$(".pdp-tree-connector-vrtcl").show("slow").animate({'height': '30px'});
				$(".pdp-tree-connector-hrzt").show("slow").animate({'width': '21px'});
				$("#product_life_cycle_block").show("slow");
				$("#business_proposals_block").show("slow");
				$(".life-cycle-hrzt").show('slow').animate({'width': '5px'});
				$(".life-cycle-hrzt2").show('slow').animate({'width': '5px'});
				$(".life-cycle-vrtcl").show('slow').animate({'height': '39px'});
				
				
			}
			else{
				$("#product_definition_process_block").animate({borderStyle: 'solid', borderWidth: '0px'});
				$(".pdp-vrtcl").hide('slow');
				$(".pdp-vrtcl2").hide('slow');
				$(".pdp-vrtcl3").hide('slow');
				$(".pdp-vrtcl4").hide('slow');
				$(".pdp-vrtcl5").hide('slow');
				$(".pdp-vrtcl6").hide('slow');
				$(".pdp-vrtcl7").hide('slow');
				$(".pdp-vrtcl8").hide('slow');
				$(".pdp-vrtcl9").hide('slow');
				$(".pdp-vrtcl10").hide('slow');
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
				$(".design-process-hrzt").show('slow').animate({'width' : '5px'}); 
				$(".design-process-vrtcl").show('slow').animate({'height' : '20px'});
				$(".design-process-hrzt2").show('slow').animate({'width' : '745px'});
				$(".design-vrtcl").show('slow').animate({'height': '8px'});
				$(".design-vrtcl2").show('slow').animate({'height': '8px'});
				$(".design-vrtcl3").show('slow').animate({'height': '8px'});
				$(".design-vrtcl4").show('slow').animate({'height': '8px'});
				$(".design-vrtcl5").show('slow').animate({'height': '8px'});
				$(".design-vrtcl6").show('slow').animate({'height': '8px'});
				$(".design-vrtcl7").show('slow').animate({'height': '8px'});
				$(".dfx-vrtcl").show('slow').animate({'height': '28px'});
				$(".dfx-hrzt").show('slow').animate({'width': '5px'});


				$("#design_development_block").show('slow');
				$("#design_inputs_block").show('slow');
				$("#design_outputs_block").show('slow');
				$("#prototype_block").show('slow');
				$("#design_review_block").show('slow');
				$("#design_verification_block").show('slow');
				$("#design_validation_block").show('slow');
				$("#dfx_methods_block").show('slow');
				
								$(".design-control-hrzt").show('slow').animate({'width': '150px'});
								$(".design-control-vrtcl").show('slow').animate({'height': '220px'});
				$("#design_controls_block").show('slow');



				


				

		

			}
			else {
				$(".design-process-hrzt").hide('slow');
				$(".design-process-vrtcl").hide('slow');
				$(".design-process-hrzt2").hide('slow');
				$(".design-vrtcl").hide('slow');
				$(".design-vrtcl2").hide('slow');
				$(".design-vrtcl3").hide('slow');
				$(".design-vrtcl4").hide('slow');
				$(".design-vrtcl5").hide('slow');
				$(".design-vrtcl6").hide('slow');
				$(".design-vrtcl7").hide('slow');
				$("#design_development_block").hide('slow');
				$("#design_inputs_block").hide('slow');
				$("#design_outputs_block").hide('slow');
				$("#prototype_block").hide('slow');
				$("#design_review_block").hide('slow');
				$("#design_verification_block").hide('slow');
				$("#design_validation_block").hide('slow');
				$("#dfx_methods_block").hide('slow');
				$(".dfx-vrtcl").hide('slow');
				$(".dfx-hrzt").hide('slow');
				$("#requirements_block").hide('slow');
				$(".requirements-vrtcl").hide('slow');
				$(".requirements-hrzt").hide('slow');
				$("#performance_characteristics_block").hide('slow');
		 		$("#performance_characteristics_box_block").hide('slow');
		 		$("#product_characteristics_block").hide('slow');
		 		$("#product_characteristics_box_block").hide('slow');
		 		$("#market_requirements_block").hide('slow');
		 		$("#market_requirements_box_block").hide('slow');
		 		$("#regulatory_quality_block").hide('slow');
		 		$("#regulatory_quality_box_block").hide('slow');
		 		$(".design-inputs-hrzt").hide('slow');
				$(".design-inputs-vrtcl").hide('slow');
				$(".design-inputs-hrzt2").hide('slow');
				$(".design-inputs-hrzt3").hide('slow');
				$(".design-inputs-hrzt4").hide('slow');
				$("#finished_design_outputs_block").hide('slow');
				$(".design-outputs-vrtcl").hide('slow');
				$("#production_specifications_block").hide('slow');
				$("#production_specifications_box_block").hide('slow');
				$("#other_descriptive_block").hide('slow');
				$("#other_descriptive_box_block").hide('slow');
				$("#design_evaluation_block").hide('slow');
		 		$("#resolution_concerns_block").hide('slow');
		 		$("#corrective_actions_block").hide('slow');
		 		$("#design_verification_box_block").hide('slow');
				$("#human_factors_block").hide('slow');
				$("#design_validation_box_block").hide('slow');
				$(".design-verification-hrzt").hide('slow');
				$(".design-verification-vrtcl").hide('slow');
				$(".design-verification-hrzt2").hide('slow');
				$(".design-review-hrzt").hide('slow');
				$(".design-review-vrtcl").hide('slow');
				$(".design-review-hrzt2").hide('slow');
				$(".design-review-hrzt3").hide('slow');
				$(".design-review-hrzt4").hide('slow');
				$(".design-outputs-vrtcl").hide('slow');
				$(".design-outputs-vrtcl2").hide('slow');
				$(".design-outputs-hrzt2").hide('slow');
				$(".design-outputs-hrzt3").hide('slow');
				$(".design-outputs-hrzt").hide('slow');
				$(".design-control-hrzt").hide('slow');
								$(".design-control-vrtcl").hide('slow');
																				$("#design_controls_block").hide('slow');

				

				clickCounter12=0;
				clickCounter13=0;
				clickCounter14=0;
				clickCounter15=0;
				clickCounter16=0;

			}
			});
			
			
		
		$("#clinical_needs_process_block").click(function() {
			if(++clickCounter8 % 2 == 1) {
				
				$("#company_block").show('slow');
		 		$("#customers_block").show('slow');
		 		$(".customers-hrzt").show('slow').animate({'width': '10px'});
		 		$(".customers-hrzt2").show('slow').animate({'width': '10px'});
		 		$(".customers-vrtcl").show('slow').animate({'height': '89px'});
		 		$("#define_needs_of_the_block").show('slow');
		 		$(".survey-vrtcl").show('slow').animate({'height': '61px'});
		 		$(".survey-hrzt").show('slow').animate({'width': '10px'});
		 		$(".survey-hrzt2").show('slow').animate({'width': '5px'});
				$(".survey-hrzt3").show('slow').animate({'width': '5px'});
				$(".survey-hrzt4").show('slow').animate({'width': '5px'});
				$("#customer_survey_block").show('slow');
		 		$("#personal_experiences_block").show('slow');
		 		$("#clinical_literature_block").show('slow');
		 		

			}
			else {
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
			}
			});
			
			
			
		$("#competencies_analysis_block").click(function() {
			if(++clickCounter9 % 2 == 1) {
				$("#vendor_block").show('slow');
		 		$(".vendor-vrtcl").show('slow').animate({'height': '18px'});
		 		$(".vendor-vrtcl2").show('slow').animate({'height': '4px'});
		 		$(".vendor-hrzt").show('slow').animate({'width': '10px'});
		 		$(".vendor-hrzt2").show('slow').animate({'width': '50px'});
			}
			else {
				$("#vendor_block").hide('slow');
		 		$(".vendor-vrtcl").hide('slow');
		 		$(".vendor-vrtcl2").hide('slow');
		 		$(".vendor-hrzt").hide('slow');
		 		$(".vendor-hrzt2").hide('slow');
			}
			});
		
		
		$("#customer_analysis_block").click(function() {
			if(++clickCounter10 % 2 == 1) {
				$("#segmentation_block").show('slow');
		 		$(".segmentation-vrtcl").show('slow').animate({'height': '15px'});
		 		$(".segmentation-vrtcl2").show('slow').animate({'height': '8px'});
		 		$(".segmentation-hrzt").show('slow').animate({'width': '10px'});
		 		$(".segmentation-hrzt2").show('slow').animate({'width': '50px'});
			}
			else {
				$("#segmentation_block").hide('slow');
		 		$(".segmentation-vrtcl").hide('slow');
		 		$(".segmentation-vrtcl2").hide('slow');
		 		$(".segmentation-hrzt").hide('slow');
		 		$(".segmentation-hrzt2").hide('slow');
			}
			});
			
	     $("#technology_analysis_block").click(function() {
			if(++clickCounter11 % 2 == 1) {
				$("#technical_block").show('slow');
		 		$(".technical-vrtcl").show('slow').animate({'height': '15px'});
		 		$(".technical-vrtcl2").show('slow').animate({'height': '8px'});
		 		$(".technical-hrzt").show('slow').animate({'width': '10px'});
		 		$(".technical-hrzt2").show('slow').animate({'width': '40px'});
			}
			else {
				$("#technical_block").hide('slow');
		 		$(".technical-vrtcl").hide('slow');
		 		$(".technical-vrtcl2").hide('slow');
		 		$(".technical-hrzt").hide('slow');
		 		$(".technical-hrzt2").hide('slow');		
			}
			});
			
			
			$("#design_inputs_block").click(function() {
			if(++clickCounter12 % 2 == 1) {
				$("#requirements_block").show('slow');
				$(".requirements-vrtcl").show('slow').animate({'height': '13px'});
				$(".requirements-hrzt").show('slow').animate({'width': '30px'});
				$(".design-inputs-hrzt").show('slow').animate({'width': '30px'});
				$(".design-inputs-vrtcl").show('slow').animate({'height': '230px'});
				$(".design-inputs-hrzt2").show('slow').animate({'width': '15px'});
				$(".design-inputs-hrzt3").show('slow').animate({'width': '15px'});
				$(".design-inputs-hrzt4").show('slow').animate({'width': '15px'});


				$("#performance_characteristics_block").show('slow');
		 		$("#performance_characteristics_box_block").show('slow');
		 		$("#product_characteristics_block").show('slow');
		 		$("#product_characteristics_box_block").show('slow');
		 		$("#market_requirements_block").show('slow');
		 		$("#market_requirements_box_block").show('slow');
		 		$("#regulatory_quality_block").show('slow');
		 		$("#regulatory_quality_box_block").show('slow');
		 		
			}
			else {
				$("#requirements_block").hide('slow');
				$(".requirements-vrtcl").hide('slow');
				$(".requirements-hrzt").hide('slow');
				$("#performance_characteristics_block").hide('slow');
		 		$("#performance_characteristics_box_block").hide('slow');
		 		$("#product_characteristics_block").hide('slow');
		 		$("#product_characteristics_box_block").hide('slow');
		 		$("#market_requirements_block").hide('slow');
		 		$("#market_requirements_box_block").hide('slow');
		 		$("#regulatory_quality_block").hide('slow');
		 		$("#regulatory_quality_box_block").hide('slow');
		 		$(".design-inputs-hrzt").hide('slow');
				$(".design-inputs-vrtcl").hide('slow');
				$(".design-inputs-hrzt2").hide('slow');
				$(".design-inputs-hrzt3").hide('slow');
				$(".design-inputs-hrzt4").hide('slow');
			}
			});
			
			
			$("#design_outputs_block").click(function() {
			if(++clickCounter13 % 2 == 1) {
				$("#finished_design_outputs_block").show('slow');
				$(".design-outputs-vrtcl").show('slow').animate({'height': '5px'});
				$(".design-outputs-vrtcl2").show('slow').animate({'height': '185px'});
				$(".design-outputs-hrzt2").show('slow').animate({'width': '10px'});
				$(".design-outputs-hrzt3").show('slow').animate({'width': '10px'});
				$(".design-outputs-hrzt").show('slow').animate({'width': '30px'});
				$("#production_specifications_block").show('slow');
				$("#production_specifications_box_block").show('slow');
				$("#other_descriptive_block").show('slow');
				$("#other_descriptive_box_block").show('slow');
				
				
			}
			else {
				$("#finished_design_outputs_block").hide('slow');
				$(".design-outputs-vrtcl").hide('slow');
				$("#production_specifications_block").hide('slow');
				$("#production_specifications_box_block").hide('slow');
				$("#other_descriptive_block").hide('slow');
				$("#other_descriptive_box_block").hide('slow');
				$(".design-outputs-vrtcl").hide('slow');
				$(".design-outputs-vrtcl2").hide('slow');
				$(".design-outputs-hrzt2").hide('slow');
				$(".design-outputs-hrzt3").hide('slow');
				$(".design-outputs-hrzt").hide('slow');
				

			}
			});
			
			$("#design_review_block").click(function() {
			if(++clickCounter14 % 2 == 1) {
				$(".design-review-hrzt").show('slow').animate({'width':'10px'});
				$(".design-review-vrtcl").show('slow').animate({'height':'90px'});
				$(".design-review-hrzt2").show('slow').animate({'width':'10px'});
				$(".design-review-hrzt3").show('slow').animate({'width':'10px'});
				$(".design-review-hrzt4").show('slow').animate({'width':'10px'});

				$("#design_evaluation_block").show('slow');
		 		$("#resolution_concerns_block").show('slow');
		 		$("#corrective_actions_block").show('slow');
			}
			else {
				$("#design_evaluation_block").hide('slow');
		 		$("#resolution_concerns_block").hide('slow');
		 		$("#corrective_actions_block").hide('slow');
		 		$(".design-review-hrzt").hide('slow');
				$(".design-review-vrtcl").hide('slow');
				$(".design-review-hrzt2").hide('slow');
				$(".design-review-hrzt3").hide('slow');
				$(".design-review-hrzt4").hide('slow');
			}
			});
			

			$("#design_verification_block").click(function() {
			if(++clickCounter15 % 2 == 1) {
				$(".design-verification-hrzt").show('slow').animate({'width': '15px'});
				$(".design-verification-vrtcl").show('slow').animate({'height': '174px'});
				$(".design-verification-hrzt2").show('slow').animate({'width': '15px'});
				$("#design_verification_box_block").show('slow');
				$("#human_factors_block").show('slow');

			}
			else {
				$("#design_verification_box_block").hide('slow');
				$("#human_factors_block").hide('slow');
				$(".design-verification-hrzt").hide('slow');
				$(".design-verification-vrtcl").hide('slow');
				$(".design-verification-hrzt2").hide('slow');
			}
			});
			
			
			$("#design_validation_block").click(function() {
			if(++clickCounter16 % 2 == 1) {
				$("#design_validation_box_block").show('slow');
				
			}
			else {
				$("#design_validation_box_block").hide('slow');
			}
			});
			
			
			$("#risk_management_process_block").click(function() {
			if(++clickCounter17 % 2 == 1) {
				$('.risk-management-hrzt').show('slow').delay(10).animate({'width':'20px'});
				$('.risk-management-hrzt2').show('slow').delay(10).animate({'width':'20px'});
				$('.risk-management-hrzt3').show('slow').delay(10).animate({'width':'20px'});
				$('.risk-management-hrzt4').show('slow').delay(10).animate({'width':'20px'});
				$('.risk-management-hrzt5').show('slow').delay(10).animate({'width':'20px'});
				$('.risk-management-vrtcl').show('slow').delay(10).animate({'height':'46px'});
				$("#risk_identification_block").show('slow');
				$("#risk_analysis_block").show('slow');
				$("#risk_control_block").show('slow');
				$("#risk_monitoring_block").show('slow');
				
			}
			else {
				$("#risk_identification_block").hide('slow');
		 		$("#risk_control_block").hide('slow');
		 		$("#risk_monitoring_block").hide('slow');
		 		$("#risk_analysis_block").hide('slow');
		 		$('.risk-management-hrzt').hide('slow');
				$('.risk-management-hrzt2').hide('slow');
				$('.risk-management-hrzt3').hide('slow');
				$('.risk-management-hrzt4').hide('slow');
				$('.risk-management-hrzt5').hide('slow');
				$('.risk-management-vrtcl').hide('slow');
			}
			});
			
			
			$("#production_planning_process_block").click(function() {
			if(++clickCounter18 % 2 == 1) {
				
				$("#process_validation_block").show('slow');
				$("#retrospective_block").show('slow');
				$("#prospective_block").show('slow');
				$("#conditions_process_block").show('slow');
				$("#design_transfer_block").show('slow');
				$("#process_validation_box_block").show('slow');
				$(".production-planning-hrzt").show('slow').animate({'width' : '4px'});
				$(".production-planning-vrtcl").show('slow').animate({'height' : '80px'});
				$(".production-planning-hrzt2").show('slow').animate({'width' : '6px'});
				$(".production-planning-hrzt3").show('slow').animate({'width' : '6px'});
				$(".production-planning-hrzt4").show('slow').animate({'width' : '6px'});
				$(".production-planning-hrzt5").show('slow').animate({'width' : '6px'});
				$(".production-planning-hrzt6").show('slow').animate({'width' : '115px'});



			}
			else {
				$(".production-planning-hrzt").hide('slow');
				$(".production-planning-vrtcl").hide('slow');
				$(".production-planning-hrzt2").hide('slow');
				$(".production-planning-hrzt3").hide('slow');
				$(".production-planning-hrzt4").hide('slow');
				$(".production-planning-hrzt5").hide('slow');
				$(".production-planning-hrzt6").hide('slow');
				$("#process_validation_block").hide('slow');
				$("#retrospective_block").hide('slow');
				$("#prospective_block").hide('slow');
				$("#conditions_process_block").hide('slow');
				$("#design_transfer_block").hide('slow');
				$("#process_validation_box_block").hide('slow');


				

				

			}
			});
			
			
			$("#post_launch_process_block").click(function() {
			if(++clickCounter19 % 2 == 1) {
				$(".post-launch-vrtcl").show('slow').animate({'height': '26px'});
				$(".post-launch-hrzt").show('slow').animate({'width': '805px'});
				$(".post-launch-hrzt2").show('slow').animate({'width': '10px'});
				$(".post-launch-vrtcl2").show('slow').animate({'height': '8px'});
				$(".post-launch-vrtcl3").show('slow').animate({'height': '8px'});
				$(".post-launch-vrtcl4").show('slow').animate({'height': '8px'});
				$(".post-launch-vrtcl5").show('slow').animate({'height': '8px'});
				$(".post-launch-vrtcl6").show('slow').animate({'height': '8px'});
				$(".post-launch-vrtcl7").show('slow').animate({'height': '8px'});
				$(".post-launch-vrtcl8").show('slow').animate({'height': '8px'});
				$(".post-launch-vrtcl9").show('slow').animate({'height': '8px'});
				$(".post-launch-vrtcl10").show('slow').animate({'height': '8px'});
				$(".post-launch-vrtcl11").show('slow').animate({'height': '8px'});
				$(".post-launch-vrtcl12").show('slow').animate({'height': '8px'});
				$(".post-launch-vrtcl13").show('slow').animate({'height': '8px'});
				$("#market_preparation_block").show('slow');
				$("#patent_review_block").show('slow');
				$("#regulatory_strategy_block").show('slow');
				$("#reimbursement_strategy_block").show('slow');
				$("#production_branding_block").show('slow');
				$("#sales_training_block").show('slow');
				$("#physician_training_block").show('slow');
				$("#post_surveillance_block").show('slow');
				$("#clinical_validation_block").show('slow');
				$("#quality_audits_block").show('slow');
				$("#product_cintinuous_block").show('slow');
				$("#process_cintinuous_block").show('slow');




			}
			else {
				$("#market_preparation_block").hide('slow');
				$("#patent_review_block").hide('slow');
				$("#regulatory_strategy_block").hide('slow');
				$("#reimbursement_strategy_block").hide('slow');
				$("#production_branding_block").hide('slow');
				$("#sales_training_block").hide('slow');
				$("#physician_training_block").hide('slow');
				$("#post_surveillance_block").hide('slow');
				$("#clinical_validation_block").hide('slow');
				$("#quality_audits_block").hide('slow');
				$("#product_cintinuous_block").hide('slow');
				$("#process_cintinuous_block").hide('slow');
				$(".post-launch-vrtcl").hide('slow');
				$(".post-launch-hrzt").hide('slow');
				$(".post-launch-hrzt2").hide('slow');
				$(".post-launch-vrtcl2").hide('slow');
				$(".post-launch-vrtcl3").hide('slow');
				$(".post-launch-vrtcl4").hide('slow');
				$(".post-launch-vrtcl5").hide('slow');
				$(".post-launch-vrtcl6").hide('slow');
				$(".post-launch-vrtcl7").hide('slow');
				$(".post-launch-vrtcl8").hide('slow');
				$(".post-launch-vrtcl9").hide('slow');
				$(".post-launch-vrtcl10").hide('slow');
				$(".post-launch-vrtcl11").hide('slow');
				$(".post-launch-vrtcl12").hide('slow');
				$(".post-launch-vrtcl13").hide('slow');






			}
			});
			
			
			$("#fda_block").click(function() {
			if(++clickCounter20 % 2 == 1) {
				$("#cdrh_block").show('slow');
				$("#clasification_generic_block").show('slow');
				$(".fda-hrzt").show('slow').animate({'width' : '300px'});
			}
			else {
				$("#cdrh_block").hide('slow');
				$("#clasification_generic_block").hide('slow');
				$("#medical_specialties_block").hide('slow');
				$("#medical_specialties_box_block").hide('slow');
				$("#regulatory_classes_block").hide('slow');
				$("#submission_types_block").hide('slow');
				$("#general_controls_block").hide('slow');
				$("#gmp_block").hide('slow');
				$("#classI_block").hide('slow');
				$("#classII_block").hide('slow');
				$("#classIII_block").hide('slow');
				$("#intended_use_block").hide('slow');
				$("#indication_use_block").hide('slow');
				$("#risk_based_block").hide('slow');
				$("#gmpqs_block").hide('slow');
				$("#reserved_device_block").hide('slow');
				$("#n510k_block").hide('slow');
				$("#limitations_device_block").hide('slow');
				$("#classIII_devices_block").hide('slow');
				$("#special_controls_block").hide('slow');
				$("#special_controls_box_block").hide('slow');
				$("#hde_block").hide('slow');
				$("#pma_block").hide('slow');
				$("#n510_block").hide('slow');
				$("#traditional_pma_block").hide('slow');
				$("#modular_pma_block").hide('slow');
				$("#streamlined_pma_block").hide('slow');
				$("#traditional510_block").hide('slow');
				$("#abbreviated510_block").hide('slow');
				$("#special510_block").hide('slow');
				$("#substancial_equivalence_block").hide('slow');
				$("#general_controls_box_block").hide('slow');
				$(".generic-vrtcl").hide('slow');
				$(".generic-hrzt").hide('slow');
				$(".generic-vrtcl2").hide('slow');
				$(".generic-hrzt2").hide('slow');
				$(".generic-vrtcl3").hide('slow');
				$(".generic-vrtcl4").hide('slow');
				$(".generic-vrtcl5").hide('slow');
				$(".generic-vrtcl6").hide('slow');
				$(".fda-hrzt").hide('slow');
				$(".regulatory-hrzt").hide('slow');
				$(".regulatory-vrtcl").hide('slow');
				$(".regulatory-hrzt2").hide('slow');
				$(".regulatory-hrzt3").hide('slow');
				$(".regulatory-hrzt4").hide('slow');
				$(".classes-hrzt").hide('slow');
				$(".classes-vrtcl").hide('slow');
				$(".classes-hrzt2").hide('slow');
				$(".classes-hrzt3").hide('slow');
				$(".classes-hrzt4").hide('slow');
				$(".classI-hrzt").hide('slow');
				$(".classI-vrtcl").hide('slow');
				$(".classI-hrzt2").hide('slow');
				$(".classI-hrzt3").hide('slow');
				$(".classII-hrzt").hide('slow');
				$(".classIII-hrzt").hide('slow');
				$(".submission-hrzt").hide('slow');
				$(".submission-vrtcl").hide('slow');
				$(".submission-hrzt2").hide('slow');
				$(".submission-hrzt3").hide('slow');
				$(".submission-hrzt4").hide('slow');
				$(".n510-hrzt").hide('slow');
				$(".n510-vrtcl").hide('slow');
				$(".n510-hrzt2").hide('slow');
				$(".n510-vrtcl2").hide('slow');
				$(".n510-vrtcl3").hide('slow');
				$(".n510-vrtcl4").hide('slow');
				$(".n510-hrzt3").hide('slow');

				clickCounter23=0;
				clickCounter22=0;
				clickCounter21=0;
				clickCounter24=0;
				
			}
			});
			
			$("#clasification_generic_block").click(function() {
			if(++clickCounter21 % 2 == 1){
				$("#medical_specialties_block").show('slow');
				$("#medical_specialties_box_block").show('slow');
				$("#regulatory_classes_block").show('slow');
				$("#submission_types_block").show('slow');
				$("#general_controls_block").show('slow');
				$("#gmp_block").show('slow');
				$(".generic-vrtcl").show('slow').animate({'height': '50px'});
				$(".generic-hrzt").show('slow').animate({'width': '75px'});
				$(".generic-vrtcl2").show('slow').animate({'height': '20px'});
				$(".generic-hrzt2").show('slow').animate({'width': '540px'});
				$(".generic-vrtcl3").show('slow').animate({'height': '20px'});
				$(".generic-vrtcl4").show('slow').animate({'height': '20px'});
				$(".generic-vrtcl5").show('slow').animate({'height': '20px'});
				$(".generic-vrtcl6").show('slow').animate({'height': '20px'});



				clickCounter22=0;
				clickCounter23=0;
				clickCounter24=0;


				
			}
			else {
				$("#medical_specialties_block").hide('slow');
				$("#medical_specialties_box_block").hide('slow');
				$("#regulatory_classes_block").hide('slow');
				$("#submission_types_block").hide('slow');
				$("#general_controls_block").hide('slow');
				$("#gmp_block").hide('slow');
				$("#classI_block").hide('slow');
				$("#classII_block").hide('slow');
				$("#classIII_block").hide('slow');
				$("#intended_use_block").hide('slow');
				$("#indication_use_block").hide('slow');
				$("#risk_based_block").hide('slow');
				$("#gmpqs_block").hide('slow');
				$("#reserved_device_block").hide('slow');
				$("#n510k_block").hide('slow');
				$("#limitations_device_block").hide('slow');
				$("#classIII_devices_block").hide('slow');
				$("#special_controls_block").hide('slow');
				$("#special_controls_box_block").hide('slow');
				$("#hde_block").hide('slow');
				$("#pma_block").hide('slow');
				$("#n510_block").hide('slow');
				$("#traditional_pma_block").hide('slow');
				$("#modular_pma_block").hide('slow');
				$("#streamlined_pma_block").hide('slow');
				$("#traditional510_block").hide('slow');
				$("#abbreviated510_block").hide('slow');
				$("#special510_block").hide('slow');
				$("#substancial_equivalence_block").hide('slow');
				$("#general_controls_box_block").hide('slow');
				$(".generic-vrtcl").hide('slow');
				$(".generic-hrzt").hide('slow');
				$(".generic-vrtcl2").hide('slow');
				$(".generic-hrzt2").hide('slow');
				$(".generic-vrtcl3").hide('slow');
				$(".generic-vrtcl4").hide('slow');
				$(".generic-vrtcl5").hide('slow');
				$(".generic-vrtcl6").hide('slow');
				$(".regulatory-hrzt").hide('slow');
				$(".regulatory-vrtcl").hide('slow');
				$(".regulatory-hrzt2").hide('slow');
				$(".regulatory-hrzt3").hide('slow');
				$(".regulatory-hrzt4").hide('slow');
				$(".classes-hrzt").hide('slow');
				$(".classes-vrtcl").hide('slow');
				$(".classes-hrzt2").hide('slow');
				$(".classes-hrzt3").hide('slow');
				$(".classes-hrzt4").hide('slow');
				$(".classI-hrzt").hide('slow');
				$(".classI-vrtcl").hide('slow');
				$(".classI-hrzt2").hide('slow');
				$(".classI-hrzt3").hide('slow');
				$(".classII-hrzt").hide('slow');
				$(".classIII-hrzt").hide('slow');
				$(".submission-hrzt").hide('slow');
				$(".submission-vrtcl").hide('slow');
				$(".submission-hrzt2").hide('slow');
				$(".submission-hrzt3").hide('slow');
				$(".submission-hrzt4").hide('slow');
				$(".n510-hrzt").hide('slow');
				$(".n510-vrtcl").hide('slow');
				$(".n510-hrzt2").hide('slow');
				$(".n510-vrtcl2").hide('slow');
				$(".n510-vrtcl3").hide('slow');
				$(".n510-vrtcl4").hide('slow');
				$(".n510-hrzt3").hide('slow');

			}
			});
			
			$("#regulatory_classes_block").click(function() {
			if(++clickCounter22 % 2 == 1) {
				$("#classI_block").show('slow');
				$("#classII_block").show('slow');
				$("#classIII_block").show('slow');
				$("#intended_use_block").show('slow');
				$("#indication_use_block").show('slow');
				$("#risk_based_block").show('slow');
				$("#gmpqs_block").show('slow');
				$("#reserved_device_block").show('slow');
				$("#n510k_block").show('slow');
				$("#limitations_device_block").show('slow');
				$("#classIII_devices_block").show('slow');
				$("#special_controls_block").show('slow');
				$("#special_controls_box_block").show('slow');
				$(".regulatory-hrzt").show('slow').animate({'width' : '30px'});
				$(".regulatory-vrtcl").show('slow').animate({'height' : '157px'});
				$(".regulatory-hrzt2").show('slow').animate({'width' : '30px'});
				$(".regulatory-hrzt3").show('slow').animate({'width' : '30px'});
				$(".regulatory-hrzt4").show('slow').animate({'width' : '30px'});
				$(".classes-hrzt").show('slow').animate({'width': '60px'});
				$(".classes-vrtcl").show('slow').animate({'height': '22px'});
				$(".classes-hrzt2").show('slow').animate({'width': '45px'});
				$(".classes-hrzt3").show('slow').animate({'width': '45px'});
				$(".classes-hrzt4").show('slow').animate({'width': '45px'});
				$(".classI-hrzt").show('slow').animate({'width' : '100px'});
				$(".classI-vrtcl").show('slow').animate({'height' : '20px'});
				$(".classI-hrzt2").show('slow').animate({'width' : '25px'});
				$(".classI-hrzt3").show('slow').animate({'width' : '200px'});
				$(".classII-hrzt").show('slow').animate({'width' : '100px'});
				$(".classIII-hrzt").show('slow').animate({'width' : '100px'});








				



				// hrzt 2 3 4 vrtcl

				
			}
			else {
				$("#classI_block").hide('slow');
				$("#classII_block").hide('slow');
				$("#classIII_block").hide('slow');
				$("#intended_use_block").hide('slow');
				$("#indication_use_block").hide('slow');
				$("#risk_based_block").hide('slow');
				$("#gmpqs_block").hide('slow');
				$("#reserved_device_block").hide('slow');
				$("#n510k_block").hide('slow');
				$("#limitations_device_block").hide('slow');
				$("#classIII_devices_block").hide('slow');
				$("#special_controls_block").hide('slow');
				$("#special_controls_box_block").hide('slow');
				$(".regulatory-hrzt").hide('slow');
				$(".regulatory-vrtcl").hide('slow');
				$(".regulatory-hrzt2").hide('slow');
				$(".regulatory-hrzt3").hide('slow');
				$(".regulatory-hrzt4").hide('slow');
				$(".classes-hrzt").hide('slow');
				$(".classes-vrtcl").hide('slow');
				$(".classes-hrzt2").hide('slow');
				$(".classes-hrzt3").hide('slow');
				$(".classes-hrzt4").hide('slow');
				$(".classI-hrzt").hide('slow');
				$(".classI-vrtcl").hide('slow');
				$(".classI-hrzt2").hide('slow');
				$(".classI-hrzt3").hide('slow');
				$(".classII-hrzt").hide('slow');
				$(".classIII-hrzt").hide('slow');
			}
			});
			
		
		
			$("#submission_types_block").click(function() {
			if(++clickCounter23 % 2 == 1){
				$("#hde_block").show('slow');
				$("#pma_block").show('slow');
				$("#n510_block").show('slow');
				$("#traditional_pma_block").show('slow');
				$("#modular_pma_block").show('slow');
				$("#streamlined_pma_block").show('slow');
				$("#traditional510_block").show('slow');
				$("#abbreviated510_block").show('slow');
				$("#special510_block").show('slow');
				$("#substancial_equivalence_block").show('slow');
				$(".submission-hrzt").show('slow').animate({'width': '20px'});
				$(".submission-vrtcl").show('slow').animate({'height': '85px'});
				$(".submission-hrzt2").show('slow').animate({'width': '20px'});
				$(".submission-hrzt3").show('slow').animate({'width': '100px'});
				$(".submission-hrzt4").show('slow').animate({'width': '20px'});
				$(".n510-hrzt").show('slow').animate({'width': '15px'});
				$(".n510-vrtcl").show('slow').animate({'height': '60px'});
				$(".n510-hrzt2").show('slow').animate({'width': '165px'});
				$(".n510-vrtcl2").show('slow').animate({'height': '15px'});
				$(".n510-vrtcl3").show('slow').animate({'height': '15px'});
				$(".n510-vrtcl4").show('slow').animate({'height': '15px'});
				$(".n510-hrzt3").show('slow').animate({'width': '40px'});



				//////////////////////////////////////////////////////////AQUI

				
				//las lineas de 510

				
			}
			else {
				$("#hde_block").hide('slow');
				$("#pma_block").hide('slow');
				$("#n510_block").hide('slow');
				$("#traditional_pma_block").hide('slow');
				$("#modular_pma_block").hide('slow');
				$("#streamlined_pma_block").hide('slow');
				$("#traditional510_block").hide('slow');
				$("#abbreviated510_block").hide('slow');
				$("#special510_block").hide('slow');
				$("#substancial_equivalence_block").hide('slow');
				
				$(".submission-hrzt").hide('slow');
				$(".submission-vrtcl").hide('slow');
				$(".submission-hrzt2").hide('slow');
				$(".submission-hrzt3").hide('slow');
				$(".submission-hrzt4").hide('slow');
				$(".n510-hrzt").hide('slow');
				$(".n510-vrtcl").hide('slow');
				$(".n510-hrzt2").hide('slow');
				$(".n510-vrtcl2").hide('slow');
				$(".n510-vrtcl3").hide('slow');
				$(".n510-vrtcl4").hide('slow');
				$(".n510-hrzt3").hide('slow');

				
			}
			});
			
			$("#general_controls_block").click(function() {
			if(++clickCounter24 % 2 == 1) {
				$("#general_controls_box_block").show('slow');
			}
			
			else {
				$("#general_controls_box_block").hide('slow');

			}
			});
			
			
	     $("#standards_div_block").click(function() {
			if(++clickCounter25 % 2 == 1) {
				$("#device_standards_block").show('slow');
				$("#test_standards_block").show('slow');
				$("#material_standards_block").show('slow');
				$("#procedure_standards_block").show('slow');
				$("#organizations_block").show('slow');

				$("#org_box_block").show('slow');
				$(".standards-hrzt").show('slow').animate({'width': '600px'});
				$(".standards-vrtcl").show('slow').animate({'height': '15px'});
				$(".standards-vrtcl2").show('slow').animate({'height': '15px'});
				$(".standards-vrtcl3").show('slow').animate({'height': '15px'});
				$(".standards-vrtcl4").show('slow').animate({'height': '15px'});
				$(".standards-vrtcl5").show('slow').animate({'height': '30px'});





			}
			
			else {
				$("#device_standards_block").hide('slow');
				$("#test_standards_block").hide('slow');
				$("#material_standards_block").hide('slow');
				$("#procedure_standards_block").hide('slow');
				$("#organizations_block").hide('slow');
				
				$("#result_block").hide('slow');
				$("#org_box_block").hide('slow');
				$("#test_box_block").hide('slow');
				$("#material_box_block").hide('slow');
				$("#schem_box_block").hide('slow');
				$("#schematics_block").hide('slow');
				$("#laboratory_block").hide('slow');
				
				$(".standards-hrzt").hide('slow');
				$(".standards-vrtcl").hide('slow');
				$(".standards-vrtcl2").hide('slow');
				$(".standards-vrtcl3").hide('slow');
				$(".standards-vrtcl4").hide('slow');
				$(".standards-vrtcl5").hide('slow');
				$(".standards-vrtcl6").hide('slow');
				$(".standards-vrtcl7").hide('slow');
				$(".standards-hrzt2").hide('slow');
				clickCounter26=0;
				clickCounter27=0;
				clickCounter28=0;
			}	
			});
			
			$("#device_standards_block").click(function(){
			if(++clickCounter26 % 2 == 1){
				$("#schematics_block").show('slow');
				$("#laboratory_block").show('slow');
				$("#schem_box_block").show('slow');
				$(".standards-hrzt2").show('slow').animate({'width': '120px'});
				$(".standards-vrtcl6").show('slow').animate({'height': '30px'});


			}
			else {
				$("#schem_box_block").hide('slow');
				$("#schematics_block").hide('slow');
				$("#laboratory_block").hide('slow');
				$(".standards-hrzt2").hide('slow');
				$(".standards-vrtcl6").hide('slow');

			}
		});
		
		$("#test_standards_block").click(function(){
			if(++clickCounter27 % 2 == 1) {
				$("#test_box_block").show('slow');
				$("#result_block").show('slow');
				$(".standards-vrtcl7").show('slow').animate({'height': '30px'});

			}
			else {
				$("#test_box_block").hide('slow');
				$("#result_block").hide('slow');
				$(".standards-vrtcl7").hide('slow');



			}
		});
		
		$("#material_standards_block").click(function(){
			if(++clickCounter28 % 2 == 1){
				$("#material_box_block").show('slow');

			}
			else {
				$("#material_box_block").hide('slow');

			}
		});
		
		
		$("#upsto_block").click(function(){
			if(++clickCounter29 % 2 == 1) {
				$("#patents_block").show('slow');
				$(".upsto-hrzt").show('slow').animate({'width': '70px'});
				

			}
			else{
				$("#utility_patents_block").hide('slow');
				$("#design_patents_block").hide('slow');
				$("#patent_qualifications_block").hide('slow');
				$("#usefulness_block").hide('slow');
				$("#novelty_block").hide('slow');
				$("#no_block").hide('slow');
				$("#improvement_block").hide('slow');
				$("#design_block").hide('slow');
				$("#patentable_block").hide('slow');
				$("#patents_block").hide('slow');
				$("#process_method_block").hide('slow');
				$("#machine_block").hide('slow');
				$("#composition_block").hide('slow');
				$("#article_block").hide('slow');
				$("#article_block").hide('slow');
				$(".upsto-vrtcl").hide('slow');
				$(".upsto-vrtcl2").hide('slow');
				$(".patent-hrzt").hide('slow');
				$(".patent-vrtcl").hide('slow');
				$(".patent-vrtcl2").hide('slow');
				$(".patent-vrtcl3").hide('slow');
				$(".patent-vrtcl4").hide('slow');
				$(".patent-vrtcl5").hide('slow');
				$(".patent-vrtcl6").hide('slow');
				$(".upsto-hrzt").hide('slow');
				$(".patentable-hrzt").hide('slow');
				$(".patentable-vrtcl").hide('slow');
				$(".patentable-hrzt2").hide('slow');
				$(".patentable-hrzt3").hide('slow');
				$(".patentable-hrzt4").hide('slow');
				$(".patentable-hrzt5").hide('slow');


				clickCounter30=0;
				clickCounter31=0;
				
			}
		});
		 
		 	$("#patents_block").click(function(){
			if(++clickCounter30 % 2 == 1) {
				$("#utility_patents_block").show('slow');
				$("#design_patents_block").show('slow');
				
				$("#patent_qualifications_block").show('slow');
				$("#usefulness_block").show('slow');
				$("#novelty_block").show('slow');
				$("#no_block").show('slow');
				$("#improvement_block").show('slow');
				$("#design_block").show('slow');
				$("#patentable_block").show('slow');
				$(".upsto-vrtcl").show('slow').animate({'height': '10px'});
				$(".upsto-vrtcl2").show('slow').animate({'height': '10px'});
				$(".patent-hrzt").show('slow').animate({'width': '510px'});
				$(".patent-vrtcl").show('slow').animate({'height': '10px'});
				$(".patent-vrtcl2").show('slow').animate({'height': '10px'});
				$(".patent-vrtcl3").show('slow').animate({'height': '10px'});
				$(".patent-vrtcl4").show('slow').animate({'height': '10px'});
				$(".patent-vrtcl5").show('slow').animate({'height': '10px'});
				$(".patent-vrtcl6").show('slow').animate({'height': '10px'});






			}
			else{
				$("#utility_patents_block").hide('slow');
				$("#design_patents_block").hide('slow');
				$("#patent_qualifications_block").hide('slow');
				$("#usefulness_block").hide('slow');
				$("#novelty_block").hide('slow');
				$("#no_block").hide('slow');
				$("#improvement_block").hide('slow');
				$("#design_block").hide('slow');
				$("#patentable_block").hide('slow');
				$("#process_method_block").hide('slow');
				$("#machine_block").hide('slow');
				$("#composition_block").hide('slow');
				$("#article_block").hide('slow');
				$(".upsto-vrtcl").hide('slow');
				$(".upsto-vrtcl2").hide('slow');
				$(".patent-hrzt").hide('slow');
				$(".patent-vrtcl").hide('slow');
				$(".patent-vrtcl2").hide('slow');
				$(".patent-vrtcl3").hide('slow');
				$(".patent-vrtcl4").hide('slow');
				$(".patent-vrtcl5").hide('slow');
				$(".patent-vrtcl6").hide('slow');
				$(".patentable-hrzt").hide('slow');
				$(".patentable-vrtcl").hide('slow');
				$(".patentable-hrzt2").hide('slow');
				$(".patentable-hrzt3").hide('slow');
				$(".patentable-hrzt4").hide('slow');
				$(".patentable-hrzt5").hide('slow');
				clickCounter31=0;
				
			}
		});
		
		$("#patentable_block").click(function(){
			if(++clickCounter31 % 2 == 1) {
				
				$("#process_method_block").show('slow');
				$("#machine_block").show('slow');
				$("#composition_block").show('slow');
				$("#article_block").show('slow');
				$(".patentable-hrzt").show('slow').animate({'width': '70px'});
				$(".patentable-vrtcl").show('slow').animate({'height': '47px'});
				$(".patentable-hrzt2").show('slow').animate({'width': '70px'});
				$(".patentable-hrzt3").show('slow').animate({'width': '70px'});
				$(".patentable-hrzt4").show('slow').animate({'width': '70px'});
				$(".patentable-hrzt5").show('slow').animate({'width': '70px'});





			}
			else{
				$("#process_method_block").hide('slow');
				$("#machine_block").hide('slow');
				$("#composition_block").hide('slow');
				$("#article_block").hide('slow');
				$(".patentable-hrzt").hide('slow');
				$(".patentable-vrtcl").hide('slow');
				$(".patentable-hrzt2").hide('slow');
				$(".patentable-hrzt3").hide('slow');
				$(".patentable-hrzt4").hide('slow');
				$(".patentable-hrzt5").hide('slow');
				
			}
		});
		// $("#product_definition_process_block").click(function(){
			// if(++clickCounter5 % 2 == 1) $('.horizontal-bar8').animate({'width':'112px'},500);
			// else $('.horizontal-bar8').animate({'width':'-112px'},500);	
		// });
					
					
					
}
//Loads everything when DOM is fully loaded
$(document).ready(function(){
	initialize();
});
