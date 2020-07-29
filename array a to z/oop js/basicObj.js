var book = {
    name: 'Js Killer',
    author: 'David O Nell',
    publisher: 'BaBoron',

    print: function() {
        console.log(this.name, this.author);
    }
}
book.publisYear = 2020
console.log(book);

console.log(book.publisher)

book.price = 3000
console.log(book.price);
