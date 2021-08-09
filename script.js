"use strickt";
let income = 'Инвестиции';
let deposit = true;
let mission = 200000;

// функция возвращает и конвертирует любые типы данных в число
let isNumber = function(n){
    return !isNaN(parseFloat(n) && isFinite(n));
};



let money;

let addExpenses = prompt('Перечислите расходы за рассчитываемый период через запятую', 'Коммуналка, еда, проезд');

deposit = confirm('Есть ли у вас депозит в банке');


// проверка, чтобы было число
let expenses = [];

let start = function(){
    do {
        money = prompt('Ваш месячный доход');
    }
    while(isNaN(parseFloat(money)));
};
start();
// Объявление функции getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
let expenses1,expenses2, sumRead, sumRead1;
let getExpensesMonth = function(){
    let sum = 0;

    for (let i = 0; i < 2; i++){
        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов', 'Квартплата');
            while(!isNumber(sumRead)){
                sumRead = prompt('Во сколько это обойдётся');
            
            }
            sum += Number(sumRead);
        }
          
        if (i===1){
            expenses2 = prompt('Введите обязательную статью расходов', 'Еда');
            while(!isNumber(sumRead1)){
                sumRead1 = prompt('Во сколько это обойдётся');
            }
            sum += Number(sumRead1);
        } 
    }
    return sum;                              // Функция возвращает обязательные расходы
};               
let expensesAmount =getExpensesMonth(); 


// Объявлена функция getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth (){
    return Number(money) - expensesAmount;

 }

 //Объявлена переменная accumulatedMonth и ей  присвоен результат вызова функции getAccumulatedMonth

 let accumulatedMonth = getAccumulatedMonth();
 getAccumulatedMonth();


//Объявлена функция getTargetMonth. Подсчитывает за какой период будет достигнута цель

function getTargetMonth (){
    return Math.round (mission / accumulatedMonth);
    
}

// присвоение переменной budgetDay значение переменной(считается по функции getAccumulatedMonth)/30
let budgetDay = accumulatedMonth/30;


// Функция показывает типы данных
function showTypeOf(data){
    console.log (data, typeof(data));
}

//Функция выполняющая условие budgetDay (уровень дохода)
let getStatusIncome = function() {
    if (budgetDay >= 1200) {
        return('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay < 1200){
        return('У вас средний уровень дохода');
    } else if (budgetDay < 600  && budgetDay >= 0) {
        return('У вас низкий уровень дохода');
    } else if (budgetDay <0) {
        return('Что-то пошло не так');
    }
};


// Вывод функции showTypeOf
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Расходы за месяц: ' + expensesAmount);

// Вывод функции расходов за месяц
// getExpensesMonth();          
// console.log('Расходы за месяц: ' + getExpensesMonth());

// Возможные расходы в виде массива
console.log(addExpenses.split(', '));


if (getTargetMonth()>=0){
    console.log ('Цель будет достигнута через ' + getTargetMonth() + ' месяцев');
}else if (getTargetMonth()<0) {
    console.log('Цель не будет достигнута');
}


console.log('Ваш дневной бюджет: ' + Math.round (budgetDay));

console.log(getStatusIncome());


