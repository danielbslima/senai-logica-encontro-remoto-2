let numeroDeAlunos = 10;

for (let contador = 1; contador <= numeroDeAlunos; contador ++) {
//    console.log(contador);

    if (contador === 0) {
        console.log("O número " + contador + " é ZERO");
    } else if (contador % 2 == 0 && contador > 5) {
        console.log("O número " + contador + " é PAR e maior que cinco")
    } else if (contador % 2 == 0) {
        console.log("O número " + contador + " é PAR")
    } else {
        console.log("O número " + contador + " é IMPAR")
    }
}
// let contador = 1;

// do {
//         if(contador == 0){
//             console.log("O número " + contador + " é ZERO")
//         } else if (contador %2 == 1) {
//             console.log("O número " + contador + " é IMPAR")
//         } else {
//             console.log("O número " + contador + " é PAR")
//         }
//         contador++;    
// } while (contador <= numeroDeAlunos);






// let listaDeAlunos = ["Marcelo", "Juh", "Cleber", "Wesley", "Adriano"]
// //     for (const aluno of listaDeAlunos) {
// //         console.log(aluno);
// //     }

// listaDeAlunos.forEach(element => {
//     console.log(element)
// });

