function comida (nome,origem,ingredientes){
    this.nome = nome;
    this.origem = origem;
    this.ingredientes = ingredientes;
}

comida1 = new comida('Leite com chocolate','Brasil','Leite e chocolate');
console.log(comida1);

comida2 = new comida('Pão com ovo','Brasil','Pão e ovo');
console.log(comida2);

comida3 = new comida('Arroz com feijão','Brasil','Arroz e feijão');
console.log(comida3);

comida4 = new comida('Omelete','Brasil','Ovo');
console.log(comida4);