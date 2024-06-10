class OnlineCourse {
  //   public courseName: string;
  protected courseName: string;
  readonly duration: number;

  constructor(courseName: string, duration: number) {
    this.courseName = courseName;
    this.duration = duration;
  }

  private display(): void {
    console.log(`Course Name: ${this.courseName}
                 Duration: ${this.duration} Month`);
  }
}

class OfflineCourse extends OnlineCourse {
  private courseId: number;

  constructor(courseName: string, duration: number, courseId: number) {
    super(courseName, courseId);
    this.courseId = courseId;
  }

  //   display(): void {
  //     console.log(`Course Name: ${this.courseName}
  //         Duration: ${this.duration} Month
  //         Course Id: ${this.courseId}`);
  //   }

  setCourseId(id: number): void {
    this.courseId = id;
  }

  getCourseId(): number {
    return this.courseId;
  }

  output(): void {
    console.log(`Course Name: ${this.courseName}
        Duration: ${this.duration}
        Course Id: ${this.courseId}`);
  }
}

// const OOP = new OfflineCourse("Object Oriented Programming", 2, 44343);
const DSA = new OnlineCourse("Object Oriented Programming", 5);
// DSA.courseName = "Data Structure & Algorithm"; //now it's protected this only can access from inheritance class
// DSA.display(); //Now it's private can's access from anywhere

const Django = new OfflineCourse("Django", 0.5, 55);

// console.log(Django.getCourseId());

// Django.setCourseId(43);
// console.log(Django.getCourseId());

// Django.duration = 1; I can only read the value but can't modify it
Django.output();
