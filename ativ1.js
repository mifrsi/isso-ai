function casa (cor,tamanho,terreno,bairro,preço){
    this.cor = cor,
    this.tamanho = tamanho;
    this.terreno = terreno;
    this.bairro = bairro;
    this.preço = preço;
};
casa1 = new casa ('rosa','400 m²','600 m²','Dream house','2 milhões');
console.log(casa1);

casa2 = new casa ('preto','40 m²','60 m²','Guaianases','sem preço');
console.log(casa2);

casa3 = new casa ('verde','20 m²','100 m²','Jardim campo','7 mil');
console.log(casa3);

casa4 = new casa ('sem cor','10 m²','10 m²','jardim robru','11 mil');
console.log(casa4);