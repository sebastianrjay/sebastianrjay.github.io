;(function() {
	$('.navbar li').click(function(event) {
	  $('.active').removeClass('active');
	  event.currentTarget.className = 'active';
	});
})();
