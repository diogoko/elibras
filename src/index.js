import Hammer from 'hammerjs';

class Pagina {
    get textareaTexto() {
        return document.getElementById('textareaTexto');
    }

    get canvasSinais() {
        return document.getElementById('canvasSinais');
    }

    get menuTexto() {
        return document.getElementById('menuTexto');
    }

    get menuSinais() {
        return document.getElementById('menuSinais');
    }

    get divTexto() {
        return document.getElementById('divTexto');
    }

    get divSinais() {
        return document.getElementById('divSinais');
    }

    constructor() {
        this.mostrarCanvasSinais = this.mostrarCanvasSinais.bind(this);
        this.mostrarTextareaTexto = this.mostrarTextareaTexto.bind(this);
        this.redimensionarCanvas = this.redimensionarCanvas.bind(this);
        this.formatarTexto = this.formatarTexto.bind(this);
        this.atualizarSinais = this.atualizarSinais.bind(this);
        this.atualizarEstiloTexto = this.atualizarEstiloTexto.bind(this);

        this.jaDesenhou = false;

        this.corFundo = 'darkblue';
        this.corTexto = 'white';
        this.tamanhoFonte = 48;
    }

    configurarEventos() {
        window.addEventListener('resize', this.redimensionarCanvas);

        let hammerTextareaTexto = new Hammer(this.textareaTexto);
        hammerTextareaTexto.on('panleft', this.mostrarCanvasSinais);

        let hammerCanvasSinais = new Hammer(this.canvasSinais);
        hammerCanvasSinais.on('panright', this.mostrarTextareaTexto);
        
        this.menuTexto.addEventListener('click', this.mostrarTextareaTexto);

        this.menuSinais.addEventListener('click', this.mostrarCanvasSinais);
    }

    mostrarTextareaTexto() {
        this.menuTexto.classList.add('selecionado');
        this.menuSinais.classList.remove('selecionado');

        //this.divTexto.style.display = '';
        //this.divSinais.style.display = 'none';
        //this.divTexto.style.visibility = 'visible';
        //this.divSinais.style.visibility = 'hidden';
        this.divTexto.style.zIndex = 2;
        this.divSinais.style.zIndex = 1;
    }
    
    mostrarCanvasSinais() {
        this.menuTexto.classList.remove('selecionado');
        this.menuSinais.classList.add('selecionado');

        //this.divTexto.style.display = 'none';
        //this.divSinais.style.display = '';
        //this.divTexto.style.visibility = 'hidden';
        //this.divSinais.style.visibility = 'visible';
        this.divTexto.style.zIndex = 1;
        this.divSinais.style.zIndex = 2;

        this.atualizarSinais();
        if (!this.jaDesenhou) {
            this.jaDesenhou = true;
            setTimeout(this.atualizarSinais, 100);
        }
    }
    
    redimensionarCanvas() {
        const main = document.querySelector('main');
        this.canvasSinais.width = main.offsetWidth;
        this.canvasSinais.height = main.offsetHeight;
    }

    formatarLinha(linha) {
        return linha.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toUpperCase()
            .replace(/[^A-Z0-9]+/g, ' ')
            .trim()
    }
    
    formatarTexto(texto) {
        return texto.split('\n').map(this.formatarLinha);
    }
    
    atualizarSinais() {
        const canvas = this.canvasSinais;
        const context = canvas.getContext('2d');

        context.fillStyle = this.corFundo;
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.font = `${this.tamanhoFonte}px Libras-2016`;
        context.fillStyle = this.corTexto;
        context.textAlign = 'center';
    
        const texto = this.textareaTexto.value;
        const linhas = this.formatarTexto(texto);
        const alturaLinha = this.tamanhoFonte * 1.0;
        const alturaTexto = linhas.length * alturaLinha;
        let y = (canvas.height - alturaTexto) / 2 + alturaLinha;
        for (let i = 0; i < linhas.length; i++) {
            context.fillText(linhas[i], canvas.width / 2, y, canvas.width);
            y += alturaLinha;
        }
        //console.log('escreveu');
    }

    atualizarEstiloTexto() {
        const style = this.textareaTexto.style;
        style.backgroundColor = this.corFundo;
        style.color = this.corTexto;
        style.fontSize = `${this.tamanhoFonte}px`;
    }
}

let pagina = new Pagina();
pagina.configurarEventos();
pagina.atualizarEstiloTexto();
pagina.mostrarTextareaTexto();
pagina.redimensionarCanvas();
