$(document).ready(function() {
	$('#add').keydown(function (enter) {
		if (enter.keyCode == 13) {
			postItem();
		}
	});

	$('.items').on('click', 'p', function(e) {
		$(this).toggleClass('strike');
	}).on('dblclick', 'p', function(e) {
		$(this).remove();
	});
})

function postItem() {
	var the_text = $('#add').val();
	$('.items').append('<p class="text">' + the_text + '</p>');
}
