(function ($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Fix: Flexbox min-height bug on IE.
	if (browser.name == 'ie') {

		var flexboxFixTimeoutId;

		$window.on('resize.flexbox-fix', function () {

			clearTimeout(flexboxFixTimeoutId);

			flexboxFixTimeoutId = setTimeout(function () {

				if ($wrapper.prop('scrollHeight') > $window.height())
					$wrapper.css('height', 'auto');
				else
					$wrapper.css('height', '100vh');

			}, 250);

		}).triggerHandler('resize.flexbox-fix');

	}

	// Nav.
	var $nav = $header.children('nav'),
		$nav_li = $nav.find('li');

	// Add "middle" alignment classes if we're dealing with an even number of items.
	if ($nav_li.length % 2 == 0) {

		$nav.addClass('use-middle');
		$nav_li.eq(($nav_li.length / 2)).addClass('is-middle');

	}

	// NavScrolling
	$(document).ready(function () {
		console.log("Document ready");

		// Function to show/hide resume-specific elements
		function toggleResumeElements(show) {
			var $resumeElements = $('#resume-header');
			if (show) {
				$resumeElements.removeClass('hidden');
			} else {
				$resumeElements.addClass('hidden');
			}
		}

		// Handle navigation clicks for scrolling-nav
		$('.scrolling-nav ul li a').on('click', function (e) {
			console.log("Link clicked");
			e.preventDefault();
			var targetSection = $(this).data('target');
			console.log("Target:", targetSection);
			var $targetContent = $('#' + targetSection);

			if ($targetContent.length) {
				// Hide all sections
				$('.resume-section').hide();

				// Show only the target section
				$targetContent.show();

				console.log("Scrolling to:", $targetContent.offset().top);
				$('html, body').animate({
					scrollTop: $targetContent.offset().top - 50
				}, 1000);
			}
		});


		// Main.
		var delay = 325,
			locked = false;

		// Methods.
		$main._show = function (id, initial) {

			if (!id || typeof id !== 'string') {
				console.error('Invalid article ID provided to _show function');
				return;
			}
			var $article;
			if (id && id.trim() !== '') {
				$article = $main_articles.filter('#' + id);
			} else {
				console.error('Invalid or empty article ID');
				return;
			}

			// No such article? Bail.
			if ($article.length == 0)
				return;

			// Handle lock.

			// Already locked? Speed through "show" steps w/o delays.
			if (locked || (typeof initial != 'undefined' && initial === true)) {

				// Mark as switching.
				$body.addClass('is-switching');

				// Mark as visible.
				$body.addClass('is-article-visible');

				// Deactivate all articles (just in case one's already active).
				$main_articles.removeClass('active');

				// Hide header, footer.
				$header.hide();
				$footer.hide();

				// Show main, article.
				$main.show();
				$article.show();

				// Activate article.
				$article.addClass('active');

				// Unlock.
				locked = false;

				// Unmark as switching.
				setTimeout(function () {
					$body.removeClass('is-switching');
				}, (initial ? 1000 : 0));

				return;

			}

			// Lock.
			locked = true;

			// Article already visible? Just swap articles.
			if ($body.hasClass('is-article-visible')) {

				// Deactivate current article.
				var $currentArticle = $main_articles.filter('.active');

				$currentArticle.removeClass('active');

				// Show article.
				setTimeout(function () {

					// Hide current article.
					$currentArticle.hide();

					// Show article.
					$article.show();

					// Activate article.
					setTimeout(function () {

						$article.addClass('active');

						// Window stuff.
						$window
							.scrollTop(0)
							.triggerHandler('resize.flexbox-fix');

						// Unlock.
						setTimeout(function () {
							locked = false;
						}, delay);

					}, 25);

				}, delay);

			}

			// Otherwise, handle as normal.
			else {

				// Mark as visible.
				$body
					.addClass('is-article-visible');

				// Show article.
				setTimeout(function () {

					// Hide header, footer.
					$header.hide();
					$footer.hide();

					// Show main, article.
					$main.show();
					$article.show();

					// Activate article.
					setTimeout(function () {

						$article.addClass('active');

						// Window stuff.
						$window
							.scrollTop(0)
							.triggerHandler('resize.flexbox-fix');

						// Unlock.
						setTimeout(function () {
							locked = false;
						}, delay);

					}, 25);

				}, delay);

			}

		};

		$main._hide = function (addState) {

			var $article = $main_articles.filter('.active');

			// Article not visible? Bail.
			if (!$body.hasClass('is-article-visible'))
				return;

			// Add state?
			if (typeof addState != 'undefined'
				&& addState === true)
				history.pushState(null, null, '#');

			// Handle lock.

			// Already locked? Speed through "hide" steps w/o delays.
			if (locked) {

				// Mark as switching.
				$body.addClass('is-switching');

				// Deactivate article.
				$article.removeClass('active');

				// Hide article, main.
				$article.hide();
				$main.hide();

				// Show footer, header.
				$footer.show();
				$header.show();

				// Unmark as visible.
				$body.removeClass('is-article-visible');

				// Unlock.
				locked = false;

				// Unmark as switching.
				$body.removeClass('is-switching');

				// Window stuff.
				$window
					.scrollTop(0)
					.triggerHandler('resize.flexbox-fix');

				return;

			}

			// Lock.
			locked = true;

			// Deactivate article.
			$article.removeClass('active');

			// Hide article.
			setTimeout(function () {

				// Hide article, main.
				$article.hide();
				$main.hide();

				// Show footer, header.
				$footer.show();
				$header.show();

				// Unmark as visible.
				setTimeout(function () {

					$body.removeClass('is-article-visible');

					// Window stuff.
					$window
						.scrollTop(0)
						.triggerHandler('resize.flexbox-fix');

					// Unlock.
					setTimeout(function () {
						locked = false;
					}, delay);

				}, 25);

			}, delay);


		};

		// Articles.
		$main_articles.each(function () {

			var $this = $(this);

			// Close.
			$('<div class="close">Close</div>')
				.appendTo($this)
				.on('click', function () {
					location.hash = '';
				});

			// Prevent clicks from inside article from bubbling.
			$this.on('click', function (event) {
				event.stopPropagation();
			});

		});

		// Events.
		$body.on('click', function (event) {

			// Article visible? Hide.
			if ($body.hasClass('is-article-visible'))
				$main._hide(true);

		});

		$window.on('keyup', function (event) {

			switch (event.keyCode) {

				case 27:

					// Article visible? Hide.
					if ($body.hasClass('is-article-visible'))
						$main._hide(true);

					break;

				default:
					break;

			}

		});

		$window.on('hashchange', function (event) {

			// Empty hash?
			if (location.hash == ''
				|| location.hash == '#') {

				// Prevent default.
				event.preventDefault();
				event.stopPropagation();

				// Hide.
				$main._hide();

			}

			// Otherwise, check for a matching article.
			else if ($main_articles.filter(location.hash).length > 0) {

				// Prevent default.
				event.preventDefault();
				event.stopPropagation();

				// Show article.
				$main._show(location.hash.substr(1));

			}

		});


		document.addEventListener('DOMContentLoaded', function () {
			const articles = document.querySelectorAll('.project-article');
			articles.forEach(article => {
				const bgImage = article.getAttribute('data-bg-image');
				if (bgImage) {
					article.style.backgroundImage = `url('${bgImage}')`;
				}
			});
		});



		// Sections.
		// Show the first section by default when the resume page loads
		$('#experience').show();

		// Handle hashchange events
		$(window).on('hashchange', function () {
			var hash = location.hash.replace('#', '');
			if (hash === 'resume') {
				toggleResumeElements(true);
			} else {
				toggleResumeElements(false);
			}
		});

		// Initial check on page load
		if (location.hash === '#resume') {
			toggleResumeElements(true);
		} else {
			toggleResumeElements(false);
		}

		// Add click events to toggle buttons
		$('.toggle-details-btn').on('click', function (e) {
			e.preventDefault();
			var expId = $(this).closest('.experience-item').attr('id').split('-')[1];
			toggleDetails(expId);
		});
	});

	// Function to toggle details (outside document.ready to be globally accessible)
	function toggleDetails(expId) {
		console.log("Toggling details for exp-" + expId);
		const moreDetails = document.getElementById('more-' + expId);
		const toggleBtn = document.querySelector(`#exp-${expId} .toggle-details-btn`);

		if (moreDetails && toggleBtn) {
			moreDetails.classList.toggle('active');

			if (moreDetails.classList.contains('active')) {
				toggleBtn.textContent = 'Show Less';
				moreDetails.style.display = 'block';
				// Trigger reflow to ensure transition works
				void moreDetails.offsetWidth;
				moreDetails.style.maxHeight = moreDetails.scrollHeight + 'px';
			} else {
				toggleBtn.textContent = 'Show More';
				moreDetails.style.maxHeight = '0';
				// Wait for transition to finish before hiding
				setTimeout(() => {
					if (!moreDetails.classList.contains('active')) {
						moreDetails.style.display = 'none';
					}
				}, 500); // This should match the transition duration
			}
		} else {
			console.error("Could not find moreDetails or toggleBtn for exp-" + expId);
		}
	}

	document.addEventListener('DOMContentLoaded', function() {
		// Get all images inside project items
		var images = document.querySelectorAll('.project-item .image-container img');
	
		// Add click event to each image
		images.forEach(function(img) {
			img.onclick = function() {
				window.open(this.src, '_blank'); // Open the image in a new tab/window
			}
		});
	});



	// Initialize.

	// Hide main, articles.
	$main.hide();
	$main_articles.hide();

	// Initial article.
	if (location.hash != ''
		&& location.hash != '#')
		$window.on('load', function () {
			$main._show(location.hash.substr(1), true);
		});

})(jQuery);
