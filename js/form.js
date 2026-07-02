document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.contact-form');

	if (!form) {
		return;
	}

	const status = document.getElementById('form-status');
	const fields = [
		{ name: 'name', label: 'Nome', minLength: 3, validator: (value) => value.trim().length >= 3, message: 'Informe um nome com pelo menos 3 caracteres.' },
		{ name: 'email', label: 'Email', validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()), message: 'Informe um email válido.' },
		{ name: 'subject', label: 'Assunto', minLength: 3, validator: (value) => value.trim().length >= 3, message: 'O assunto precisa ter pelo menos 3 caracteres.' },
		{ name: 'message', label: 'Mensagem', minLength: 10, validator: (value) => value.trim().length >= 10, message: 'A mensagem precisa ter pelo menos 10 caracteres.' },
	];

	const getField = (name) => form.elements.namedItem(name);

	const setFieldState = (fieldName, isValid, message = '') => {
		const field = getField(fieldName);
		const error = document.getElementById(`${fieldName}-error`);

		if (!field || !error) {
			return;
		}

		field.setAttribute('aria-invalid', String(!isValid));
		error.textContent = message;
		error.classList.toggle('is-error', !isValid);
	};

	const validateField = ({ name, validator, message }) => {
		const field = getField(name);

		if (!field) {
			return true;
		}

		const value = field.value ?? '';
		const isValid = validator(value);

		setFieldState(name, isValid, isValid ? '' : message);
		return isValid;
	};

	const clearStatus = () => {
		if (!status) {
			return;
		}

		status.textContent = '';
		status.classList.remove('is-success', 'is-error');
	};

	fields.forEach(({ name }) => {
		const field = getField(name);

		if (!field) {
			return;
		}

		field.addEventListener('input', () => {
			clearStatus();
			validateField(fields.find((item) => item.name === name));
		});
	});

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		clearStatus();

		const firstInvalidField = fields.find((field) => !validateField(field));

		if (firstInvalidField) {
			if (status) {
				status.textContent = 'Revise os campos destacados antes de enviar.';
				status.classList.add('is-error');
			}

			const invalidInput = getField(firstInvalidField.name);
			invalidInput?.focus();
			return;
		}

		form.reset();

		fields.forEach(({ name }) => setFieldState(name, true, ''));

		if (status) {
			status.textContent = 'Mensagem enviada com sucesso. Retornarei em breve.';
			status.classList.add('is-success');
		}
	});
});
