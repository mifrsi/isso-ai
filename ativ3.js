function pessoa (nome,nascimento,sexo,local,idade){
    this.nome = nome;
    this.nascimento = nascimento;
    this.sexo = sexo;
    this.local = local;
    this.idade = idade;
}

pessoa1 = new pessoa('Carol','06/06/2006','feminino','Hospital Ave Maria',false);
console.log(pessoa1);

pessoa2 = new pessoa('Debora','03/03/2003','feminino','Hospital Ave Maria',false);
console.log(pessoa2);

pessoa3 = new pessoa('Estevão','09/09/2009','masculino','Hospital Ave Maria',false);
console.log(pessoa3);

pessoa4 = new pessoa('Felipe','08/08/2008','masculino','Hospital Ave Maria',true);
console.log(pessoa4);





