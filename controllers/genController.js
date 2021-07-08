const gen_index = (request, res) => {

	res.render('gen_index', { stuff: 
		{ lang: 'gen', 
		site: 'Fitness',
		title: 'gen' }
	});
}

module.exports = {
	gen_index,
}