// Electron args
const {remote} = require('electron');
// import Formul from './script';

const foo from "foo";
const bar from "bar";

console.log(
  bar.hello("rhino")
  );

foo.awesome();

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

// Block of MainContent, шаблонизация

const massa = 10;
const scorost = 0.12;

var article = {
   title: "Начальные данные",
   body: `
       <div>
         <div>Показатель мехатронности J = 
          <input 
            id='input_mechatronicity' 
            class='mechatronicity' 
            type='text'
            onchange="console.log(this.value)"
            placeholder='n1'>
          </input>
          ...
          <input 
            id='input_mechatronicity_2' 
            class='mechatronicity' 
            type='text'
            onchange="console.log(this.value)"
            placeholder='n2'>
          </input>
         </div>
         <div>Масса объекта m = 
         	<input 
         		id='input_massa' 
         		class='blyat' 
         		type='text'
         		onchange="console.log(this.value)"
         		placeholder='Введите массу'>
         	</input>
          кг
         </div> 
         <!--<p>Скорость перемещения рабочих элементов V = ${scorost}</p>-->
         <div>Скорость перемещения рабочих элементов V = 
          <input 
            id='input_velocity' 
            class='blyat' 
            type='text'
            onchange="console.log(this.value)"
            placeholder='Введите скорость'>
          </input>
           м/с
         </div> 
         <div>Минимальный диаметр захватываемого объекта D =
          <input 
            id='input_diameter' 
            class='blyat' 
            type='text'
            onchange="console.log(this.value)"
            placeholder='Введите диаметр'>
          </input>
          мм
         </div>
         <div>Линейное перемещение рабочего элемента h = 
          <input 
            id='input_motion' 
            class='blyat' 
            type='text'
            onchange="console.log(this.value)"
            placeholder='Введите перемещение'>
          </input>
          мм
         </div>
         <img src="src/i/test.png" alt="hello world" class='mainImg' />
         <p class='mainImg__inscription'>Рис. 1. Схема ММ.</p>
       </div>
	`,
	title_1: "1. Выбор конструкции",
	body_1: `
       <div>
         <p>Коэффициент приоритета: </p>
         <p>ФОРМУЛА K, которая имеет какой-то вид </p>
          <div> Nf =
          <input 
            id='input__Nf' 
            class='blyat' 
            type='text'
            onchange="console.log(this.value)"
            placeholder='Введите n1'>
          </input>
          - число функциональных преобразований;
         </div>
         <div> Nb =
          <input 
            id='input__Nb' 
            class='blyat' 
            type='text'
            onchange="console.log(this.value)"
            placeholder='Введите n2'>
          </input>
          число базовых конструктивных элементов;
          <p>k - коэффициент приоритета;</p>
          <p>J = 09...33  - показатель мехатронности.</p>
         </div>
         <div> Kmin = 
         </div>
         <div> Kmax = 
         </div>
         <p>Округляем до целых чисел в меньшую (слева) и большую (справа) стороны.</p>
         <p>k = 0,1,2,3</p>

        <div class='rasscheti_change'>
          <p> &#969 = ${scorost}/7 * p = ${Formul.angleSpeed(scorost)} </p>
        </div>
        <div class='test'>
          <p id='inline__result'> Масса из инпута = </p> <p id="result"></p> 
        </div>

       </div>
	`
}

// Часть которая выбирает айдишник

    document.getElementById('mainContent').innerHTML = `
    <section class='mainContent'>
    	<article>
        	<h2>${article.title}</h2>
        	${article.body}
    	</article>
    </section>
    `

    document.getElementById('mainContent__1').innerHTML = `
    <section>
      <article>
        <h2>${article.title_1}</h2>
          ${article.body_1}
      </article>
    </section>
    `

    document.getElementById('footer').innerHTML = `
    <footer class='footer'>
          <p class='p_footer'>copyright ${new Date().getFullYear()} | University of STANKIN  </p> 
    </footer>
    `

 // РАБОТА С ИНПУТАМИ

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

  var Nf = document.getElementById('input__Nf');
  var Nb = document.getElementById('input__Nb');

  Nf.oninput = function() {
    var__Nf = input.value;
    var var__Nf2 = Formul.test(var__Nf);
  };
  Nb.oninput = function() {
    var__Nb = input.value;
    var var__Nb2 = Formul.test(var__Nb);
  };


