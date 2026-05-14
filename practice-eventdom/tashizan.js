let a,b,an; 
let bu = document.querySelector('button#calc');
function keisan() {
  a = document.querySelector('input[name="left"]');
  b = document.querySelector('input[name="right"]');
  a = Math.floor(a.value);
  b = Math.floor(b.value);
  an = document.querySelector('span#answer');
  an.textContent = a+b;
}

bu.addEventListener('click' , keisan); 