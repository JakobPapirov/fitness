const diary_index = (request, res) => {

	res.render('index', { lang: 'Träningsdagbok', title: 'Dagbok' });		
}

const diary_year = (request, res) => {

	const id = request.params.id;
	const diarySought = 'diary_' + id; // Will probaly not work; join?

	res.render( diarySought, { lang: 'År', title: id });
}

module.exports = {
	diary_index,
	diary_year,
}