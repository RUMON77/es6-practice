class student {
    constructor(sId, sName, sAge) {
        this.name = sName;
        this.age = sAge;
        this.id = sId;
        this.school = "DPS School";
        this.village = "DPS Village";
    }    

}

const student1 = new student(12, 'John', 20);
const student2 = new student(17, 'Mike', 21);
console.log(student1, student2);