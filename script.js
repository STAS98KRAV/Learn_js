"use strickt";

let calculate = document.getElementById('start');
console.log(calculate);

let btnIncomeAdd = document.getElementsByTagName('button')[0];
console.log(btnIncomeAdd);

let btnExpensesAdd = document.getElementsByTagName('button')[1];
console.log(btnExpensesAdd);

let depositChek = document.querySelector('#deposit-check');
console.log(depositChek);

let incomeItemfield = document.querySelectorAll('.additional_income-item');
console.log(incomeItemfield);

let budgetMonthValue = document.getElementsByClassName('budget_month-value');
console.log(budgetMonthValue);

let budgetDayValue = document.getElementsByClassName('budget_day-value');
console.log(budgetDayValue); 

let expensesMonthValue = document.getElementsByClassName('expenses_month-value');
console.log(expensesMonthValue); 

let additionalIncomeValue = document.getElementsByClassName('additional_income-value');
console.log(additionalIncomeValue);

let additionalexpensesValue = document.getElementsByClassName('additional_expenses-value');
console.log(additionalexpensesValue);

let incomePeriodValue = document.getElementsByClassName('income_period-value');
console.log(incomePeriodValue); 

let targetMonthValue = document.getElementsByClassName('target_month-value');
console.log(targetMonthValue);

let salaryAmount = document.querySelector('.salary-amount');
console.log(salaryAmount);

let incomeTitle = document.querySelector('[placeholder="Наименование"]');
console.log(incomeTitle);

let incomeAmount = document.querySelector('.income-amount');
console.log(incomeAmount);

let expensesTitle = document.querySelector('.expenses-title[placeholder="Наименование"]');
console.log(expensesTitle);

let expensesAmount = document.querySelector('.expenses-amount');
console.log(expensesAmount);

let additionalExpensesValue = document.querySelector('.additional_expenses-item');
console.log(additionalExpensesValue);

let targetAmount = document.querySelector('.target-amount');
console.log(targetAmount);

let periodSelect = document.querySelector('.period-select');
console.log(periodSelect);

// //функция возвращает и конвертирует любые типы данных в число
// let isNumber = function(n){
//    return !isNaN(parseFloat(n)) && isFinite(n);
// };
// let money = 0;
// let start = function(){
//     do {
//         money = prompt('Ваш месячный доход');
//     }
//     while(!isNumber(money));
// };
// start();
// let appData = {
//    income:{},
//    addIncome:[],
//    deposit:true,
//    percentDeposit:0,
//    moneyDeposit:0,
//    mission:50000,
//    expenses:{},
//    addExpenses:[],
//    period:0,
//    budget: money,
//    budgetDay:0,
//    budgetMonth:0,
//    expensesMonth:0,
//    asking: function(){
//        if(confirm('Есть ли у вас дополнительный заработок?')){
//            //let itemIncome = prompt('Какой у вас есть дополнительный зароботок');
//            //let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
//            //appData.income[itemIncome] = cashIncome;
//            for (let i = 0; i < 2; i++){
//                 let quest;
//                 let answer;
//                 //quest = prompt('Какой у вас есть дополнительный зароботок');
//                 do {
//                     quest = prompt('Какой у вас есть дополнительный зароботок');
//                 } while(isNumber(quest));
//                 do {
//                     answer = prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
//                 } while(!isNumber(answer));
//                 //записываем расходы месяц с вопросами по типу квартиру = 3000
//                 appData.income[quest] = answer;
//             }   
//        }
//        let addExpenses = prompt('Расходы за рассчитываемый период через запятую');
//        let toUpperCaseString = [];
//        addExpenses.split(', ').forEach(function(item){
//            toUpperCaseString.push(item.trim()[0].toUpperCase() + item.trim().slice(1)); 
//        });
//        appData.addExpenses = toUpperCaseString;
//        let deposit = confirm('Есть ли у вас депозит в банке');
//        for (let i = 0; i < 2; i++){
//             let quest;
//             let answer;
//             do {
//                quest = prompt('Введите обязательную статью расходов', 'Квартплата');
//             }while(isNumber(quest));
//             do{
//                 answer = +prompt('Во сколько это обойдётся');
//             }while(!isNumber(answer));
//             //записываем расходы месяц с вопросами по типу квартиру = 3000
//             appData.expenses[quest] = answer;
//         }   
//    },
//     //Записываем общую сумму расходов за месяц
//     getExpensesMonth: function(){
//         for (let key in appData.expenses){
//             appData.expensesMonth += appData.expenses[key];
//         }
//     },
//     getBudget: function(){
//        appData.budgetMonth = appData.budget - appData.expensesMonth;
//        appData.budgetDay = appData.budgetMonth / 30; 
//     },
//     getTargetMonth: function  (){
//        appData.period = Math.round (appData.mission / appData.budgetMonth);
//        if (appData.period > 0){
//            console.log('Цель будет достигнута');   
//        } else {
//            console.log('Цель не будет достигнута');
//        }
//     },
   
//    getStatusIncome: function() {
//        if (appData.budgetDay >= 1200) {
//            return('У вас высокий уровень дохода');
//        } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200){
//            return('У вас средний уровень дохода');
//        } else if (appData.budgetDay < 600  && appData.budgetDay >= 0) {
//            return('У вас низкий уровень дохода');
//        } else if (appData.budgetDay <0) {
//            return('Что-то пошло не так');
//        }
//    },
//    getInfoDeposit: function(){
//        if(appData.deposit){
//         //    appData.percentDeposit = prompt('Какой у вас процент?', '10');
//         //    appData.moneyDeposit = prompt ('Какая сумма вашего депозита?', '10000');
//            do {
//             appData.percentDeposit = prompt('Какой у вас процент?', '10');
//            } while (!isNumber(appData.percentDeposit));
//            do {
//             appData.moneyDeposit = prompt ('Какая сумма вашего депозита?', '10000');
//            } while (!isNumber(appData.moneyDeposit));
//        }
//    },
//    calcSavedMoney:function(){
//        return appData.budgetMonth * appData.period;
//    }
              
// };
// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();
// appData.getTargetMonth();
// console.log('Расходы за месяц: ', appData.expensesMonth);
// console.log('Цель будет достигнута через: ' + appData.period + 'месяцев');
// console.log(appData.getStatusIncome());
// for (let key in appData){
//     console.log('Наши данные' + appData[key]);
// }
// appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
// // проверка, чтобы было число
// console.log(appData.addExpenses);


// // Объявление функции getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
        


// // Объявлена функция getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)


// //Объявлена переменная accumulatedMonth и ей  присвоен результат вызова функции getAccumulatedMonth




// //Объявлена функция getTargetMonth. Подсчитывает за какой период будет достигнута цель



// // присвоение переменной budgetDay значение переменной(считается по функции getAccumulatedMonth)/30



// //Функция выполняющая условие budgetDay (уровень дохода)




// //console.log('Расходы за месяц: ' + appData.expensesAmount);

// // Вывод функции расходов за месяц

// // Возможные расходы в виде массива








