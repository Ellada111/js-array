let One = 1;

while (One <= 30) {

    console.log(One);

    One += 2;
}





const Num = [1, 2, 115, 58, 4, 5, 7, 99];

for (let i = 0; i < Num.length; i++) {
    if (Num[i] === 4) {

        alert("ЕСТЬ");
        break;

    };
}


const numbers = [1,2,3,4,5,6,7,8,9, 10];

let s = 0;
while (s < numbers.length) {
    if (numbers[s] > 0 && numbers[s] < 10) {
        console.log(numbers[s]);
    }
    s++;
}