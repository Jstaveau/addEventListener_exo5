//1
let input1 = document.getElementsByTagName('input')[0];

input1.addEventListener('focus', function(){
    input1.style.backgroundColor = "blue"
})

//2
let input2 = document.getElementsByTagName('input')[1];

input2.addEventListener('focus', function(){
    input2.style.backgroundColor = "blue"
})
input2.addEventListener('focusout', function(){
    input2.style.backgroundColor = "white"
})

//3
let p1 = document.querySelectorAll('.premierParagraphe, .secondParagraphe, .dernierParagraphe')
let button1 = document.getElementsByClassName('buttonExo')[0]
p1 = Array.from(p1)
button1.addEventListener('click', function(){
    p1.forEach(element => {
        element.innerText = p1[1].innerText
    });
})


//4
let input3 = document.getElementsByTagName('input')[2];
let pNico = document.getElementById('exo4');
let button2 = document.getElementsByTagName('button')[1];

input3.addEventListener('input', function(){
    button2.addEventListener('click', function(){
        pNico.innerText = input3.value
    })
})

//5
let button3 = document.getElementsByTagName('button')[2];
let pImg = document.getElementsByClassName('img-responsive')[0].previousElementSibling
let img1 = document.getElementsByClassName('img-responsive')[0]

button3.addEventListener("click", function(){
    img1.src = pImg.innerText.replace("Chemin : ", "")
})

//6
let chemin;
console.log(chemin);
let imgA = document.getElementsByClassName('img-responsive')[1];
let imgB = document.getElementsByClassName('img-responsive')[2];


imgA.addEventListener('click', function () { 
    chemin = imgA.getAttribute('src');
});
imgB.addEventListener('click', function(){
    imgB.src = chemin
})

//7
let buttonFleche = document.getElementsByTagName('button')[document.getElementsByTagName('button').length - 1];
let text;
let pAvDernier = document.getElementsByTagName('p')[document.getElementsByTagName('p').length - 2]
let pDernier = document.getElementsByTagName('p')[document.getElementsByTagName('p').length - 1]

buttonFleche.addEventListener('click', function(){
    text = pAvDernier.innerText;
    pAvDernier.innerText = pDernier.innerText
    pDernier.innerText = text
})

