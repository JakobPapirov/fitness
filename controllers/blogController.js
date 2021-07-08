const blog_index = (request, res) => {

	res.render('blog_index', { stuff: 
		{ lang: 'blog',
		site: 'Fitness',
		title: 'blog' }
	});
}

module.exports = {
	blog_index,
}