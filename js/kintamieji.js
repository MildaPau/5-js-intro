 /*
Kintamuju iniciavimo budai:
- var (senas, nenaudoti)
- let (jei del kazkokios priezasties nenaudojam "const", tada galim naudoti si "let")
- const (prioritetinis pasirinkimas visais atvejais)
Kintamuju saugomos reiksmes tipai:
- skaicius (number)
- tekstas (string)
- logine reiksme (boolean)
- sarasas (array [] )
- objektas (object {})
- funkcija (function () {} )
*/

const gimimoMetai = 1900;

console.log(5);
console.log(gimimoMetai);


const pirmas = 2;
const antras = 7;

const suma = pirmas + antras;

console.log(pirmas, antras, suma);

const desimtainis = -2.5;
console.log(desimtainis);

console.log('-----------------');


const vardas = 'Chuck';
console.log(vardas);

const zodis1 = 'Labas';
const zodis2 = 'rytas';

console.log(zodis1, zodis2);

const sakinys = zodis1 + ' ' + zodis2 + '!';
console.log(sakinys);

console.log('-----------------');

/*
galimi variantai inicijuoti tekstine reiksme
*/

const pavarde = 'Pavardenis';
const miestas = "Vilnius";

const kabutes1 = "Tekstas su vienguba (') kabute.";
console.log(kabutes1);

const kabutes2 = 'Tekstas su dvyguba (") kabute.';
console.log(kabutes2);

const kabutes12 = 'Tekstas su vienguba (\') ir su dvyguba (") kabute.';
console.log(kabutes12);

const kabutes21 = "Tekstas su vienguba (') ir su dvyguba (\") kabute.";
console.log(kabutes21);

const kabutes31 = 'Tekstas su vienguba (\') ir su dvyguba (\") kabute.';
console.log(kabutes31);

const kabutes32 = "Tekstas su vienguba (\') ir su dvyguba (\") kabute.";
console.log(kabutes32);

console.log('-----------------');

const dabarTamsu = true;
console.log(dabarTamsu);

const matauAteiti = false;
console.log(matauAteiti);

const iskritoSesetas = false;
console.log(iskritoSesetas);

console.log('-----------------');

const tusciasSarasas = [];
console.log(tusciasSarasas);

const pazymiai = [10, 2, 7, 3, 8];
console.log(pazymiai);

const miestai = ['Anyksciai', 'Birzai', 'Chicago', 'Dotnuva'];
console.log(miestai);

console.log('-----------------');

let gyvenamojiVieta = 'Gedimino pr. 9, Vilnius';
console.log(gyvenamojiVieta);

gyvenamojiVieta = 'Laisves pr. 1, Kaunas';
console.log(gyvenamojiVieta);

gyvenamojiVieta = 'Duonos g. 5, Telsiai';
console.log(gyvenamojiVieta);

console.log('-----------------');

let pinigine = 0;
console.log(pinigine);

pinigine = 0.01;
console.log(pinigine);

pinigine = 1.01;
console.log(pinigine);

pinigine = 1515.49;
console.log(pinigine);

pinigine = 0;
console.log(pinigine);