const personsNamesForArmy = [];
let firstPerson = {
    name: 'Petya',
    age: 23,
    gender: 'male'
}

if (firstPerson.age >= 18 && firstPerson.age <= 28 && firstPerson.gender === 'male'){
    personsNamesForArmy.push(firstPerson.name);
}else{
    console.log('Вы не подходите');
}

let secondPerson = {
    name: 'Lesha',
    age: 25,
    gender: 'male'
}
if (secondPerson.age >= 18 && secondPerson.age <= 28 && secondPerson.gender === 'male'){
    personsNamesForArmy.push(secondPerson.name);
}else{
    console.log('Вы не подходите');
}

let thirdPerson = {
    name: 'Dima',
    age: 22,
    gender: 'male'
}

if (thirdPerson.age >= 18 && thirdPerson.age <= 28 && thirdPerson.gender === 'male'){
    personsNamesForArmy.push(thirdPerson.name);
}else{
    console.log('Вы не подходите');
}
let fourthPerson = {
    name: 'Andrey',
    age: 29,
    gender: 'male'
}

if (fourthPerson.age >= 18 && fourthPerson.age <= 28 && fourthPerson.gender === 'male'){
    personsNamesForArmy.push(fourthPerson.name);
}else{
    console.log('Вы не подходите');
}

let fifthPerson = {
    name: 'Zhenya',
    age: 25,
    gender: 'female'
}

if (fifthPerson.age >= 18 && fifthPerson.age <= 28 && fifthPerson.gender === 'male'){
    personsNamesForArmy.push(fifthPerson.name);
}else{
    console.log('Вы не подходите');
}


console.log(personsNamesForArmy);
alert(personsNamesForArmy);

