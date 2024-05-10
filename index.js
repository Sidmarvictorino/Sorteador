function generateNumber() {

    const min = Math.ceil(document.querySelector('.main-min').value)
    const max = Math.floor(document.querySelector('.main-max').value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)

}

