document.addEventListener('DOMContentLoaded', () => {
	const revealTargets = document.querySelectorAll('main > section, .project-card, .education-grid article, form');

	if (!revealTargets.length) {
		return;
	}

	revealTargets.forEach((element) => element.classList.add('reveal'));

	if (!('IntersectionObserver' in window)) {
		revealTargets.forEach((element) => element.classList.add('is-visible'));
		return;
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			}

			entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		});
	}, {
		threshold: 0.18,
		rootMargin: '0px 0px -8% 0px',
	});

	revealTargets.forEach((element) => observer.observe(element));
});
