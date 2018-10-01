import IPatternDemo from "../../pattern";
import Student from "./Student";

class PrototypePatternDemo implements IPatternDemo {
    show(): void {
        const prototypeStudent = new Student("Default", 0);
        let firstStudent = {...prototypeStudent};
        firstStudent.age = 17;
        firstStudent.name = "Ivan";

        let secondStudent = {...prototypeStudent};
        secondStudent.age = 18;
        secondStudent.name = "Pesho";

        let thirdStudent = {...prototypeStudent};

        const students = new Array<Student>(prototypeStudent, secondStudent, firstStudent, thirdStudent);

        for (const student of students) {
            console.log(`Student Name: ${student.name} -- Student Age: ${student.age}`)
        }
    }
}

export default PrototypePatternDemo;