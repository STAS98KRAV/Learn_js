"use strickt";
//функция возвращает и конвертирует любые типы данных в число
let isNumber = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};
let money = 0;
let start = function(){
    do {
        money = prompt('Ваш месячный доход');
    }
    while(!isNumber(money));
};
start();
let appData = {
   income:{},
   addIncome:[],
   deposit:false,
   mission:50000,
   expenses:{},
   addExpenses:[],
   period:0,
   budget: money,
   budgetDay:0,
   budgetMonth:0,
   expensesMonth:0,
   asking: function(){
       let addExpenses = prompt('Расходы за рассчитываемый период через запятую', 'Коммуналка, еда, проезд');
       addExpenses = addExpenses.toLowerCase().split(', ');
       let deposit = confirm('Есть ли у вас депозит в банке');
       for (let i = 0; i < 2; i++){
            let quest = prompt('Введите обязательную статью расходов', 'Квартплата');
            let answer;
            while(!isNumber(answer)){
                answer = prompt('Во сколько это обойдётся');
            }
            //записываем расходы месяц с вопросами по типу квартиру = 3000
            appData.expenses[quest] = Number(answer);
        }   
   },
    //Записываем общую сумму расходов за месяц
    getExpensesMonth: function(){
        for (let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget:function(){
       appData.budgetMonth = appData.budget - appData.expensesMonth;
       appData.budgetDay = appData.budgetMonth / 30; 
    },
    getTargetMonth:function  (){
       appData.period = Math.round (appData.mission / appData.budgetMonth);
       if (appData.period > 0){
           console.log('Цель будет достигнута');   
       } else {
           console.log('Цель не будет достигнута');
       }
    },
   
   getStatusIncome: function() {
       if (appData.budgetDay >= 1200) {
           return('У вас высокий уровень дохода');
       } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200){
           return('У вас средний уровень дохода');
       } else if (appData.budgetDay < 600  && appData.budgetDay >= 0) {
           return('У вас низкий уровень дохода');
       } else if (appData.budgetDay <0) {
           return('Что-то пошло не так');
       }
   },
   
              
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('Цель будет достигнута через: ' + appData.period + 'месяцев');
console.log(appData.getStatusIncome());
for (let key in appData){
    console.log('Наши данные' + appData[key]);
}

// проверка, чтобы было число



// Объявление функции getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
        


// Объявлена функция getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)


//Объявлена переменная accumulatedMonth и ей  присвоен результат вызова функции getAccumulatedMonth




//Объявлена функция getTargetMonth. Подсчитывает за какой период будет достигнута цель



// присвоение переменной budgetDay значение переменной(считается по функции getAccumulatedMonth)/30



//Функция выполняющая условие budgetDay (уровень дохода)




//console.log('Расходы за месяц: ' + appData.expensesAmount);

// Вывод функции расходов за месяц

// Возможные расходы в виде массива








