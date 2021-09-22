"use strickt";

const start = document.getElementById('start');

const calculate = document.getElementById('start');
console.log(calculate);

const incomePlus = document.getElementsByTagName('button')[0];
console.log(incomePlus);

const expensesPlus = document.getElementsByTagName('button')[1];
console.log(expensesPlus);

const depositChek = document.querySelector('#deposit-check');
console.log(depositChek);

const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
console.log(additionalIncomeItem);

const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
console.log(budgetMonthValue);

const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
console.log(budgetDayValue); 

const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
console.log(expensesMonthValue); 

const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
console.log(additionalIncomeValue);

const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
console.log(additionalExpensesValue);

const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
console.log(incomePeriodValue); 

const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
console.log(targetMonthValue);

const salaryAmount = document.querySelector('.salary-amount');
console.log(salaryAmount);

const incomeTitle = document.querySelector('input.income-title');
console.log(incomeTitle);

// let incomeAmount = document.querySelector('.income-amount');
// console.log(incomeAmount);

const expensesTitle = document.querySelector('input.expenses-title');
console.log(expensesTitle);

let expensesItems = document.querySelectorAll('.expenses-items');
//console.log(expensesAmount);

const additionalExpensesItem = document.querySelector('.additional_expenses-item');

const targetAmount = document.querySelector('.target-amount');
console.log(targetAmount);

const periodSelect = document.querySelector('.period-select');
console.log(periodSelect);

const resultIncomePeriod = document.querySelector('.result-income_period');
console.log(resultIncomePeriod);

const depositСheck = document.querySelector('#deposit-check');

const periodAmount = document.querySelector('.period-amount');

let incomeItems = document.querySelectorAll('.income-items');

const allInput = document.querySelectorAll('input[type="text"]');
console.log(allInput);

const btnCanсel = document.getElementById('cancel');
//console.log(btnCanсel);
//функция возвращает и конвертирует любые типы данных в число
let isNumber = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};
//let money = 0;

class AppData {
    constructor(){
        this.income = {};
        this.addIncome = [];
        this.deposit = true;
        this.percentDeposit = 0;
        this.incomeMonth = 0;
        this.moneyDeposit = 0;
        this.expenses = {};
        this.addExpenses = [];
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
    }
    start (){
       
        this.budget = +salaryAmount.value;
        //console.log('salaryAmount.value: ', salaryAmount.value);
        this.getExpenses();
    
    
         // appData.asking();
         this.getExpenses();
         this.getExpensesMonth();
         this.getAddExpenses();
         this.getAddIncome();
         this.getIncome();
         this.getBudget();
         this.showResult();
     }
    showResult (){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.ceil(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(',');
        additionalIncomeValue.value = this.addIncome.join(',');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        //resultIncomePeriod.value = this.resultIncomePeriod;
        document.querySelectorAll('input[type=text]').forEach( function(item){
            item.disabled = true;
        });
        btnCanсel.style.display = 'block';
        start.style.display = 'none';
    }
    //отрабатывает когда нажимается кнопка сбросить
    reset(){
        start.disabled = true;
        btnCanсel.style.display = 'block';
        start.style.display = 'none';
        document.querySelectorAll('input[type=text]').forEach( function(item){
            item.disabled = false;
            item.value = '';
        });
        /*
        * Еще необходимо раскрыть две кнопки плюс
        удалить лишние поля обязательных расходов и доходов
        все делается в этом методе(функции cancel)
        пример можно посмотреть в addIncomeBlock или addExpensesBlock
        */
        expensesPlus.style.display = 'block';
        incomePlus.style.display = 'block';
        incomeItems.forEach(function(item, index){
            if(index > 0){
                item.remove(); 
            } 
        });
        //удаление полей
        expensesItems.forEach(function(item, index){
            if(index > 0){
                item.remove(); 
            }
        });
        this.income = {};
        this.addIncome = [];
        this.deposit = true;
        this.percentDeposit = 0;
        this.incomeMonth = 0;
        this.moneyDeposit = 0;
        this.expenses = {};
        this.addExpenses = [];
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
        periodSelect.value = 0;
        periodAmount.textContent = 1;
        start.style.display = 'block';
        btnCanсel.style.display = 'none';
        depositСheck.checked = false;
        // if(depositCheckmark === true){
        //     depositCheckmark.value = false;
        // }
    }
    //нажатие на кнопку + 
    addexpensesBlock (){
        //console.log(expensesItems.parentNode);
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    }
        //нажатие на кнопку + второй
    addIncomeBlock (){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    }
    getExpenses (){
        let _this = this;
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== ''){
                _this.expenses[itemExpenses] = cashExpenses;
            }
        });
    }
    getIncome (){
        let _this = this;
        incomeItems.forEach(function(item){
            let titleIncome = item.querySelector('.income-title').value;
            let amountIncome = item.querySelector('.income-amount').value;
            if (titleIncome !== '' && amountIncome !== ''){
                _this.income[titleIncome] = amountIncome;
            }
        });
        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    }
    getAddExpenses (){
        let addExpenses = additionalExpensesItem.value.split(',');
        let _this = this;
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
               _this.addExpenses.push(item); 
            }
        });
    }
    getAddIncome (){
        let _this = this;
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                _this.addIncome.push(itemValue);
            }
        });
    }
      
    //Записываем общую сумму расходов за месяц
    getExpensesMonth (){
        for (let key in this.expenses){
            this.expensesMonth += +this.expenses[key];
        }
    }
    getBudget (){
       this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
       this.budgetDay = this.budgetMonth / 30; 
    }
    getTargetMonth (){
        return targetAmount.value / this.budgetMonth;
       
    }
    
    getStatusIncome () {
       if (this.budgetDay >= 1200) {
           return('У вас высокий уровень дохода');
       } else if (this.budgetDay >= 600 && this.budgetDay < 1200){
           return('У вас средний уровень дохода');
       } else if (this.budgetDay < 600  && this.budgetDay >= 0) {
           return('У вас низкий уровень дохода');
       } else if (this.budgetDay <0) {
           return('Что-то пошло не так');
       }
    }
    getInfoDeposit (){
       if(this.deposit){
        //    appData.percentDeposit = prompt('Какой у вас процент?', '10');
        //    appData.moneyDeposit = prompt ('Какая сумма вашего депозита?', '10000');
           do {
            this.percentDeposit = prompt('Какой у вас процент?', '10');
           } while (!isNumber(this.percentDeposit));
           do {
            this.moneyDeposit = prompt ('Какая сумма вашего депозита?', '10000');
           } while (!isNumber(this.moneyDeposit));
       }
    }
    calcPeriod (){
       return this.budgetMonth * periodSelect.value;
    }
    eventsListeners (){
        start.addEventListener('click', this.start.bind(this));
    btnCanсel.addEventListener('click', this.reset.bind(this));
    
    //depositCheckmark.addEventListener('click', appData.deposit);
    
    expensesPlus.addEventListener('click', this.addexpensesBlock);
    incomePlus.addEventListener('click', this.addIncomeBlock);
    let _this = this;
    periodSelect.addEventListener('input', function(){
        periodAmount.textContent = periodSelect.value;
        incomePeriodValue.value = _this.calcPeriod();
    });
    resultIncomePeriod.addEventListener('input', function period(){
        return periodAmount * periodSelect.value;
    });
    
    start.disabled = true;
    
    
    salaryAmount.addEventListener('input', function(){
        
        if(salaryAmount.value === '')
            start.disabled = true;
        else
            start.disabled = false;
    });
    //appData.getTargetMonth();
    // console.log('Расходы за месяц: ', appData.expensesMonth);
    console.log('Цель будет достигнута через: ' + this.period + 'месяцев');
    // console.log(appData.getStatusIncome());
    for (let key in this){
        console.log('Наши данные' + this[key]);
    }
    }
    
}
const appData = new AppData();
    appData.eventsListeners();
    console.log(appData);
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








