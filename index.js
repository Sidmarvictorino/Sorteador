function generateNumber() {

    const min = Math.ceil(document.querySelector('.main-min').value)
    const max = Math.floor(document.querySelector('.main-max').value)

    if (min > max) {

        alert("O valor minimo tem que ser MAIOR que o valor maximo")


    }
    else {

        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result)

    }
}




