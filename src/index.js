// Electron args
const {remote} = require('electron');
// import Formul from './script';

var win = remote.getCurrentWindow();

// Block for header menu

var a = document.getElementById('close');

a.onclick = function close() { 

	win.close(); 

}; 

/*

	Block of script for raschet, который нужно вынести в module,
	добавляйте сюда новые функции к объекту Formul

 */

Formul = {};

Formul.angleSpeed = function(arg_angleSpeed) {
  var a = arg_angleSpeed;
  return a*2;
}

Formul.test = function(arg_test) {
  var b = arg_test;
  return b*2;
}

// Block of MainContent

const massa = 10;
const scorost = 0.12;

var article = {
   title: "Начальные данные (Вставьте значения)",
   body: `
       <div>
         <p>Показатель мехатронности </p>
         <div>Масса объекта m = 
         	<input 
         		id='input_massa' 
         		class='blyat' 
         		type='text'
         		onchange="console.log(this.value)"
         		placeholder='Введите массу'>
         	</input>
         </div> <!-- Тут коммент для примера -->
         <p>Скорость перемещения рабочих элементов V = ${scorost}</p>
         <p>Минимальный диаметр захватываемого объекта </p>
         <p>Линейное перемещение рабочего элемента </p>
         <img src="src/i/test.png" alt="hello world" />
       </div>
	`,
	title_1: "1. Выбор конструкции",
	body_1: `
       <div>
         <p>Коэффициент приоритета </p>
         <p> Формула k : </p>
       </div>
	`
}

    document.getElementById('mainContent').innerHTML = `
    <section class='mainContent'>
    	<article>
        	<h2>${article.title}</h2>
        	${article.body}
    	</article>
     	<article>
     		<h2>${article.title_1}</h2>
        	${article.body_1}
     	</article>
      	<div class='rasscheti_change'>
      		<p> omega = ${scorost}/7 * p = ${Formul.angleSpeed(scorost)} </p>
      	</div>
      	<div class='test'>
      	
      		<p id='inline__result'> Масса из инпута = </p> <p id="result"></p> 
      	</div>
    </section>
    `
    document.getElementById('footer').innerHTML = `
    <footer class='footer'>
          <p class='p_footer'>copyright ${new Date().getFullYear()} | University of STANKIN  </p> 
    </footer>
    `

 // Робота с инпутами 

	var input = document.getElementById('input_massa')

	// Тут берем значение из инпута и присваиваем его n1. 
	//Объявляем n2  = и пропускаем через формулу(n1)
	input.oninput = function() {
		n1 = input.value;
		var n2 = Formul.test(n1);
		console.log(n2);
    	document.getElementById('result').innerHTML = n2;
  	};

	//document.getElementById('result').value = n1+n2;