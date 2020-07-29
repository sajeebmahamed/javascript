var person = {
    name: 'Sajeeb',

    print: function() {
        // var name = this.name
        setTimeout(function() {
            console.log(this);
            console.log('Hello, ' + this.name);
        }.bind(this), 3000)
    }
}