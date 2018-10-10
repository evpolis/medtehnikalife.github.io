$(document).ready(function() {
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
  		dots: true,
  		arrows : false,
	});


	$('#search').keyup(function() {
		$('#result').html('');
		var searchField = $('#search').val();
		var expression = new RegExp(searchField, "i");
		$.getJSON('data.json', function(data) {
			$.each(data, function(key, value) {
				if(value.name.search(expression) != -1)
				{
					$('#result').append('<li><div class="result-img"><img src="'+value.image+'" /></div><div class="result-rblock"><h2>'+value.name+'</h2><span>'+value.price+'</span><span class="result-price">'+value.currency+'</span></div></li><a href="#" class="result-but">смотреть все результаты</a>');
				}
			});
		})
	}); 


	$('.js-button-campaign').click(function() { 
	
		$('.js-overlay-campaign').fadeIn();
		$('.js-overlay-campaign').addClass('disabled');
	});


	$(document).mouseup(function (e) { 
		var popup = $('.js-popup-campaign');
		if (e.target!=popup[0]&&popup.has(e.target).length === 0){
			$('.js-overlay-campaign').fadeOut();
		}
	});

	 $( function() {
	    $( "#slider-range" ).slider({
	      range: true,
	      min: 721,
	      max: 1056,
	      values: [ 721, 1056 ],
	      slide: function( event, ui ) {
	        $( "#amount" ).val(ui.values[ 0 ]);
	        $( "#amount_1" ).val(ui.values[ 1 ]);
	      }
	    });
	    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) );
	    $( "#amount_1" ).val($( "#slider-range" ).slider( "values", 1 ) );
	});

	$("input#amount").change(function(){
	  	var value1=$("input#amount").val();
	  	var value2=$("input#amount_1").val();
	      if(parseInt(value1) > parseInt(value2)){
	  		value1 = value2;
	  		$("input#amount").val(value1);
	  	}
	  	$("#slider-range").slider("values",0,value1);	
	});
	      
	  
	$("input#amount_1").change(function(){
		var value1=$("input#amount").val();
	  	var value2=$("input#amount_1").val();

	  	if(parseInt(value1) > parseInt(value2)){
	  		value2 = value1;
	  		$("input#amount_1").val(value2);
	  	}
	  	$("#slider-range").slider("values",1,value2);
	});

	jQuery('#amount, #amount_1').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
		
	});

	// $('.popup-bottom').slick({
	// 	infinite: true,
 //  		slidesToShow: 3,
 //  		slidesToScroll: 3,
	// });
		
});