/** Сlass describing the user */
class User {
    /**
     * 
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {number} age 
     */
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    print() {
        console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
    }
}

/** Class describing a user-based admin */
class Admin extends User{
    /**
     * 
     * @param  {...any} parent 
     */
    constructor(...parent){
        super(...parent);
        this.role = 'admin';
    }
}

const admin = new Admin('Vova', 'Verenko', '21');
admin.print();