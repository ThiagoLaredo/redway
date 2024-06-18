export class FormHandler {
  constructor(formId) {
      this.form = document.getElementById(formId);
      this.responseMessage = document.createElement('div');
      this.form.append(this.responseMessage);
      this.styleResponseMessage();  // Aplica estilos ao elemento de mensagem
      this.addEventListeners();
  }

  addEventListeners() {
      this.form.addEventListener('submit', event => this.handleSubmit(event));
  }

  handleSubmit(event) {
      event.preventDefault();
      const formData = {
          nome: this.form.querySelector('#nome').value,
          email: this.form.querySelector('#email').value,
          whatsapp: this.form.querySelector('#whatsapp').value,
          motivo: this.form.querySelector('#motivo').value,
          mensagem: this.form.querySelector('#mensagem').value
      };

      this.showLoadingIndicator();
      fetch('/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
      })
      .then(response => {
          if (!response.ok) throw new Error('Falha ao enviar. Tente novamente mais tarde.');
          return response.text();
      })
      .then(data => {
          this.showResponseMessage('Mensagem enviada com sucesso!', 'success');
          this.form.reset();
      })
      .catch(error => {
          this.showResponseMessage(error.message, 'error');
      });
  }

  showLoadingIndicator() {
      this.responseMessage.style.display = 'block';
      this.responseMessage.textContent = 'Enviando...';
      this.responseMessage.style.opacity = 1; // Restaurar opacidade antes de mostrar
  }

  fadeOut(element) {
    let op = 1;  // opacidade inicial
    element.style.opacity = op; // Garantir que a opacidade comece de 1
    const timer = setInterval(() => {
        if (op <= 0.05) {
            clearInterval(timer);
            element.style.display = 'none';
            element.style.opacity = 0; // Garantir que a opacidade seja zerada ao final
        }
        op -= op * 0.1;
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    }, 50);
}

  showResponseMessage(message, type) {
      this.responseMessage.textContent = message;
      this.responseMessage.style.opacity = 1;
      this.responseMessage.style.display = 'block';

      setTimeout(() => {
          this.fadeOut(this.responseMessage);
      }, 5000); // 5000 milissegundos = 5 segundos
  }



  styleResponseMessage() {
    this.responseMessage.style.marginTop = '10px';
    this.responseMessage.style.color = 'white';
    this.responseMessage.style.font = '500 1rem/1.4 "Hind", sans-serif';
  } 
}
