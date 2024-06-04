
import gsap from 'gsap';

export default class MapaAnimacao {
    constructor(classesPaises) {
        this.classesPaises = classesPaises; // Array de classes dos países
    }

    animarCores(sequenciaTempo = 0.5, cor = '#4E7A9B') {
        this.classesPaises.forEach((classePais, index) => {
            gsap.to(`path.${classePais}`, {
                fill: cor,
                delay: index * sequenciaTempo, // Cria a sequência baseada no index
                duration: 1, // Duração da animação para cada país
            });
        });
    }
}


