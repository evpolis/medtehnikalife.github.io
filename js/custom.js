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
			
});