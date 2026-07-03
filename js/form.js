window.setupContactForm = () => {
	const form = document.getElementById('contact-form');

	if (!form) {
		return;
	}

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		const name = document.getElementById('name').value.trim();
		const email = document.getElementById('email').value.trim();
		const subject = document.getElementById('subject').value.trim();
		const message = document.getElementById('message').value.trim();

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		// Validação simples
		if (!name || !email || !subject || !message) {
			alert("Por favor, preencha todos os campos corretamente.");
			return;
		}

		if (!emailRegex.test(email)) {
			alert("Por favor, insira um e-mail válido.");
			return;
		}

		const submitButton = form.querySelector('button[type="submit"]');
		const originalButtonText = submitButton ? submitButton.textContent : 'Enviar';
		if (submitButton) {
			submitButton.disabled = true;
			submitButton.textContent = 'Enviando...';
		}

		const url = "https://formspree.io/f/mgojprdw";
		const formData = new FormData(this);

		fetch(url, {
			method: "POST",
			body: formData,
			headers: { 'Accept': 'application/json' }
		}).then(response => {
			if (response.ok) {
				alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
				this.reset(); // Limpa o formulário
			} else {
				alert("Ops! Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
			}
		}).catch(error => {
			alert("Erro de rede ao tentar enviar o formulário.");
		}).finally(() => {
			if (submitButton) {
				submitButton.disabled = false;
				submitButton.textContent = originalButtonText;
			}
		});
	});
};

