export class ServiceLoader {
    constructor(data) {
        this.data = data;
    }

    loadService(serviceId, lang = 'pt') {
        if (!this.data || !this.data[lang] || !this.data[lang].servico) {
            console.error('Dados de serviço não disponíveis:', this.data);
            return;
        }

        const serviceData = this.data[lang].servico[serviceId];
        if (serviceData) {
            this.displayService(serviceData, lang, serviceId);
        } else {
            console.error('Serviço não encontrado:', serviceId);
        }
    }

    displayService(serviceData, lang, serviceId) {
        const titleElement = document.getElementById('serviceTitle');
        const descriptionElement = document.getElementById('serviceDescription');
        const buttonElement = document.getElementById('serviceButton');

        if (!serviceData) {
            console.error('Dados de serviço não fornecidos');
            return;
        }

        titleElement.textContent = serviceData.titulo;
        descriptionElement.textContent = serviceData.descricao;
        buttonElement.textContent = this.data[lang].servico.comum.servicoBotao;

        if (serviceId) {
            titleElement.setAttribute('data-translate', `servico.${serviceId}.titulo`);
            descriptionElement.setAttribute('data-translate', `servico.${serviceId}.descricao`);
            buttonElement.setAttribute('data-translate', 'servico.comum.servicoBotao');
        } else {
            console.error('Service ID is undefined or null');
        }

        if (typeof languageSwitcher !== 'undefined' && typeof languageSwitcher.applyTranslations === 'function') {
            languageSwitcher.applyTranslations();
        }
    }
}