"use strickt";

let start = document.getElementById('start');

let calculate = document.getElementById('start');
console.log(calculate);

let incomePlus = document.getElementsByTagName('button')[0];
console.log(incomePlus);

let expensesPlus = document.getElementsByTagName('button')[1];
console.log(expensesPlus);

let depositChek = document.querySelector('#deposit-check');
console.log(depositChek);

let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
console.log(additionalIncomeItem);

let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
console.log(budgetMonthValue);

let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
console.log(budgetDayValue); 

let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
console.log(expensesMonthValue); 

let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
console.log(additionalIncomeValue);

let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
console.log(additionalExpensesValue);

let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
console.log(incomePeriodValue); 

let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
console.log(targetMonthValue);

let salaryAmount = document.querySelector('.salary-amount');
console.log(salaryAmount);

let incomeTitle = document.querySelector('input.income-title');
console.log(incomeTitle);

// let incomeAmount = document.querySelector('.income-amount');
// console.log(incomeAmount);

let expensesTitle = document.querySelector('input.expenses-title');
console.log(expensesTitle);

let expensesItems = document.querySelectorAll('.expenses-items');
//console.log(expensesAmount);

let additionalExpensesItem = document.querySelector('.additional_expenses-item');

let targetAmount = document.querySelector('.target-amount');
console.log(targetAmount);

let periodSelect = document.querySelector('.period-select');
console.log(periodSelect);

let periodAmount = document.querySelector('.period-amount');

let incomeItems = document.querySelectorAll('.income-items');
//функция возвращает и конвертирует любые типы данных в число
let isNumber = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};
//let money = 0;

let appData = {
   income:{},
   addIncome:[],
   deposit:true,
   percentDeposit:0,
   incomeMonth:0,
   moneyDeposit:0,
   expenses:{},
   addExpenses:[],
   budget:0,
   budgetDay:0,
   budgetMonth:0,
   expensesMonth:0,
   start: function(){
       
       appData.budget = +salaryAmount.value;
       //console.log('salaryAmount.value: ', salaryAmount.value);
       appData.getExpenses();


        // appData.asking();
        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getIncome();
        appData.getBudget();
        appData.showResult();
    },
    showResult: function (){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.ceil(appData.budgetDay);
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(',');
        additionalIncomeValue.value = appData.addIncome.join(',');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
    },

    addexpensesBlock: function(){
        //console.log(expensesItems.parentNode);
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function(){
        incomeItems.forEach(function(item){
            let titleIncome = item.querySelector('.income-title').value;
            let amountIncome = item.querySelector('.income-amount').value;
            if (titleIncome !== '' && amountIncome !== ''){
                appData.income[titleIncome] = amountIncome;
            }
        });
        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
               appData.addExpenses.push(item); 
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
      
    //Записываем общую сумму расходов за месяц
    getExpensesMonth: function(){
        for (let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function(){
       appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
       appData.budgetDay = appData.budgetMonth / 30; 
    },
    getTargetMonth: function  (){
        return targetAmount.value / appData.budgetMonth;
       
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
   getInfoDeposit: function(){
       if(appData.deposit){
        //    appData.percentDeposit = prompt('Какой у вас процент?', '10');
        //    appData.moneyDeposit = prompt ('Какая сумма вашего депозита?', '10000');
           do {
            appData.percentDeposit = prompt('Какой у вас процент?', '10');
           } while (!isNumber(appData.percentDeposit));
           do {
            appData.moneyDeposit = prompt ('Какая сумма вашего депозита?', '10000');
           } while (!isNumber(appData.moneyDeposit));
       }
   },
   calcPeriod:function(){
       return appData.budgetMonth * periodSelect.value;
   }
              
};

start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addexpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', function(){
    periodAmount.textContent = periodSelect.value;
});
start.disabled=true;

salaryAmount.addEventListener('input', function(){
    
    if(salaryAmount.value === '')
        start.disabled = true;
    else
        start.disabled = false;
});
//appData.getTargetMonth();
// console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('Цель будет достигнута через: ' + appData.period + 'месяцев');
// console.log(appData.getStatusIncome());
for (let key in appData){
    console.log('Наши данные' + appData[key]);
}
//appData.getInfoDeposit();
//console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
// проверка, чтобы было число
//console.log(appData.addExpenses);


// // Объявление функции getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
        


// // Объявлена функция getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)


// //Объявлена переменная accumulatedMonth и ей  присвоен результат вызова функции getAccumulatedMonth




// //Объявлена функция getTargetMonth. Подсчитывает за какой период будет достигнута цель



// // присвоение переменной budgetDay значение переменной(считается по функции getAccumulatedMonth)/30



// //Функция выполняющая условие budgetDay (уровень дохода)




// //console.log('Расходы за месяц: ' + appData.expensesAmount);

// // Вывод функции расходов за месяц

// // Возможные расходы в виде массива








