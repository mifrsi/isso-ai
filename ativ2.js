function time (nome,pontuação,status){
    this.nome = nome;
    this.pontuação = pontuação;
    this.status = status;
}

time1 = new time ('São jorge','4000',false);
console.log(time1);

time2 = new time ('Pobres','3500',true);
console.log(time2);

time3 = new time ('To com fome','7000',true);
console.log(time3);

time4 = new time ('Depressão','4700',false);
console.log(time4);