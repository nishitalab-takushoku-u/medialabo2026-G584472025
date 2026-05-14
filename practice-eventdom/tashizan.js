function keisan() {
    let x = document.querySelector('input[name="left"]');
    let left = Number(x.value);
    let y = document.querySelector('input[name="right"]');
    let right = Number(y.value);
    let goukei = left + right;
    let p = document.querySelector('span#answer');
    p.textContent = goukei;
}

let b = document.querySelector('button#calc');
b.addEventListener('click', keisan);