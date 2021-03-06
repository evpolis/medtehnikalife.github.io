$(document).ready(function() {
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
  		dots: true,
  		arrows : false,
	});

	$('.card-viewed-products').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
	   	{
      	breakpoint: 962,
      	settings: {
        	slidesToShow: 4,
        	slidesToScroll: 1,
        	infinite: true,
      		}
      	},
      	{
      	breakpoint: 791,
      	settings: {
        	slidesToShow: 3,
        	slidesToScroll: 1,
        	infinite: true,
      		}	
      	},
      	{
      	breakpoint: 592,
      	settings: {
        	slidesToShow: 2,
        	slidesToScroll: 1,
        	infinite: true,
      		}	
      	},
      	{
      	breakpoint: 424,
      	settings: {
        	slidesToShow: 1,
        	slidesToScroll: 1,
        	infinite: true,
      		}	
      	}
	   ]
	});

	$('.top-prod-category-center').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
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

	$(".overlay-card").height( $(document).height() );


	$('.js-button-campaign').click(function() { 
	
		$('.js-overlay-campaign').fadeIn();
		$('.js-overlay-campaign').addClass('disabled');
	});


	$(document).mouseup(function (e) { 
		var popup = $('.js-popup-campaign');
		if (e.target!=popup[0]&&popup.has(e.target).length === 0){
			$('.js-overlay-campaign').fadeOut();
		}
		return false;
	});


	$(".card-images li img").hover(function(){
		$('#main-img').attr('src',$(this).attr('src').replace('thumb/', ''));
	});
	var imgSwap = [];
	 $(".card-images li img").each(function(){
		imgUrl = this.src.replace('thumb/', '');
		imgSwap.push(imgUrl);
	});
	// $(imgSwap).preload();


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

	$('.popup-slider-nav').slick({
		infinite: true,
	   slidesToShow: 3,
	   slidesToScroll: 1,
	   // focusOnSelect: true,
	   responsive: [
	   	{
      	breakpoint: 725,
      	settings: {
        	slidesToShow: 2,
        	slidesToScroll: 2,
        	infinite: true,
      		}
      	},
      	{
      	breakpoint: 522,
      	settings: {
        	slidesToShow: 1,
        	slidesToScroll: 1,
        	infinite: true,
      		}	
      	}
	   ]
	});

	$('.up-count').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.down-count').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.product-centre').hide();
    $('.product-centre:first').show();
    $('.prod-tabs-el:first').addClass('product-activ-li');

     $('.prod-tabs-el').click(function(event) {
     	$('.prod-tabs-el').removeClass('product-activ-li');
     	$(this).addClass('product-activ-li');
     	$('.product-centre').hide();

     	var selectTab = $(this).find('a').attr("href");
     	$(selectTab).fadeIn();
     	return false;
     });

    $('.about-card').hide();
    $('.about-card:first').show();
    $('.desc-tabs-el:first').addClass('desk-link-active');

     $('.desc-tabs-el').click(function(event) {
     	$('.desc-tabs-el').removeClass('desk-link-active');
     	$(this).addClass('desk-link-active');
     	$('.about-card').hide();

     	var selectDTab = $(this).find('a').attr("href");
     	$(selectDTab).fadeIn();
     	return false;
     });

   
     $('.list-elem-tr>a').click(function(event) {
     	return false;
     });


     $(".yet-li-last").click(function () {
	   if ($(".yet-li").is(":hidden")) {
	           $(".yet-li").show();
	           $(".yet-link").hide();
	           $('.yet-li-img').addClass('rotate-marker');
	   } else {
	           $(".yet-li").hide();
	           $(".yet-link").show();
	   }
	   return false
   });
});