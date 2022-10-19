interface StudyClass{
    teacher: Teacher;
    listOfChildren: Child[];
    name(): string;
}   
class SpecialClass implements StudyClass{
    teacher: Teacher;
    listOfChildren: Child[];
    constructor(listOfChildren: Child[], teacher: Teacher){
        this.listOfChildren = listOfChildren;
        this.teacher = teacher;
    }
    name(): string{
        return 'В специальном классе' + this.listOfChildren.length + 'детей';
    }
}
interface Person{
    name: string;
    surname: string;
    dateOfBirth: number;
    sex: string;
    StudyClass: string[];
}   
class Child implements Person{
    name: string;
    surname: string;
    dateOfBirth: number;
    sex: string;
    StudyClass: string[];
    constructor(name: string, surname: string, dateOfBirth: number, sex: string, StudyClass: string[]) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.sex = sex;
        this.StudyClass = StudyClass;
    }
}
class Teacher implements Person{
    name: string;
    surname: string;
    dateOfBirth: number;
    sex: string;
    StudyClass: string[];
    constructor(name: string, surname: string, dateOfBirth: number, sex: string, StudyClass: string[]) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.sex = sex;
        this.StudyClass = StudyClass;
    }
}
@decorator
function factory<T>(type: { new (...any: any): T }, ...any: any): T {
    return new type(...any);
}
const a = factory(Child, 'Зоя', 'Хлопушкина', 2015, 'female', ['баскетбол','математика']);
const b = factory(Teacher, 'Вера', 'Хлопушкина', 1980, 'female', ['5а', '5б', '5в']);

function decorator(f: Function):void{
    console.log(`Object ${f.name} created!`);
}
@decorator(a);
@decorator(b);

