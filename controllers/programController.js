const program_index = (request, res) => {

	res.render('program_index', { stuff: 
		{ lang: 'Program', site: 'Fitness',
		title: 'Program' }
	});
}

const program_year = (request, res) => {

	const id = request.params.id;
	const programSought = 'program_' + id;

	// This serves the already created yearly diaries
	res.render( programSought, { stuff: {
		lang: 'År', title: id }
	});
}

module.exports = {
	program_index,
	program_year
}