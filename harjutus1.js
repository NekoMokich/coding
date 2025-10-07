const age = 16;
if (age >= 18) {
    console.log("Добро пожаловать во взрослую жизнь (и налоги)!");
}else {
    console.log("В холодильнике все появляется само собой!");
}

const tepm = 20;
if (tepm <=-10) {
    console.log("Холодно, сидим дома!");
} else if (tepm < 5) {
    console.log("Прохладно, можно погулять недолго.");
}else {
    console.log("Тепло, скоро весна!");
}

const hasTicket = false;
const hasPass = false;
if (hasTicket && hasPass) {
    console.log("Можно ехать!");
} else if (hasTicket || hasPass) {
    console.log("Подготовь все документы!");
} else {
    console.log("Нужен и билет и паспорт, а у тебя ничего!!");
}

//тернарный оператор
const likes = 50;
const label = likes >= 100 ? "Вы в тренде!": "Вы неудачник!";
console.log(label);

//switch
const day = 3;
switch (day) {
    case 1: console.log("Понедельник, все плохо!"); 
        break; 
    case 2: console.log("Вторник, все еще плохо!");  
        break;
    case 3: console.log("Среда, есть надежда!");
        break;
    case 4: console.log("Четверг, счастье скоро!");
        break;
    case 5: console.log("Пятница, во все тяжкие!");
        break;
    case 6: console.log("Суббота, есть надежда!");
        break;
    case 7: console.log("Воскресенье, ничего не помню!");
        break;
    default: console.log("Календарь сломался!");    
}

if ("") console.log("Ничего не выведется");
if ("ОК") console.log("Строка выведется!");

console.log(0 == false); //проверка на равенстве без учета типов
console.log(0 === false); //строгая проверка на равенство, учитывая тип данных

//циклы
for (let i = 1; i <= 10; i++) {
    console.log("Отжимание № ", i);
}

const snacks = ["яблоко", "банан", "батончик"];
for (let i = 0; i < snacks.length; i++) {
    console.log(i, snacks[i]);
}

for (const snack of snacks) {
    console.log("Вкусный ", snack);
}

let coins = 5;
while (coins > 0) {
    console.log("Добро пожаловать в магазин! Осталось монет ", coins);
    coins--;
    if (coins === 0) {
        console.log("Здесь вам больше не рады!");
    }
}

for (let x = 1; x <=10; x++) {
   if (x % 2 === 1) 
    continue; 
    console.log (x);
    
}

//сумма только положительных
const arr = [-2, 5, 0, -15, 7, 4, -3];
let sum = 0;
for (const x of arr) {
    if (x <= 0) continue;
    sum += x;
}

console.log(sum);

//угадать загаданное число
const secret = Math.floor(Math.random() * 10) +1;
let attems = 5;

while (attems > 0) {
    const guess = Math.floor(Math.random() *10) +1;
    console.log (`Test : ${guess}`);
    if (guess === secret) {
        console.log("Угадал!!!");
        break;
    }
    attems--;
    console.log(guess < secret ? "Больше!":"Меньше!");
}
if (attems === 0) console.log("Не угадал! А было загадано ", secret);

//Матрица
let streak = 0; //серия успешных уклонений подряд

for (let tick = 1; tick <= 20; tick++) {
    const dodged = Math.random() < 0.7; //шанс уклониться 70%

    if (dodged) {
        streak++; //увеличиваем серию уклонений
        console.log(`${tick}: уклонился. Серия: ${streak}`);

        if (streak >= 3) {
            console.log("НЕО победил!!!");
            break;
        }
    }else {
        console.log(`${tick} НЕО все! Матрица победила!`);
        break;
    }
}
