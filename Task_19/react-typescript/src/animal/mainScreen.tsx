import React from 'react';
import ListOfAnimals from "./list"
import { useState } from 'react'
import {MyContext} from "./../Themes"
import {themes} from "./../Themes"
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
  margin: 'auto',
  marginTop: 50
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
function MainScreen() {
  const [condition, setCondition] = useState<boolean>(false);
  const [theme, setTheme] = useState(themes.light);
  return (
    <MyContext.Provider value={theme}>
      <h1 style = {h1styles}>Список животных</h1>
      <ListOfAnimals condition={condition} />
      <div style = {buttonsStyles}>
      <button style = {button1Styles} onClick={() => setCondition(prevCondition => !prevCondition)} type="button">{condition ? "Спрятать котиков" : "Показать котиков"}</button>
      <button style = {button2Styles} onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} type="button">Поменять тему</button>
      </div>
    </MyContext.Provider>
  );
}

export default MainScreen;
