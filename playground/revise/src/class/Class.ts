export class Student {
  constructor(
    private age: number,
    public name: string,
    readonly institute: string
  ) {}

  output() {
    console.log(
      `Student Name: ${this.name} and Student Age: ${this.age} from ${this.institute}`
    );
  }
}
