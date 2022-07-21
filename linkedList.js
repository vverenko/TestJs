class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        const node = new Node(element);
        if (this.head == null) {
            this.head = node;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    print() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const list = new LinkedList();

list.add(new User('John', 20));
list.add(new User('Bob', 40));
list.print()
