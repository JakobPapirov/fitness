$(document).ready(function() {

	// 1.0 I can get the date-name of the workout session
		// Status: Working
		// Date: 2020-10-02

		// https://stackoverflow.com/questions/24998624/day-name-from-date-in-js
		// Status: Working, Proof-of-concept 
		// 2020-09-30

		// Finds the ID
		function dateIDs(month) {
			// 
			let dateIDs = $("#" + month).find(".mb-3");

			for (let i = 0; i < dateIDs.length; i++) {

				let dateID = dateIDs[i].id; // Finds the actual ID of one workout session

				// Finds the day of the week from ID
				let day = getDayName(dateID, "sv-Sv"); // Hooks to line 42
				let dayNumber = getMonthDay(dateID); // hooked into line 18
				let ordinalSuffix = ordinal(dayNumber);
				//var header = day + ", " + dayNumber + ordinalSuffix;
				$("#" + dateID).find(".workout-date").append(`${day}, ${dayNumber}${ordinalSuffix}`);

				// autoCommentMaker() Hooks into line 95
				// See line 95
				//autoCommentMaker(dateID);
			}
		}

			function getDayName(dateStr, locale) {

			    let date = new Date(dateStr);
			    //getMonthDay(dateStr);

			    return date.toLocaleDateString(locale, { weekday: 'long' });        
			}
		//console.log(`Date: ${day}`);
		
		// 1.2 Should retrive the month number (25) from datestring
			// Status: Working
			// Date: 2020-09-30
			// https://www.w3schools.com/js/js_date_methods.asp
			function getMonthDay(dateStr) {

				let date = new Date(dateStr);
				let dayNumber = date.getDate();

				return dayNumber;
			}

		// 1.3 Ordinal number
			// Status: Working
			// Date: 2020-10-01
			// https://www.reddit.com/r/learnjavascript/comments/j2uk4s/help_with_generation_of_dates_ordinal_suffix/?

			/*
			function suffix(num) {
			  //suffixes for zeroth, first, ... to ninth. replace with your language
			  const suffixes = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
			  return suffixes[num % 10];
			}

			const date = new Date;
			let result = date.toLocaleDateString("sv-Sv", {weekday: "long", day: "2-digit"}).replace(/(.*), (.*)/, "$2, $1:" + suffix( date.getDate() ));
			console.log(result);
			*/
				function ordinal(dayNumber) {
					// 

					const suffixList = [":e", ":a", ":a", ":e", ":e", ":e", ":e", ":e", ":e", ":e"];
					let num = (dayNumber % 10);
					let suffix = suffixList[ num ];
					
					return suffix;
				}

		// 1.4 Writes header
			// Re-write later to automatically find all the right classes
			// Currently I switch the .active to current month
			dateIDs("january");
			dateIDs("february");
			dateIDs("march");
			dateIDs("april");
			dateIDs("may");
			dateIDs("june");
			dateIDs("july");
			dateIDs("august");
			dateIDs("september");
			dateIDs("october");
			dateIDs("november");
			dateIDs("december");

	// 2.0 Auto-generate comment headings
		// Status: Not Working
		// Date: 21-04-20

		/*function autoCommentMaker(dateID) {
			let exercisesList = $("#" + dateID).find(".workout-list ol");

			let exercises = $(exercisesList).children("li").html();

			console.log(exercises);
		}*/

	// 3.0 Automatically change left side nav, showing weekly navigation
		/* 	I want to auto generate a new side nav depending on the month.
			It should be possible to 
		*/

		//var navWeeks = $("#nav-month-weeks");

		//var hypo = (navWeeks).child();

		//console.log(hypo);
})