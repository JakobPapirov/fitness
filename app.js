// Import standard packages
	const express = require('express');
	const morgan = require('morgan');
	const mongoose = require('mongoose');

// Import custom files
	const achieveRoutes = require('./routes/achieveRoutes');
	const blogRoutes = require('./routes/blogRoutes');
	const diaryRoutes = require('./routes/diaryRoutes');
	const genRoutes = require('./routes/genRoutes');
	const goalsRoutes = require('./routes/goalsRoutes');
	const loginRoutes = require('./routes/loginRoutes');
	const macrosRoutes = require('./routes/macrosRoutes');
	const programRoutes = require('./routes/programRoutes');
	const statsRoutes = require('./routes/statsRoutes');

// Express app
	const app = express();

// Site components
	// Runs Master component
	console.log('Running Master component.');

// Register view engine
	app.set('view engine', 'ejs'); // Requires ejs installed

// Listen for requests
	const PORT = process.env.PORT || 3000;
	app.listen(PORT, console.log(`Server is running on port ${PORT}`)); // Conf'd in /etc/nginx/sites-available/fitness-dev.jakobpapirov.se

// Middleware & statis files
	app.use(express.static('public'))
	app.use(morgan('dev')); // Requires morgan installed

// Routes (sv)
	// Landing page route
		app.get('/', (req, res) => {

			res.redirect('/sv/');
		})

		app.get('/sv/', (req, res) => {

			res.render('index', { stuff: 
				{ title: 'Startsida',
				site: 'Fitness',
				active: 'landing' }
			});
			// Can only send in one thing in the object, so have to nest the data inside the main object
		})

	// Dagbok
		app.get('/dagbok/', (req, res) => {

			res.redirect('/sv/dagbok/');
		})
		app.use('/sv/dagbok/', diaryRoutes);

	// Program
		app.get('/program/', (req, res) => {

			res.redirect('/sv/program/');
		})
		app.use('/sv/program/', programRoutes);

	// Stats
		app.get('/stats/', (req, res) => {

			res.redirect('/sv/stats/');
		})
		app.use('/sv/stats/', statsRoutes);

	// Mål
		// routing doesn't work with "mål"
		app.get('/mal/', (req, res) => {

			res.redirect('/sv/mal/');
		})
		app.use('/sv/mal/', goalsRoutes);

	// Bedrifter
		app.get('/bedrifter/', (req, res) => {

			res.redirect('/sv/bedrifter/');
		})
		app.use('/sv/bedrifter/', achieveRoutes);

	// Login
		app.get('/login/', (req, res) => {

			res.redirect('/sv/login/');
		})
		app.use('/sv/login/', loginRoutes);

	// Macros
		app.get('/macros/', (req, res) => {

			res.redirect('/sv/macros/');
		})
		app.use('/sv/macros/', macrosRoutes);

	// Blog
		app.get('/blog/', (req, res) => {

			res.redirect('/sv/blog/');
		})
		app.use('/sv/blog/', blogRoutes);

	// Generator (workouts)
		app.get('/generator/', (req, res) => {

			res.redirect('/sv/generator/');
		})
		app.use('/sv/generator/', genRoutes);

// Implement English routes later
	/*app.get('/en/', (req, res) => {

		res.render('index_en', { lang: 'Fitness', title: 'Landing page' });
	})*/

//app.use('/en/diary/', diaryRoutes);

// 404 page
// Has to be at the bottom!
app.use((req, res) => {

	res.status(404).render('404', { stuff: 
		{ title: '404',
		active: 'landing' }
	});
})