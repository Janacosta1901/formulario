document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário para fins de teste

    // Coletando dados do formulário
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    alert(`Obrigado, ${nome} ${sobrenome}! Seu formulário foi enviado com sucesso.`);
});

function cancelar() {
    if (confirm('Tem certeza de que deseja cancelar?')) {
        document.getElementById('formulario').reset();
    }
}
