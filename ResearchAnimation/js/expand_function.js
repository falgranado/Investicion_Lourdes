function initialize() {
    var id_original_css = {
        backgroundColor: '#bca',
        width: '30px',
        border: '1px solid black',
        marginLeft: '0',
        fontSize: '1em',
        opacity: '100',
        borderWidth: '1px',
        borderHeight: '1px'
    };
    var id_expanded_css = {
        width: '100%',
        opacity: 60,
        marginLeft: '0.5in',
        borderWidth: '5px'
    };

    var counters = new Array();
    // Searches for every div that have an id attribute
    $('div').each(function () {
        if (!this.id) {} else {
            var id = this.id + '_counter';
            counters.push(id); //add id to counters array 
            counters[id] = 0; //initialize as 0 the counter of corresponding id 
            console.log(counters);//Logs the array
        }
    });
	$(function() {
	    	$( "#dialog" ).dialog();
	    });
    expand('medical_devices_block', id_expanded_css, id_original_css, 500);
    expand('p_and_d_block', id_expanded_css, id_original_css, 500,function(){
    	alert('ended');
    });

    function expand(div_block_id, expansion_class, original_class, time, callback_function) {
        console.log("entered expand");
        var id = '#' + div_block_id; //ID received by function
        counter = counters[div_block_id + '_counter']; //Associates the counter per div block respectively 

        //Original ID of style
        $(id).click(function () {
            console.log("entered expand on click");
            //If the click counter is even then animate back to original state
            $("#dialog").remove();
            if (++counter % 2 == 0) {
                console.log("entered expand if");
                $(this).animate(original_class, time, callback_function);
                console.log("animated original class");
                console.log(counters[div_block_id + '_counter']);
            } else {
                console.log("entered expand else");
                //Expand to desired css
                $(this).animate(expansion_class, time, callback_function);
                console.log("animated expand class");
                console.log(div_block_id+'='+dejcounters[div_block_id + '_counter']);
                //Reset counter on every uneven click so it wont get bigger
                counters[div_block_id + '_counter'] = 0;
            }
            console.log("exited expand");
        });
    };
}

$(document).ready(function () {
    initialize();
});