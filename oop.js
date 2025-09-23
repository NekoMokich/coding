//OOP - rapadigm in programming 
//that use "objects" for presenting
//data and methods used in work with that data 

//1. Classes and Object (Class & Object)
//class - "blueprint/scheme" for making a object 
//object - example for classes and for personal data 


class Animal {
    //constructor - special method for 
    //creating and intiliazing an object created with a class 

   constructor(name, age) {
        //this - reference to the current object
        this.name = name;
        this.age = age;
    }
    //class method - a function inside an object
    speak() {
        console.log(`${this.name} make a somekind sound`);
    }
    displayInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const genericAnimal = new Animal('Some animal', 5);
const myDog = new Animal ("Bulik", 8);

genericAnimal.displayInfo();
myDog.displayInfo();
myDog.speak();

//2. encapsulation
//enpasulation - hiding internal implentation
//or combining data and methods 
//and work with that data in one class 

console.log('---Encapsulation---');

class BankAccount {
    //# - means,that private property
    #balance = 0; //private property
    constructor(initialBalance){
        if(initialBalance > 0) {
            this.#balance = initialBalance;
        }    
    }

    //public method for deposting money 
    deposit(amount) {
        if(amount > 0) {
            this.#balance += amount;
            console.log(`Deposit: ${amount}. New Balance: ${this.#balance}`);
            
        }  
    }


    //public method for withdrawing money
    withdraw(amount) {
     if(amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdraw: ${amount}. New Balance: ${this.#balance}`);
    } else {
        console.log('your balance is low');
    }

}
    //private method for getting balance
    #getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(300);
myAccount.deposit(50);
myAccount.withdraw(25);
//console.log(myAccount.#balance); //error private properites
//myAccount.#getBalance; //error pritave method



//3. Inheritance
//inheritance - creating a new class based on an existing one
console.log('----inheritance--');

class Dog extends Animal {
    constructor(name, age, breed) {
        //super - call the parent class constructor
        super(name, age);
        this.breed = breed; //add personal new propety
    }
    speak() {
        console.log(`${this.name} barking: haw-haw`);
    }

    //can call and inheritance method inside child
    displayInfo() {
        super.displayInfo(); //parent
        console.log(`breed:${this.breed}`);
    }
}

const newDog = new Dog ("Bulik", 5,"Gypsy");
newDog.displayInfo(); //call two methods: parent and child
newDog.speak(); //call already definite method

// 4. Polymorphism 
console.log("Polymorphism");

class Cat extends Animal {
    //redefine method speak()
    speak() {
        console.log(`${this.name} Meowing: UwU!`);
    }
}

const myCat = new Cat("Bashmak", 5);

//creating an array of different objects and call the same method 

const animals = [myCat, newDog, new Animal("Something", 1)];

//iterate to array and call the same methods speak()
//depending on the class of the objects its specific
//implemtation of this method will be called 

animals.forEach(animal => {
    animal.speak();
});

//lol
