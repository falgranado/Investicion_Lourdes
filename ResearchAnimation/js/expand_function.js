 
var counters = new Array();
// Searches for every div that have an id attribute
$('div').each(function(){
			if(!this.id){}else{
			var id = this.id +'_counter';
				counters.push(id);//add id to counters array 
				counters[id] = 0 ;//initialize as 0 the counter of corresponding id 
			}
			alert(counters);
			alert(counters[0] +'='+counters[id]);
		});

function expand(div_block_id,expansion_class,original_class,time,callback_function){
	var id='#'+div_block_id;//ID received by function
	counter = counters[div_block_id +'_counter']; //Associates the counter per div block respectively 
	
	//Original ID of style
	$(id).click(function(){
		//If the click counter is even then animate back to original state
		//$( "#dialog" ).remove();
		if(++counter % 2 == 0){
			$(this).animate(original _class,time);
		}else{
			//Expand to desired css
			$(this).animate(expansion_class,time);
			//Reset counter on every uneven click so it wont get bigger
			counters[div_block_id +'_counter'] = 0;
		 }
});