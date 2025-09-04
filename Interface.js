// Criando interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta o nome
rl.question("Digite seu nome: ", function(nome) {
  
  // Pergunta a idade
  rl.question("Digite sua idade: ", function(idade) {
    idade = Number(idade); // converte string para número

    if (nome === "Kauan") { 
        if (idade >= 18) {
            console.log(nome + ", você é maior de idade.");
        } else {
            console.log(nome + ", você é menor de idade.");
        }
    } else {
        console.log("Nome incorreto! Esse não é o seu nome");
    }

    rl.close(); // encerra o programa
  });

});