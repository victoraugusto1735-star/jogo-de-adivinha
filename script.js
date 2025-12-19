const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maximoTentativas = 10;
let tentativasRestantes = maximoTentativas;

function chuta() {
    const palpite = Number(document.getElementById("palpite").value);
    const mensagem = document.getElementById("mensagem");
    const tentativas = document.getElementById("tentativas");

    // 1️⃣ Validar se o número é válido
    if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
        mensagem.textContent = " Digite um número válido entre 1 e 100.";
        return;
    }

    // 2️⃣ Decrementar tentativas
    tentativasRestantes--;

    // 3️⃣ Comparar palpite com número secreto
    if (palpite === numeroSecreto) {
        mensagem.textContent = " Você acertou!";
        tentativas.textContent = "";
        return;
    } 
    else if (palpite < numeroSecreto) {
        mensagem.textContent = " O número secreto é MAIOR.";
    } 
    else {
        mensagem.textContent = " O número secreto é MENOR.";
    }

    // 4️⃣ Atualizar tentativas restantes
    tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    // 5️⃣ Verificar se perdeu
    if (tentativasRestantes === 0) {
        mensagem.textContent = ` Você perdeu! O número secreto era ${numeroSecreto}.`;
        tentativas.textContent = "";
    }
}
