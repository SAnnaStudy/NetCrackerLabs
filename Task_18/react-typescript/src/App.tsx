import React from 'react';
import ListOfAnimals from "./animal/list"
import { useState } from 'react'
import reactDom from 'react-dom'
import {MyContext} from "./Themes"
import {themes} from "./Themes"
import {kind} from './animal/list'
import animals from './animal/list'
const h1styles: React.CSSProperties = {
  display: 'block',
  margin: '0 auto',
  width: '99%',
  height: '80px',
  textAlign: 'center',
  color: 'black',
  fontSize: '25',
  paddingTop: '40px',
  backgroundColor: '#c8baff',
}
const buttonsStyles: React.CSSProperties = {
  width: '33%',
  height: '50px',
  display: 'inline-block',
  float: 'right',
  margin: '0 190px 0 0',
}
const button1Styles: React.CSSProperties = {
  width: '245px',
  height: '50px',
  backgroundColor: 'rgb(250, 165, 215)',
  textAlign: 'center',
  color: 'black',
  fontSize: '20',
  marginRight: '10px',
}
const button2Styles: React.CSSProperties = {
  width: '245px',
  height: '50px',
  backgroundColor: 'rgb(250, 165, 215)',
  textAlign: 'center',
  color: 'black',
  fontSize: '20',
}
const otherStyles: React.CSSProperties = {
  display: 'inline-block',
  float: 'right',
  margin: '50px 190px 0 0',
  borderStyle: 'solid',
  borderRadius: '10px',
  paddingBottom: '30px',
  width: '500px',
}
const h2Styles: React.CSSProperties = {
  display: 'block',
  width: '100%',
  height: '100px',
  textAlign: 'center',
  color: 'rgb(157, 132, 255)',
  fontSize: '20',
}
const styles= {
  animal_info: {
      width: '400px',
      height: '150px',
      margin: '0 auto',
  },
  animal_details: {
      fontSize: '20',
  }
}
export type AnimalType = {
  id: number; kind: string; name: string; sound: string; sex: string; isLovely: boolean
};
function App() {
  const [condition, setCondition] = useState<boolean>(false);
  const [thatAnimal, setThatAnimal] = useState<AnimalType>();
  const [theme, setTheme] = useState(themes.light);
  return (
    <MyContext.Provider value={theme}>
      <h1 style = {h1styles}>Список животных</h1>
      <ListOfAnimals condition={condition} setThatAnimal={setThatAnimal}/>
      <div style = {otherStyles}>
        <h2 style = {h2Styles}>Подробней о каждом:</h2>
        <div style = {styles.animal_info}>
          <div style = {styles.animal_details}>
            {thatAnimal ? `Слышится: ${thatAnimal.sound}, это ${thatAnimal.kind}. ${thatAnimal.sex === 'female' ? 'Девочка' : 'Мальчик'}. Разве не прелесть? - ${thatAnimal?.isLovely ? 'Конечно да!' : 'Странно, но нет'}` : 'Выберите интересующего животного'}
          </div>
        </div>
      </div>
      <div style = {buttonsStyles}>
      <button style = {button1Styles}  onClick={() => setCondition(prevCondition => !prevCondition)} type="button">{condition ? "Спрятать котиков" : "Показать котиков"}</button>
      <button style = {button2Styles} onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} type="button">Поменять тему</button>
      </div>
    </MyContext.Provider>
  );
}

export default App;
