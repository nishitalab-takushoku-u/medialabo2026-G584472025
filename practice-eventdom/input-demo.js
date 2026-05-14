let b = document.querySelector('button#print');
b.addEventListener('click', greeting);
function greeting() {
    console.log('こんにちは');
    let i = document.querySelector('input[name="shimei"]');
    i.getAttribute('name');
    i.value;
    let p = document.querySelector;
    p = document.querySelector('p#message');
    let aisatsu = 'こんにちは, ' + i.value + ' さん';
    p.textContent = aisatsu;
}