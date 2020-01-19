import Hammer from 'hammerjs';

function formatarLinha(linha) {
    return linha.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase()
        .replace(/[^A-Z0-9]+/g, ' ')
        .trim()
}

function formatarTexto(texto) {
    return texto.split('\n').map(formatarLinha);
}

function atualizarSinais() {
    const texto = document.getElementById('textareaTexto').value;
    const canvas = document.getElementById('canvasSinais');
    const context = canvas.getContext('2d');
    const fontSize = 48;
    const alturaLinha = fontSize * 1.0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = `${fontSize}px Libras-2016`;
    context.fillStyle = 'blue';
    context.textAlign = 'center';

    const linhas = formatarTexto(texto);
    const alturaTexto = linhas.length * alturaLinha;
    let y = (canvas.height - alturaTexto) / 2 + alturaLinha;
    for (let i = 0; i < linhas.length; i++) {
        context.fillText(linhas[i], canvas.width / 2, y, canvas.width);
        y += alturaLinha;
    }
    console.log('escreveu');
}


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

        this.divTexto.style.display = '';
        this.divSinais.style.display = 'none';
        //this.divTexto.style.visibility = 'visible';
        //this.divSinais.style.visibility = 'hidden';
    }
    
    mostrarCanvasSinais() {
        this.menuTexto.classList.remove('selecionado');
        this.menuSinais.classList.add('selecionado');

        this.divTexto.style.display = 'none';
        this.divSinais.style.display = '';
        //this.divTexto.style.visibility = 'hidden';
        //this.divSinais.style.visibility = 'visible';

        setTimeout(atualizarSinais, 1000);
    }
    
    redimensionarCanvas() {
        const main = document.querySelector('main');
        this.canvasSinais.width = main.offsetWidth;
        this.canvasSinais.height = main.offsetHeight;
    }
}

let pagina = new Pagina();
pagina.configurarEventos();
pagina.mostrarTextareaTexto();
pagina.redimensionarCanvas();
