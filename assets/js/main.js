function meuEscopo () {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    function calculadoraImc(evento) {
        evento.preventDefault();

        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');

        function imc (peso, altura) {
            return peso / (altura * altura);
        }

        const info = imc(peso.value, altura.value, altura.value);

        console.log(typeof(peso.value), typeof(altura.value), Number.isNaN(imc));

        if (Number.isNaN(info) === true) {
            resultado.innerHTML = `<p class="paragrafo-resultado bad">Valor Invalido</p>`
        } else {
            if (info < 18.5) {
                resultado.innerHTML = `<p class="paragrafo-resultado">Seu IMC é ${info.toFixed(2)} (Abaixo do peso).</p>`
            } else if (info === 18.5 || info < 24.9) {
                resultado.innerHTML = `<p class="paragrafo-resultado">Seu IMC é ${info.toFixed(2)} (Peso Normal).</p>`
            } else if (info === 25 || info < 29.9) {
                resultado.innerHTML = `<p class="paragrafo-resultado">Seu IMC é ${info.toFixed(2)} (Sobrepeso).</p>`
            } else if (info === 30 || info < 34.9) {
                resultado.innerHTML = `<p class="paragrafo-resultado">Seu IMC é ${info.toFixed(2)} (Obesidade grau I).</p>`
            } else if (info === 35 || info < 39.9) {
                resultado.innerHTML = `<p class="paragrafo-resultado">Seu IMC é ${info.toFixed(2)} (Obesidade grau II).</p>`
            } else {
                resultado.innerHTML = `<p class="paragrafo-resultado">Seu IMC é ${info.toFixed(2)} (Obesidade grau III).</p>`
            }
        }
    }

    form.addEventListener('submit', calculadoraImc);

}

meuEscopo();