$(document).ready(function() {
	/*
		Re-write with modern syntax
	*/

	// 1.0 st addition to footer
	var footer = $("footer");
	footer.append('<p>Written by me, Jakob Papirov <span id="dates"></span></p>');

	// Design of the footer element
	footer.addClass('col-xl-11', 'col-md-11');
	footer.css('background-color', '#e0e0e0'); // https://www.color-hex.com/color/e0e0e0
	footer.css('color', 'white');
	footer.css('text-align', 'center');
	footer.css('min-height','120px');

	// 1.1 st addition to footer
	var dates = $("#dates");
	dates.text("2016 - 2020");

	// 2nd addition to footer | resources
	var framework = "Bootstrap 5.0 alpa";
	var icons = ['<a href="https://icons8.com/icon/" title="Icons8" target="_blank">Icons8</a>', 
				'<a href="https://fontawesome.com/icons" title="Font Awesome" target="_blank">Font Awesome</a>',
				'<a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>'];

	footer.append('<p>Framework: ' + framework + ' Icons: ' + icons[0] + ' ' + icons[1]  + ' ' +  icons[2] + '</p>');

	// 3rd addition to footer | Social media
	var youtube = '<a href="https://www.youtube.com/channel/UCHp9cddLUMXjrCOouXb1UCA" target="_blank"><img src="../../_graphics/flaticons-youtube-32.png" title="My YouTube channel" alt="My YouTube channel"></a>';
	var linkedin = '<a href="https://www.linkedin.com/in/jakobpapirov/?locale=sv_SE"><img src="../../_graphics/icons8-linkedin-32.png" title="My LinkedIn profile" alt="My LinkedIn profile"></a>';
	var twitter = '<a href="https://twitter.com/JakobPapirov"><img src="../../_graphics/icons8-twitter-32.png" title="My Twitter profile" alt="My Twitter profile"></a>';
	var instagram = '<a href="https://www.instagram.com/JakobPapirov/"><img src="../../_graphics/icons8-instagram-32.png" title="My Instagram profile" alt="My Instagram profile"></a>';
	
	var socialMedia ='<div class="row">'
					+  '<div class="col-md-3">'
					+    youtube
					+  '</div>'
					+  '<div class="col-md-3">'
					+    instagram
					+  '</div>'
					+  '<div class="col-md-3">'
					+    twitter
					+  '</div>'
					+  '<div class="col-md-3">'
					+    linkedin
					+  '</div>'
					+'</div>';
	footer.append(socialMedia);
});