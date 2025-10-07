// Логическое И (AND) - Конъюнкция &&
// Истинно (возвращает истину) только если оба условия истинны
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

//Логическое умножение (результат может быть только 0 или 1)
/**
 *  1 * 1 = 1
 *  0 * 1 = 0
 *  1 * 0 = 0
 *  0 * 0 = 0
 */

let age = 25;
let hasDriversLicense = true;
//Человек может арендовать машину только если ему больше 18
//и у него есть водительские права.
let canRentCar = age > 18 && hasDriversLicense;
console.log(`Может ли арендовать машину? Ответ: ${canRentCar}`);

//Логическое ИЛИ (OR - ||). Дизъюнкция.
//возвращает истину, если хотя бы одно условие истинно.
console.log("---Логическое ИЛИ. Дизъюнкция---");
console.log("true || true: ", true || true);
console.log("true || false: ", true || false);
console.log("false || true: ", false || true);
console.log("false || fasle: ", false || false);

let hasBusTicket = false;
let hasTrainTicket = true;
//Человек может уехать из Йыхви, если у него есть билет
//на автобус или билет на поезд
let canLeave = hasBusTicket || hasTrainTicket;
console.log(`Может ли человек уехать? Ответ: ${canLeave}`);

/**
 * Логическое сложение ИЛИ
 *  1 + 1 = 1
 *  0 + 1 = 1
 *  1 + 0 = 1
 *  0 + 0 = 0      
 * 
 */

//Логическое НЕ (NOT) операнд - "!""
//Инвертирует (меняет на противоположное) логическое значение.
console.log("---Логическое НЕ (NOT)---");
console.log("!true ", !true);
console.log("!false ", !false);

let isDoorOpen = false;
console.log(`Дверь закрыта? Ответ: ${!isDoorOpen}`);

//Комбинированные примеры 
console.log("---Комбинированные примеры---");

//доступ к закрытому разделу сайта
let isUserAutorized = false;
let accessLevel = "admin";
let hasPremium = true;

//Доступ разрешен, если пользователь авторизован И он является админом
//Или у него есть Премиум-подписка

let isAccessGranted = isUserAutorized && (accessLevel === "admin" || hasPremium);
console.log(`Доступ разрешен? Ответ: ${isAccessGranted}`);

//Пример получения скидки в магазине
let purchaseAmount = 90;
let hasLoyaltyCard = false;
let dayOfWeek = "воскресенье";

//Скидка дается, если сумма покупки болье 100
//И у клиента есть скидочная карта ИЛИ сегодня выходной. 
let hasDiscount = (purchaseAmount > 100 && hasLoyaltyCard) || (dayOfWeek === "суббота" || dayOfWeek === "воскресенье");

console.log(`Получу я скидку? Ответ: ${hasDiscount}`);

//Пример Зомби-апокалипсис
let hasWaepon = false;
let hasShelter = true;
let isFastRunner = true; 

//Чтобы пережить ночь, нужно иметь оружие И (найти укрытие ИЛИ уметь быстро бегать)
let iWillSurvive = hasWaepon && (hasShelter || isFastRunner);
console.log(`Есть ли у тебя шанс выжить? Ответ: ${iWillSurvive}`);

//Пример с драконом
let isKnightBrave = false;
let hasMagicSword = false;
let isDragonSleep = true;

//Герой может забрать золото, если (он храбрый парень И у него есть магический меч)
//ИЛИ если дракон просто спит
let canGetTreasury = (isKnightBrave && hasMagicSword) || isDragonSleep;
console.log(`Я получу сокровище дракона? Ответ: ${canGetTreasury}`);

//Пример агент 007
let knowsCode = true;
let hasCorrectCard = true;
let isLaserActive = true;

//Агент может войти в хранилище, если он знает код И у него правильная карта,
//И лазерная сетка НЕ активна.

let canEnter = knowsCode && hasCorrectCard && !isLaserActive;
console.log(`Агент 007 может войти в хранилище? Ответ ${canEnter}`);

//Пример - организация вечеринки в пятницу
let hasGoodMusic = true;
let hasEnoughDrinks = false; 
let hasBoltDelivery = true; 
let hasFriendsAvailable = true;
let isNaighborAngry = true;
let hasSoundProofing = true;

//условия
//1. Должна быть хорошая музыка И (достаточно напитков ИЛИ доступна доставка еды)
//2. И все друзья могут прийти
//3. И (сосед НЕ злится ИЛИ в квартире звукоизоляция)

let isFantasticParty = (hasGoodMusic && (hasEnoughDrinks || hasBoltDelivery)) && hasFriendsAvailable && (!isNaighborAngry || hasSoundProofing);
console.log(`Вечеринке быть? Ответ: ${isFantasticParty}`);
