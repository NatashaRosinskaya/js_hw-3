//Задание 1
let a = 1;
while (a <= 50){
    console.log (a);
    a++;
}

let a1 = 35;
while (a1 >= 8){
    console.log (a1);
    a1--;
}

//Задание 2
let a2 = 89;
while (a2 >= 11){
    console.log (a2);
    a2--;
}

//Задание 3
let a3 = 100;
let sum3 = 0;
for (let i3 = 1; i3 <= a3; i3++){
    sum3 += i3;
}
console.log (sum3);

//Задание 4
let a4 = 5;
let sum4 = 0;
for (let i4 = 1; i4 <= a4; i4++){
    sum4 = 0;

    for (let j4 = 1; j4 <= i4; j4++){
        sum4 += j4;
    }
    console.log ('Sum ' + i4 + ' = ' + sum4);
}

//Задание 5
let a5 = 6;
while (a5 <= 56){
    a5++;
    if (a5 % 2 !=0) continue;
    console.log(a5);    
}

for (let a6 = 8; a6 <= 56; a6++){
    if (a6 % 2 != 0) continue;
    console.log(a6);
}

//Задание 6
for (let b = 2; b <= 10; b++){

    for (let d = 1; d <= 10; d++)
 
    console.log(b + '*' + d + '=' + b * d); 
}


//Задание 7
let n = 1000,
    num = 0;

while (n > 50){
    n = n / 2;
    num++;
    console.log(num + ' раз');
    console.log(n);

}

//Задание 8
let sum_p = 0;
let p;
let q = 0;
let av;
while (true) {
    p = prompt('Введите число');
    if (isNaN(+p)){
        alert('Ошибка ввода');
    }
    if (p === '0' || p === ' ') {break
    };
    q++
    sum_p = sum_p + +p;
    av = sum_p / q;

}
console.log('Сумма чисел = '+ sum_p);
console.log('Среднее арифметическое = '+ av);

