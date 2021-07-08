const achieve_index = (request, res) => {

	res.render('achieve_index', { stuff: 
		{ lang: 'Bedrifter',
		site: 'Fitness',
		title: 'Bedrifter',
		data: {
			// Refactor to an key: vals; swim: 'Swimning'
			titles: [ 'Simning', 'Löpning', 'Cykling',
					'Skivstång', 'Hantlar', 'Strongman',
					'Tyngdlyftning', 'Styrkelyft', 'Gång' ],
			swiming: {
				title: 'Simning',
				achieve: [ 'Secret compass: simning (3/3)' ], // Secret Compass own category?
				date: [ '2018-07-12' ],
				distance: [ 2 ],
				duration: [ '1:00:00' ]
			},
			running: {
				title: 'Löpning',
				achieve: [ 'Secret compass: jogging (1/3)' ],
				date: [ '2018-03-xx' ],
				distance: [ 7 ],
				duration: [ '1:00:00' ]
			},
			walking: {
				title: 'Gång',
				achieve: [  ],
				date: [  ],
				distance: [  ],
				steps: [  ],
				duration: [  ]
			},
			cycling: {
				title: 'Cykling',
				achieve: [  ],
				date: [  ],
				distance: [  ],
				duration: [  ]
			},
			barbell: {
				title: 'Skivstång',
				achieve: [ 'Romanian deadlift', 'Romanian deadlift', 'Romanian deadlift' ],
				date: [ '2018-06-14', '2018-09-06', '2018-10-02' ],
				weight: [ 80, 80, 112 ],
				reps: [ '?', 3, '?' ],
				sets: [ 1, 1, 1 ]
			},
			dumbbell: {
				title: 'Hantlar',
				achieve: [ 'Bicep curl', 'Tricep extention (2h)', 'Tricep extention (1h)' ],
				date: [ '2018-11-06', '2018-11-29', '2018-12-30' ],
				weight: [ 20, 20, 10 ],
				reps: [ 6, 10, 3 ],
				sets: [ 1, 1, 1 ]
			},
			powerlifting: {
				title: 'Styrkelyft',
				achieve: [ 'Deadlift', 'Deadlift' ],
				date: [ '2019-??-??', '2019-??-??' ],
				weight: [ 119, 143 ]
			},
			weightlifting: {
				title: 'Tyngdlyftning',
				achieve: [ 'Snatch', 'Clean and Jerk' ],
				date: [ '2019-??-??', '2019-??-??' ],
				weight: [ 30, 40 ]
			},
			strongman: {
				title: 'Strongman',
				achieve: [  ],
				date: [  ],
				weight: [  ],
				reps: [  ],
				sets: [ ]
			}
		}
	}});
}

const achieve_year = (request, res) => {

	const id = request.params.id;
	const achieveSought = 'achieve_' + id;

	// This serves the already created yearly diaries
	res.render( achieveSought, { stuff: {
		site: 'Fitness',
		lang: 'År', 
		title: id }
	});
}

module.exports = {
	achieve_index,
	achieve_year
}