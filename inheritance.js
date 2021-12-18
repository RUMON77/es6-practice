class Parent {
    constructor(name) {
        this.fname = "John";
    }
}
class Child extends Parent{
    constructor(name){
        super(name);
        this.name = name;
    }
}

const baby = new Child('Baby');
const baby2 = new Child('Baby2');
console.log(baby);
console.log(baby2);