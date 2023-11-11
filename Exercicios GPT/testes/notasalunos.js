function gradingStudents(grades) {
    let nota = grades;
    let notaFinal = 0;

    if (nota > 38) {
        if (nota % 5 === 0) {
            notaFinal = nota;
        } else {
            let diferenca = 5 - (nota % 5);
            if (diferenca < 3) {
                notaFinal = nota + diferenca;
            } else {
                notaFinal = nota;
            }
        }
    } else {
        notaFinal = nota;
    }

    return notaFinal;
}

const resultado = gradingStudents(63);
console.log(resultado);