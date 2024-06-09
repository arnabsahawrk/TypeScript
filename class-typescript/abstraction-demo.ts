abstract class AbstractUser {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  abstract display(): void;
}

class UserStudent extends AbstractUser {
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

let studentUser1 = new UserStudent("Arnab Saha", 25, 43321423);

studentUser1.display();
