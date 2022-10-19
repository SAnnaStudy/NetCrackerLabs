import React from 'react';
import {useHistory} from 'react-router-dom'
import {AnimalType} from './list'
import { useLocation } from 'react-router';

const styles={
    animal_info: {
        width: '400px',
        height: '150px',
        margin: '0 auto',
    },
    animal_details: {
        fontSize: '20',
    }
}
const main: React.CSSProperties = {
    margin: 'auto',
    width: '500px'
}
const button: React.CSSProperties = {
    width: '245px',
    marginTop: 50,
    marginLeft: 120,
    height: '50px',
    backgroundColor: 'rgb(250, 165, 215)',
    color: 'black',
    fontSize: '20',
}
const otherStyles: React.CSSProperties = {
    borderStyle: 'solid',
    borderRadius: '10px',
    paddingBottom: '30px',
    width: '500px',
    marginTop: 100
}
const h2Styles: React.CSSProperties = {
    display: 'block',
    width: '100%',
    height: '100px',
    textAlign: 'center',
    color: 'rgb(157, 132, 255)',
    fontSize: '20',
}
/*export interface StandartComponentProps {
    thatAnimal: AnimalType
}*/
interface LocationState {
    thatAnimal: AnimalType
}
function AboutScreen() {
    const history = useHistory();
    const location = useLocation<LocationState>();
    const thatAnimal = location.state.thatAnimal;
    const str =  `Слышится: ${thatAnimal.sound}, это ${thatAnimal.kind}. ${thatAnimal.sex === 'female' ? 'Девочка' : 'Мальчик'}. Разве не прелесть? - ${thatAnimal?.isLovely ? 'Конечно да!' : 'Странно, но нет'}` ;
  return (
    <div style = {main}>
    <div style = {otherStyles}>
        <h2 style = {h2Styles}>Подробней о {thatAnimal.name}:</h2>
        <div style = {styles.animal_info}>
            <div style = {styles.animal_details}>{str}</div>
        </div>
    </div>
    <button onClick = {() => history.push('/')} style={button}>Назад к списку</button>
    </div>
  );
}

export default AboutScreen;
