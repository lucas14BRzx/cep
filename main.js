function Coletar(){
    let input = document.getElementById('.inviar').value
    console.log(input)
    Dados(input)
}

async function Dados(input){
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    ExibirDados(dados)
}

function ExibirDados(dados){
    document.querySelector('.endereco').value = dados.logradouro;
    document.querySelector('.bairro').value = dados.bairro;
    document.querySelector('.cidade').value = localidade;

    document.getElementById("endereco-input").value = dados.logradouro;
    document.getElementById("bairro-input").value = dados.bairro;
    document.getElementById("cidade-input").value = dados.localidade;
    console.log(dados)
}

// const form = document.querySelector('form')
// const submit = document.querySelector('button[type = "submit"]')


// form.addEventListener('keydown', funciont(e) (
//     if(e.key === 'Enter' && !e.shiftket) {
//         e.preventDefauçt()
//         form.submit()
//     }
// ))