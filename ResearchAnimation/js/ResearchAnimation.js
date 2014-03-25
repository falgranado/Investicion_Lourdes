/**
 * @author Joseph Ocasio and Francisco Granado
 */
var clickCounter=0;
function initialize(){
	
	expand('medical_devices_block');
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
		}else{
			//Expand to desired css
			$(this).animate({
					width: "70%",
			        opacity: 60,
			        marginLeft: "0.6in",
			        fontSize: "2em",
			        borderWidth: "10px"},500);
		}
	});
	
}
$(document).ready(function(){
	initialize();
});
