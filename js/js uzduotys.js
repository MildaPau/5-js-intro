/*  1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console 
*/

/* 1. */
const sk1 = 7;
const sk2 = 5;
const sk3 = 9;

const sum = sk1 + sk2 + sk3;

console.log(sk1, sk2, sk3, sum);
console.log(sum);

const sum2 = sk1 + sk2 - sk3;
console.log(sum2);

console.log('-----------------');
/* 2. */

const z1 = 'Išaušo';
const z2 = 'puiki';
const z3 = 'diena';

const t = ' ';

const sakinys = z1 + t + z2 + t + z3 + '!';
console.log(sakinys);

console.log('-----------------');
/* 3. */

const pazymiai = [8, 6, 9, 3, 10];
console.log(pazymiai)

const medziai = ['liepa', 'egle', 'azuolas', 'berzas', 'drebule'];
console.log(medziai);

console.log('-----------------');

/*  1. Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
    2.Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
    3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
    4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

/* 1. */
const n1 = 3;
const n2 = 5;
const n3 = 3;
const n4 = 10;
const n5 = 9;  

const sum3 = n2 - n3 + n4 - n5 / n1;
console.log(sum3);

console.log('-----------------');
/* 2. */
const w1 = 'Ar';
const w2 = 'siandien';
const w3 = 'lauke';
const w4 = 'salta';

const s = ' ';

const klausimas = w1 + s + w2 + s + w3 + s + w4 + s + '?';
console.log(klausimas);

console.log('-----------------');
/* 3. */
// skaiciavimo logika: 1-2+3-4+5

const numbers = [ -2, 4, 5, -6, 7];

// 1) pirmasis "tiesioginis" budas
const alterSum1 = numbers[0] - numbers[1] + numbers[2] - numbers[3] + numbers[4];
console.log(alterSum1);

// 2) antrasis budas, kai issitraukiame reiksmes pries jas panaudojant
const nr1 = numbers[0];
const nr2 = numbers[1];
const nr3 = numbers[2];
const nr4 = numbers[3];
const nr5 = numbers[4];

const altersum2 = nr1 - nr2 + nr3 - nr4 + nr5;
console.log(altersum2);

// 3) treciasis "pazingsniui" skaiciavimo budas
let altersum3 = 0;

altersum3 = altersum3 + numbers[0];
altersum3 = altersum3 - numbers[1];
altersum3 = altersum3 + numbers[2];
altersum3 = altersum3 - numbers[3];
altersum3 = altersum3 + numbers[4];

console.log(altersum3);

// 4) ketvirtas "pazingsniui" skaiciavimo budas

let altersum4 = 0;
let index = 0;
altersum4 = altersum4 + numbers[index]; // 0 + numbers [0]; 0+-2=-2

index = index + 1;
altersum4 = altersum4 + numbers[index]; // -2 + [1]; -2 + 4 = 2

index = index + 1;
altersum4 = altersum4 + numbers[index]; // 2 + [2]; 2 + 5 = 7

index = index + 1;
altersum4 = altersum4 + numbers[index]; // 7 + [3]; 7 + -6 = 1

index = index + 1;
altersum4 = altersum4 + numbers[index]; // 1 + [4]; 1 + 7 = 8

console.log(altersum4);

// 6a) sestas "pusiau automatinis" dar labiau optimizuotas sumavimo budas
let altersum6 = 0;
let index6 = -1;

// ++ atitinka +1 

altersum6 += numbers[++index6]; // 0 + numbers[0]; 0 + -2 = -2
altersum6 += numbers[++index6]; // -2 + number[1]; -2 + 4 = 2
altersum6 += numbers[++index6]; // 2 + number[2]; 2 + 5 = 7
altersum6 += numbers[++index6]; // 7 + number[3]; 7 + -6 = 1
altersum6 += numbers[++index6]; // 1 + number[4]; 1 + 7 = 8

console.log(altersum6);


