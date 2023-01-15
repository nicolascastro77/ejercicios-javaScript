//--------------------SECCION 1

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

h1.innerHTML = "Dom manipulado <hr> Dom ";
h1.inertText = "Dom manipulado <hr> Dom ";

// h1.setAttribute('class','rojo');

// h1.classList.add('rojo');
// h1.classList.remove('rojo');
// h1.classList.toggle('rojo');
// h1.classList.contains('rojo');

input.value ="";


const img = document.createElement('img');
img.setAttribute('src','https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1');
console.log(img);

pid.append(img);




//--------------------SECCION 2 EVENTOS


const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button1 = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form1 = document.querySelector('#form1');


function btnOnClick(){
    let result = (Number(input1.value) + Number(input2.value));
    pResult.innerHTML = "Resultado " + result;

}

function changeImg(){
    img.setAttribute('src','https://i.blogs.es/ceda9c/dalle/450_1000.jpg');

}
//--------------------SECCION 3 addEventListener



button1.addEventListener('click',btnOnClick);
// form1.addEventListener('submit',btnOnClick);

pid.addEventListener('mousemove',changeImg)




