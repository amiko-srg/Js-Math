let intro = alert('Sizga hozir random sonlar chiqishni boshlaydi');

let randomSon = Math.floor(Math.random() * 100) + 1;
alert('Random chiqqan son: ' + randomSon);

let kopaytma = randomSon * 2;
alert('Bu sonni 2 ga ko‘paytirsak: ' + kopaytma);

let bolinma = randomSon / 2;
alert('Bu sonni 2 ga bo‘lsak: ' + bolinma);

let qoldiq = bolinma % 3;
alert('Bu bo‘lingan sonni 3 ga bo‘lganda chiqqan qoldiq: ' + qoldiq);

