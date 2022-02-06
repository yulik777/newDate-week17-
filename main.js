let now = new Date(); //строчка создает текущую дату
console.log(now);

let timestamp = new Date(24 * 3600 * 1000); // сдвинуть дату назад (минуты * секунды * дни)
console.log(timestamp);

let date = new Date("2021-01-26"); // еще одна строка создания даты
console.log(date);

let num = new Date(2021, 0, 26); // еще способ содания даты (тут месяцы с нуля начинаются)
console.log(num);

console.log(num.getDate()); //вывести само число
console.log(num.getMonth() + 1); //вывести месяц (начинается с нуля, поєтому дописываем +1)
console.log(num.getFullYear()); //вывести само число

console.log(`${num.getDate()}.${num.getMonth() + 1}.${num.getFullYear()}`); //сет вывода полной даты

num.setFullYear(2022); //дата в другом формате
console.log(num);

let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
};
console.log(new Date().toLocaleString("ua",
    options)); // автоматический вывод даты, но это не самый удобный вариант

let diff = Date.now() - date; //(текущая дата - дату (в верхней фукции указана))
console.log(diff / 1000 /
    3600); // diff (timestap)- разница между датами в  милисикундах поделена на дни и минуты = сколько часов прошло


let dat = new Date(2021, 0, 24, 22, 51);
console.log(dat); // задать дату

function getSecondsToTomorrow() {
    let today = new Date();
    console.log(today);
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    //console.log (tomorrow);
}