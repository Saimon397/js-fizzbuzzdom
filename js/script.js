const container = document.querySelector("div.container");

let type;
let text;

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        type = 'fizz_buzz';
        text = 'FizzBuzz';
    }
    else if (i % 3 === 0) {
        type = 'fizz';
        text = 'Fizz';
    }
    else if (i % 5 === 0) {
        type = 'buzz';
        text = 'Buzz';
    }
    else {
        type = '';
        text = i;
    }

    const box = `<div class="box ${type}"> ${text}</div>`;
    container.innerHTML += box;
}

