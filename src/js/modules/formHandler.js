export function setupForm() {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevenir o envio tradicional do formulário

        // Preparando dados do formulário para enviar
        const formData = new FormData(form);
        formData.append('apikey', 'sua_chave_de_acesso_web3forms'); // Substitua com sua chave real do Web3Forms

        // Enviando dados usando fetch para o Web3Forms
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Mostra a mensagem de agradecimento e esconde o formulário
            thankYouMessage.style.display = 'block';
            form.style.display = 'none';  // Esconde o formulário
            form.reset(); // Opcional: Limpa o formulário após o envio bem-sucedido
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Houve um erro ao enviar o formulário, tente novamente.');
        });
    });
}