$(function(){

$("#card").flip();
  
$(window).load(function(){
  $('#headline').fadeIn('slow', function(){

  });
});
  
	$(window).resize(function(){ // On resize
    $(".mini-about").height( $(window).height() );
		$(".portfolio-list p").height( $(".portfolio-list a").height() );
	});
});
$(window).scroll(function() {
    $(".arrow-down").css({
    'opacity' : 1-(($(this).scrollTop())/300)
    });
});
$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="inputs"><input class="u-full-width" type="text" placeholder="" value="works/projectname/'+x+'.jpg" name="projectImage[]"><a href="javascript:void(0)" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});
