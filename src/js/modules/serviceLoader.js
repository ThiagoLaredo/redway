export class ServiceLoader {
  constructor(data, languageSwitcher) {
    this.data = data;
    this.languageSwitcher = languageSwitcher; // Instância de LanguageSwitcher
  }

  loadService(serviceId, lang = 'pt') {
    if (!serviceId) {
      console.error('Service ID is undefined or null');
      return;
    }

    if (!this.data || !this.data[lang] || !this.data[lang].servico) {
      console.error('Service data not available:', this.data);
      return;
    }

    const serviceData = this.data[lang].servico[serviceId];
    if (serviceData) {
      this.displayService(serviceData, lang, serviceId);
      this.updateUrlHash(serviceId); // Atualiza a URL com o hash do serviço
    } else {
      console.error('Service not found:', serviceId);
    }
  }

  displayService(serviceData, lang, serviceId) {
    // Verificação de elementos DOM antes de usá-los
    const titleElement = document.getElementById('serviceTitle');
    const descriptionIntroElement = document.getElementById('serviceDescriptionIntro');
    const descriptionElement = document.getElementById('serviceDescription');
    const buttonElement = document.getElementById('serviceButton');
    const imageElement = document.getElementById('serviceimage');
    const beneficiosListElement = document.getElementById('serviceBeneficiosTitle');

    if (!titleElement || !descriptionIntroElement || !descriptionElement || !buttonElement || !imageElement || !beneficiosListElement) {
      console.error('One or more DOM elements are missing.');
      return;
    }

    // Atualizando o conteúdo dinamicamente
    titleElement.textContent = serviceData.titulo || '';
    descriptionIntroElement.textContent = serviceData.descricao || '';
    buttonElement.textContent = this.data[lang].servico.comum.servicoBotao || '';

    // Atualizando o título da página para SEO
    const seoTitle = serviceData.tituloSEO || `RedWay - ${serviceData.titulo || 'Serviço'}`;
    document.title = seoTitle;

    // Atualizando a descrição para SEO
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = serviceData.descricaoSEO || serviceData.descricao || 'Descrição do serviço não disponível.';

    // Limpa a descrição adicional antes de adicionar novos elementos
    descriptionElement.innerHTML = '';

    // Adiciona descrições adicionais, se houver
    if (serviceData.descricaoAdicional && Array.isArray(serviceData.descricaoAdicional)) {
      serviceData.descricaoAdicional.forEach((paragrafo, index) => {
        const p = document.createElement('p');
        p.textContent = paragrafo;
        p.setAttribute('data-translate', `servico.${serviceId}.descricaoAdicional.${index}`);
        descriptionElement.appendChild(p);
      });
    }

    // Carrega a imagem, se disponível
    if (serviceData.imagem) {
      imageElement.style.backgroundImage = `url('../img/${serviceData.imagem}')`;
      imageElement.style.backgroundSize = 'cover';
    } else {
      imageElement.style.backgroundImage = 'none';
    }

    // Verifica se o elemento de texto alternativo existe, caso contrário, cria um
    let altTextElement = imageElement.querySelector('.visually-hidden');
    if (!altTextElement) {
      altTextElement = document.createElement('span');
      altTextElement.classList.add('visually-hidden');
      imageElement.appendChild(altTextElement);
    }

    // Atualiza o texto alternativo
    altTextElement.textContent = serviceData.titulo ? `Imagem de fundo: ${serviceData.titulo}` : 'Imagem de fundo: descrição não disponível';

    // Remove todos os elementos <h3> dentro da seção de benefícios
    const existingTitles = beneficiosListElement.parentNode.querySelectorAll('h3');
    existingTitles.forEach(title => title.remove());

    // Limpa a lista de benefícios
    beneficiosListElement.innerHTML = '';

    // Adiciona o título da lista de benefícios antes do <ul>
    if (serviceData.beneficiosTitulo) {
      const tituloBeneficios = document.createElement('h3');
      tituloBeneficios.textContent = serviceData.beneficiosTitulo;
      tituloBeneficios.setAttribute('data-translate', `servico.${serviceId}.beneficiosTitulo`);
      beneficiosListElement.parentNode.insertBefore(tituloBeneficios, beneficiosListElement);
    }

    // Popula a lista de benefícios
    if (serviceData.beneficios && Array.isArray(serviceData.beneficios)) {
      serviceData.beneficios.forEach((beneficio, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = beneficio;
        listItem.setAttribute('data-translate', `servico.${serviceId}.beneficios.${index}`);
        beneficiosListElement.appendChild(listItem);
      });
    }

    // Atualiza atributos de tradução para todos os elementos dinâmicos
    titleElement.setAttribute('data-translate', `servico.${serviceId}.titulo`);
    descriptionIntroElement.setAttribute('data-translate', `servico.${serviceId}.descricao`);
    buttonElement.setAttribute('data-translate', 'servico.comum.servicoBotao');

    // Reaplica as traduções usando a instância de LanguageSwitcher para todos os elementos
    if (this.languageSwitcher && typeof this.languageSwitcher.applyTranslations === 'function') {
      this.languageSwitcher.applyTranslations();
    }
  }

  // Método para atualizar o hash da URL
  updateUrlHash(serviceId) {
    window.location.hash = serviceId; // Atualiza a URL com o hash do serviço
  }
}