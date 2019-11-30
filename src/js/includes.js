import $ from 'jquery';

function loadIncludes(parent) {
	console.log('Função executada');
	if (!parent) parent = 'body';
	$(parent).find('[include]').each((index, element) => {
		const url = $(element).attr('include');
		$.ajax({
			url,
			success(data) {
				$(element).html(data);
				$(element).removeAttr('include');

				loadIncludes(element);
			}
		});
	});
}

loadIncludes();
