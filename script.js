/*
    -- 1° Forma --
*/

// Sortear Minas
function sortear(limite) {
    return Math.ceil(Math.random() * limite);
}

function sortear_minas(qtde) {
    let pos = [];
    while (pos.length < qtde) {
        let posicao = sortear(79);
        if (pos.indexOf(posicao) < 0) {
            pos.push(posicao)
        }
    }
    return pos;
}

// Posições das minas
var minas = sortear_minas(10);

// Criar os campos
var campo = [];
for (let i = 0; i < 8; i++){
    let temp = [];
    for (let j = 0; j < 10; j++){
        temp.push(0);
    }
    campo.push(temp);
}
console.log(campo);

// Colocar as minas nos campos das minas
for (pos of minas.values()){
    let linha = parseInt(pos / 10);
    let coluna = pos - (linha * 10);

    campo[linha][coluna] = -1;
}

for (let i = 0; i < campo.length; i++){
    for (let j = 0; j < campo[0].length; j++){
        if (campo[i][j] != -1){
            campo[i][j] = calculaPosicoes(campo, i, j);
        }
    }
}

function calculaPosicoes (campo, linha, coluna){
    let minas = 0;
    for (let i = linha - 1; i <= linha + 1; i++){
        for (let j = coluna - 1; j <= coluna + 1; j++){
            if (i >= 0 && i < campo.length && j >= 0 && j < campo[0].length){
                if (campo[i][j] == -1){
                    minas++;
                }
            }
        }
    }
    return minas;
}

function colocaCampoTela (campo){
    for (let i = 0; i < campo.length; i++){
        for (let j = 0; j < campo[0].length; j++){
            let div = $("<div>");
            if (campo[i][j] == -1){
                div.addClass("bomba");
            } else{
                div.addClass("aberto");
                div.text(campo[i][j]);
            }
            $("section").append(div);
        }
    }
}

$(document).ready(function(){
    colocaCampoTela(campo);
});



/*
    -- 2° Forma --
*/

// // Criando as divs
//             for (i = 0; i < 80; i++) {
//                 var novaDiv = $("<div>");
//                 novaDiv.addClass("aberto");
//                 novaDiv.attr("id", i);
//                 novaDiv.text(i);
//                 $("section").append(novaDiv);
//             }
//             // Definindo as bombas
//             for (indice = 0; indice < minas.length; indice++) {
//                 var idSorteado = String(minas[indice]);
//                 var divSorteada = $("#" + idSorteado);
//                 divSorteada.removeClass("aberto");
//                 divSorteada.addClass("bomba");
//                 divSorteada.text("");
//             }
//             // Definindo os números das divs abertas
//             $("div").each(function(index) {
//                 let n = 0;  // número de minas que existem em seus vizinhos adjacentes
//                 if ($(this).hasClass("aberto")) {
//                     let idDiv = $(this).attr("id");
//                     if (idDiv[idDiv.length - 1] == 0 || idDiv[idDiv.length - 1] == 9) {
//                         // se a div for da lateral esquerda
//                         if (idDiv[idDiv.length - 1] == 0) {
//                             idDiv = parseInt($(this).attr("id"));
//                             if ($("#" + (idDiv - 10)).hasClass("bomba")) {n++}
//                             if ($("#" + (idDiv - 9)).hasClass("bomba")) {n++}
//                             if ($("#" + (idDiv + 1)).hasClass("bomba")) {n++}
//                             if ($("#" + (idDiv + 10)).hasClass("bomba")) {n++}
//                             if ($("#" + (idDiv + 11)).hasClass("bomba")) {n++}
//                         } else {
//                             // se a div for da lateral direita
//                             if (idDiv[idDiv.length - 1] == 9) {
//                                 idDiv = parseInt($(this).attr("id"));
//                                 if ($("#" + (idDiv - 11)).hasClass("bomba")) {n++}
//                                 if ($("#" + (idDiv - 10)).hasClass("bomba")) {n++}
//                                 if ($("#" + (idDiv - 1)).hasClass("bomba")) {n++}
//                                 if ($("#" + (idDiv + 9)).hasClass("bomba")) {n++}
//                                 if ($("#" + (idDiv + 10)).hasClass("bomba")) {n++}
//                             }
//                         }
//                     } else {
//                         idDiv = parseInt($(this).attr("id"));
//                         if ($("#" + (idDiv - 11)).hasClass("bomba")) {n++}
//                         if ($("#" + (idDiv - 10)).hasClass("bomba")) {n++}
//                         if ($("#" + (idDiv - 9)).hasClass("bomba")) {n++}
//                         if ($("#" + (idDiv - 1)).hasClass("bomba")) {n++}
//                         if ($("#" + (idDiv + 1)).hasClass("bomba")) {n++}
//                         if ($("#" + (idDiv + 9)).hasClass("bomba")) {n++}
//                         if ($("#" + (idDiv + 10)).hasClass("bomba")) {n++}
//                         if ($("#" + (idDiv + 11)).hasClass("bomba")) {n++}
//                     }
//                     $(this).text(n);
//                 }
//             });       