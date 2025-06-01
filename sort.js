
let litmir = [
    { author: 'Orwell', title: '1984' },
    { author: 'Nesbo', title: 'Knife' },
    { author: 'Caroll', title: 'Alice in Wonderland' },
    { author: 'Gogol', title: 'Viy' }
];

function sortByTitle(arr) {
    return arr.slice().sort((a, b) => a.title.localeCompare(b.title));
}

let sortedLitmir = sortByTitle(litmir);
console.log(sortedLitmir);

let results = [
    { name: 'Vasya', points: 150 },
    { name: 'Moshe', points: 120 },
    { name: 'Lisa', points: 100 },
    { name: 'Boruh', points: 150 },
    { name: 'Sam', points: 120 },
    { name: 'Lida', points: 200 },
];

results.sort((a, b) => {
    if (b.points !== a.points) {
        return b.points - a.points;
    }
    return a.name.localeCompare(b.name);
});

console.log(results);
