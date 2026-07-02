document.addEventListener('DOMContentLoaded', () => {
	if (typeof window.setupRevealEffects === 'function') {
		window.setupRevealEffects();
	}

	if (typeof window.setupContactForm === 'function') {
		window.setupContactForm();
	}
});
