
//Questões
const Questions = [{
  id: 0,
  q: "Quantos biomas existem no Brasil?",
  a: [{ text: "5", isCorrect: false },
  { text: "2", isCorrect: false },
  { text: "6", isCorrect: true },
  { text: "4", isCorrect: false }
  ]

},
{
  id: 1,
  q: "Qual o país de origem do ornitorrinco?" ,
  a: [{ text: "Turquia", isCorrect: false, isSelected: false },
  { text: "Croacia", isCorrect: false },
  { text: "Japão", isCorrect: false },
  { text: "Australia", isCorrect: true }
  ]

},
{
  id: 2,
  q: "A onça pintada é um animal característico de qual bioma?",
  a: [{ text: "Cerrado", isCorrect: false },
  { text: "Catinga", isCorrect: false },
  { text: "Pantanal", isCorrect: true },
  { text: "Amazonia", isCorrect: false }
  ]
}
]



var start = true;

//Interatividade nas questões
function iterate(id) {


  var result = document.getElementsByClassName("result");
  result[0].innerText = "";


  const question = document.getElementById("question");



  question.innerText = Questions[id].q;

  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');
  const op3 = document.getElementById('op3');
  const op4 = document.getElementById('op4');



  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  

  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  
  var selected = "";

//Cores Do button//---------------------------------------------------------------------------------------
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
  })


  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
  })


  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
  })


  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
  })


  const evaluate = document.getElementsByClassName("evaluate");

//Retorna o valor
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
    } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    }
  })
}

if (start) {
  iterate("0");
}

//
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
  }

})

