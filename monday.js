let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;

let newStr1 = str.replace('ПОНЕДЕЛЬНИК', 'MONDAY')
let newStr2 = newStr1.replace('ВТОРНИК', 'TUESDAY')
let newStr3 = newStr2.replace('СРЕДА', 'WEDNESDAY')
let newStr4 = newStr3.replace('ЧЕТВЕРГ', 'THURSDAY')
let newStr5 = newStr4.replace('ПЯТНИЦА', 'FRIDAY')
let newStr6 = newStr5.replace('СУББОТА', 'SATURDAY')
let newStr7 = newStr6.replace('ВОСКРЕСЕНЬЕ', 'SUNDAY')
console.log(newStr7)