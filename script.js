const nome = prompt("Digite seu nome: ")
const idade = Number(prompt("Digite sua idade: "))
const status = prompt("Digite seu status (registrado ou não registrado): ").toUpperCase()

const maiorMenor = (idade >= 18) ? "MAIOR de idade" : "MENOR de idade";

switch (status) {
    case "REGISTRADO":
        alert(`Seja bem-vindo(a) ${nome}!`);
        break;
    case "NÃO REGISTRADO":
        alert(`Olá ${nome}! Por favor, complete seu registro.`);
        break;
    default:
        alert("Status desconhecido. Por favor, digite 'registrado' ou 'não registrado'")
        break;
}

const acesso = (idade >= 18 && status === "REGISTRADO") 
    ? `Com base na sua FAIXA ETÁRIA (${maiorMenor}) e STATUS DE REGISTRO (${status}) você tem ACESSO COMPLETO.`
    : (idade < 18 || status === "NÃO REGISTRADO") 
        ? `Com base na sua FAIXA ETÁRIA (${maiorMenor}) e STATUS DE REGISTRO (${status}) você tem ACESSO LIMITADO.`
        : "SEM ACESSO";
alert(acesso);
