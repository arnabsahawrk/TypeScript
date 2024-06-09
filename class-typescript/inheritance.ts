class UserClass1 {
  //properties, methods, constructor

  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`name: ${this.userName}, age: ${this.age}`);
  }
}

class Student extends UserClass1 {
  studentId: number;

  constructor(userName: string, age: number, id: number) {
    super(userName, age);
    this.studentId = id;
  }

  display(): void {
    console.log(
      `name: ${this.userName}, age: ${this.age} id: ${this.studentId}`
    );
  }
}

let student1 = new Student("Anisul", 31, 3234314);

student1.display();
