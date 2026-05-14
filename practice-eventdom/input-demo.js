let b = document.querySelector('button#print');
b.addEventListener('click', greeting2);

function greeting() {
    console.log('こんにちは');
}

function greeting2() {
    let i = document.querySelector('input[name="shimei"]');
    let shimei = i.value
    let aisatsu = 'こんにちは, ' + shimei + ' さん';
    let p = document.querySelector('p#message');
    p.textContent = aisatsu;
}