const people = [{
    id: 1,
    name: 'Nikita',
    age: 22,
    moneyAmount: 600,
    desiredAlcoholName: 'whisky',
    desiredAlcoholAmount: 25,
},
{
    id: 2,
    name: 'Anya',
    age: 22,
    moneyAmount: 300,
    desiredAlcoholName: 'wine',
    desiredAlcoholAmount: 15,
},{
    id: 3,
    name: 'Tanya',
    age: 24,
    moneyAmount: 20,
    desiredAlcoholName: 'rum',
    desiredAlcoholAmount: 20,
},{
    id: 4,
    name: 'Angelina',
    age: 18,
    moneyAmount: 10,
    desiredAlcoholName: 'vodka',
    desiredAlcoholAmount: 5,
},{
    id: 5,
    name: 'Alexandr',
    age: 23,
    moneyAmount: 100,
    desiredAlcoholName: 'gin',
    desiredAlcoholAmount: 2,
},{
    id: 6,
    name: 'Ivan',
    age: 16,
    moneyAmount: 100,
    desiredAlcoholName: 'vodka',
    desiredAlcoholAmount: 2,
},{
    id: 7,
    name: 'Danya',
    age: 17,
    moneyAmount: 100,
    desiredAlcoholName: 'vodka',
    desiredAlcoholAmount: 2,
},{
    id: 8,
    name: 'Nikita',
    age: 22,
    moneyAmount: 400,
    desiredAlcoholName: 'tequila',
    desiredAlcoholAmount: 10,
}];

const alcoholPriceForOneItem = {
    whisky: 23, 
    wine: 15,
    gin: 22,
    tequila: 25,
    vodka: 20,
    rum: 24
};

const LEGAL_AGE = 18


function getLegalAgePeople(people) {
    return people.age >= LEGAL_AGE
 };
 const legalAgePeople = people.filter(getLegalAgePeople);

 function getPeopleWhoHaveMoneyForAlcohol(legalAgePeople) {
    return legalAgePeople.moneyAmount >= legalAgePeople.desiredAlcoholAmount * alcoholPriceForOneItem[legalAgePeople.desiredAlcoholName]
};
const peopleWhoHaveMoney = legalAgePeople.filter(getPeopleWhoHaveMoneyForAlcohol);

function buyAlcohol(peopleWhoHaveMoney) {
    return peopleWhoHaveMoney.name + ' ' +
    'bought ' + peopleWhoHaveMoney.desiredAlcoholAmount + ' ' +
    'bottles of ' + peopleWhoHaveMoney.desiredAlcoholName + ' ' +
    'for ' +( peopleWhoHaveMoney.desiredAlcoholAmount * alcoholPriceForOneItem[peopleWhoHaveMoney.desiredAlcoholName] + ' ' + '$.' ) 
};

const whoWhatBuy = peopleWhoHaveMoney.map(buyAlcohol)