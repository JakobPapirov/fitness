const diary_index = (request, res) => {

	res.render('diary_index', { stuff: 
		{ lang: 'Träningsdagbok', site: 'Fitness',
		title: 'Dagbok' }
	});
}

const diary_year = (request, res) => {

	const id = request.params.id;
	const diarySought = 'diary_' + id; // Will probaly not work; join?

	// This serves the already created yearly diaries
	res.render( diarySought, { stuff: {
		lang: 'År', title: id }
	});
}

module.exports = {
	diary_index,
	diary_year,
}