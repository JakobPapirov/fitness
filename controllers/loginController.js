const login = (request, res) => {

	res.render('login', { stuff: 
		{ lang: 'login', site: 'Fitness',
		title: 'login' }
	});
}

module.exports = {
	login,
}