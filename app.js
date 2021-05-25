// Import standard packages
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// Import custom files
const diaryRoutes = require('./routes/diaryRoutes');

// Express app
const app = express();

// Register view engine
app.set('view engine', 'ejs'); // Requires ejs installed

// Listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`)); // Conf'd in /etc/nginx/sites-available/fitness-dev.jakobpapirov.se

// Middleware & statis files
app.use(express.static('public'))
app.use(morgan('dev')); // Requires morgan installed

app.get('/', (req, res) => {

	res.redirect('/sv/');
})

app.get('/sv/', (req, res) => {

	res.render('index', { stuff: 
		{ title: 'Startsida',
		active: 'landing' } 
	});
	// Can only send in one thing in the object, so have to nest the data inside the main object
})

app.use('/sv/diary/', diaryRoutes);

// Implement English routes later
	/*app.get('/en/', (req, res) => {

		res.render('index_en', { lang: 'Fitness', title: 'Landing page' });
	})*/

//app.use('/en/diary/', diaryRoutes);

// 404 page
// Has to be at the bottom!
app.use((req, res) => {

	res.status(404).render('404', { title: '404' });
})