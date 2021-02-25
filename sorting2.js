const peeps = [
    {
        first: 'agent',
        last: 'smith'
    },
    {
        first: 'mister',
        last: 'anderson'
    },
    {
        first: 'mister',
        last: 'mister'
    },
    {
        first: 'agnes',
        last: 'smith'
    },
    {
        first: 'mister',
        last: 'mister'
    }
];

const lastThenFirst = (a, b) => {
    if (a.last < b.last) {
        return -1;
    } else if (a.last > b.last) {
        return 1;
    } else {
        // same last name, sort by first name
        if (a.first < b.first) {
            return -1;
        } else if (a.first > b.first) {
            return 1;
        } else {
            return 0;
        }
    }
};


console.log('original')
console.log(peeps);
console.log('alphabetical sort?!');
peeps.sort();
console.log(peeps);
console.log('custom sort');
peeps.sort(lastThenFirst);
console.log(peeps);
