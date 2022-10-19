class StudyClass{
    constructor(listOfChildren, teacher){
        this.listOfChildren = listOfChildren;
        this.teacher = teacher;
    }
    name(name){
        this.name = name;
    }
    get teacher(){}
    set teacher(value){
        if(value.length < 1){
            alert();
            return;
        }
        this.teacher = value;
    }
}
class SpecialClass extends StudyClass{
    constructor(listOfChildren, teacher){
        this.listOfChildren = listOfChildren;
        this.teacher = teacher;
    }
    name(){
        setTimeout(() => super.name(), 1000);
    }
}
class Child {
    constructor(name, surname, dateOfBirth, sex, listOfClass) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.sex = sex;
        this.listOfClass = listOfClass;
    }
    get name(){}
    set name(value){
        if(value.length < 4){
            alert();
            return;
        }
        this.name = value;
    }
}
class Teacher {
    constructor(listOfClass, name, surname, sex, years) {
        this.listOfClass = listOfClass;
        this.name = name;
        this.surname = surname;
        this.sex = sex;
        this.years = years;
    }
}
let newClass = new Class([Ann, Bettie, Charlie], 'Mary');
newClass.name(first_Class);
let newSpecialClass = new SpecialClass([1, 2, 3], 'Anybody');
newSpecialClass.name();
newSpecialClass = null;
