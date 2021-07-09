const achieve_index = (request, res) => {

	res.render('achieve_index', { stuff: 
		{ lang: 'Bedrifter', site: 'Fitness',
		title: 'Bedrifter' }
	});
}

const achieve_year = (request, res) => {

	const id = request.params.id;
	const achieveSought = 'achieve_' + id;

	// This serves the already created yearly diaries
	res.render( achieveSought, { stuff: {
		lang: 'År', title: id }
	});
}

module.exports = {
	achieve_index,
	achieve_year,
}