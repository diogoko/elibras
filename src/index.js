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
    const fontSize = 30;
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
}

document.getElementById('textareaTexto').addEventListener('keyup', atualizarSinais);
