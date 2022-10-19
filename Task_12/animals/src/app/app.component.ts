import { Component } from '@angular/core';
export interface Animal {
  kind: Animal_kind
  name: string
  sound: string
  sex: Animal_sex
  isLovely: boolean
}
export enum Animal_kind {
  cat = "Кошка",
  dog = "Собака",
  horse = "Лошадь",
  parrot = "Попугай"
}
export enum Animal_sex {
  female = "Девочка",
  male = "Мальчик"
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Animal_kind = Animal_kind;
  Animal_sex = Animal_sex;
  title = 'animals';
  info_details: string = "";
  needToHide: boolean = false;
  condition: string = 'hide';
  public massiveOfAnimal: Animal[] = [
    {kind: Animal_kind.cat, name: 'Томара', sound: '*мурмуррррр*', sex: Animal_sex.female, isLovely: true},
    {kind: Animal_kind.dog, name: 'Пуся', sound: '*тявтявтяв*', sex: Animal_sex.female, isLovely: true},
    {kind: Animal_kind.cat, name: 'Тигра', sound: '*мурмуррррр*', sex: Animal_sex.female, isLovely: true},
    {kind: Animal_kind.horse, name: 'Буцефал', sound: '*Иии-гого*', sex: Animal_sex.male, isLovely: true},
    {kind: Animal_kind.parrot, name: 'Джек', sound: '*Чирик чирик*', sex: Animal_sex.male, isLovely: true},
  ]
  info(animal: Animal) {
    let str: string = `Слышится: ${animal.sound}, это ${animal.kind}. ${animal.sex === Animal_sex.female ? 'Девочка' : 'Мальчик'}. Разве не прелесть? - ${animal.isLovely ? 'Конечно да!' : 'Странно, но нет'}`;
    this.info_details = str;
  }
  clickButton() {
    if (this.condition === 'hide'){
      this.needToHide = true;
      this.condition = 'show';
    } else {
      this.needToHide = false;
      this.condition = 'hide';
    }
  }
}
