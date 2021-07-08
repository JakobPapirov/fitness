const macros_index = (request, res) => {

	res.render('macros_index', { stuff: 
		{ lang: 'macros', site: 'Fitness',
		title: 'macros' }
	});
}

const macros_year = (request, res) => {

	const id = request.params.id;
	const macrosSought = 'macros_' + id;

	// This serves the already created yearly diaries
	res.render( macrosSought, { stuff: {
		lang: 'År', title: id }
	});
}

module.exports = {
	macros_index,
	//macros_year,
}