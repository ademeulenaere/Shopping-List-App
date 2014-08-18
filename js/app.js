$(document).ready(function() {
	function getItem() {
		$('#add').keydown(function (enter) {
			if (enter.keyCode == 13) {
				postItem();
			}
		})
	}
})
	function postItem() {
		var the_text = $('#add').val();
		var the_item = $('<div class="items"></div>').text(the_text);
	}
