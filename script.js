'use strickt';
 let money = 40000;
let income = 'Инвестиции';
let addExpenses = 'Еда, Коммуналка, Интернет, Такси, Развлечения';
let deposit = true;
let mission = 200000;
let period = 8;
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
let budgetDay = 40000/30;
console.log(budgetDay);



money = prompt('Ваш месячный доход', '40000');
console.log(Number(money));
addExpenses = prompt('Перечислите расходы за рассчитываемый период через запятую', 'Коммуналка, еда, проезд');
console.log(addExpenses);
deposit = confirm('Есть ли у вас депозит в банке');
console.log(deposit);
let expenses1 = prompt('Введите обязательную статью расходов', 'квартплата');
console.log(expenses1);
let amount1 = prompt('Во сколько это обойдётся?', '15000');
console.log(amount1);
let expenses2 = prompt('Введите обязательную статью расходов', 'еда');
console.log(expenses2);
let amount2 = prompt('Во сколько это обойдётся?', '10000');
console.log(amount2);
let budgetMonth = prompt('Бюджет на месяц:', (Number(amount2) + Number(amount1)));
console.log(budgetMonth);
let n = mission / budgetMonth;
console.log('Миссия будет достигнута через ' + n + ' месяцев');
budgetDay = budgetMonth/30;
console.log('Бюджет на день: ' + Math.round(budgetDay));
if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 <= 1200){
    console.log('У вас средний уровень дохода');
} else if (budgetDay >=0 < 600) {
    console.log('У вас низкий уровень дохода');
}else if(budgetDay <0) {
    console.log('Что-то пошло не так');
}


