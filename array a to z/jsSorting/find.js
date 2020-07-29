const team = [
    { id: 4, name: 'arg' },
    { id: 2, name: 'bra' },
    { id: 5, name: 'sfa' },
    { id: 1, name: 'eng' },
    { id: 3, name: 'ca' },
    { id: 6, name: 'fra' },
    { id: 7, name: 'zer' },
]

const find = team.find(item => item.id === 5)
console.log(find)
