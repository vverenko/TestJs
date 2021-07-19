/**
 * Сlass describing the user
 * @param {string} name
 * @param {string} surname
 * @param {number} age
 */
function User(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

User.prototype.print = function() {
    console.log(`Name: ${this.name} Surname: ${this.surname} Age: ${this.age}`);
}

let user = new User('Vova', 'Verenko', 21)

user.print()

const user2 = new User('John', 'Connor', '32');

user2.print();
