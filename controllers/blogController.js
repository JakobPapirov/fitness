const blog_index = (request, res) => {

	res.render('blog_index', { stuff: 
		{ lang: 'blog', site: 'Fitness',
		title: 'blog' }
	});
}

const blog_year = (request, res) => {

	const id = request.params.id;
	const blogSought = 'blog_' + id;

	// This serves the already created yearly diaries
	res.render( blogSought, { stuff: {
		lang: 'År', title: id }
	});
}

module.exports = {
	blog_index,
	blog_year,
}