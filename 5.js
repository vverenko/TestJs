/**
 * function create user
 * @param {String} name 
 * @param {String} surname 
 * @param {Number} age 
 */
function User(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.print = () => {
        console.log(`Name: ${this.name} Surname: ${this.surname} Age: ${this.age}`);
    }
}


let user = new User('Vova', 'Verenko', 21)

user.print()