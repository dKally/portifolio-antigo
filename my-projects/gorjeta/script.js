let value1 = "";
let value2 = "";
let price = "";

const input = document.querySelector('.value');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result')

btn.addEventListener('click', ()=>{
    start();
})

function start(){
    price = document.querySelector('.value').value;
    if(price === String){
        alert("Insira um número");
        return
    }else{
        value1 = (price / 100) * 15;
        value2 = (price / 100) * 20;
        
        
        return result.innerText = `O valor da gorjeta fica entre ${value1} a ${value2} reais`
    }
}