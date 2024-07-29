export class Student {
    constructor(age, name, institute) {
        this.age = age;
        this.name = name;
        this.institute = institute;
    }
    output() {
        console.log(`Student Name: ${this.name} and Student Age: ${this.age} from ${this.institute}`);
    }
}
