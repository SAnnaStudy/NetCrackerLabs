import React, { useState } from 'react'
import ListOfAnimals from "./animal/list"
const styles = {
  button: {
    width: '300px',
    height: '50px',
    backgroundColor: 'rgb(250, 165, 215)',   
    textAlign: 'center',
    color: 'black',
    fontSize: '20',
    fontWeight: '600',
    margin: '50px 0 0 62%',
  },
  h1: {
    display: 'block',
    margin: '0 auto',
    width: '99%',
    height: '80px',
    textAlign: 'center',
    color: 'black',
    fontSize: '25',
    paddingTop: '40px',
    backgroundColor: '#c8baff',
  },
  animal_info: {
    width: '400px',
    height: '150px',
    margin: '0 auto',
  },
  animal_details: {
    fontSize: '20',
    fontWeight: '600',
  },
  other: {
    display: 'inline-block',
    float: 'right',
    margin: '50px 12% 0 0',
    borderStyle: 'solid',
    borderRadius: '10px',
    paddingBottom: '30px',
    width: '500px',
  },
  h2: {
    display: 'block',
    width: '100%',
    height: '100px',
    textAlign: 'center',
    color: 'rgb(157, 132, 255)',
    fontSize: '20',
  }
}

function App() {
  const [condition, setCondition] = useState(false);
  const [thatAnimal, setAnimal] = useState(null);
  return (
    <div className='one'>
      <h1 style={styles.h1}>Список животных</h1>
      <ListOfAnimals condition={condition} setAnimal={setAnimal}/>
      <div style={styles.other}>
        <h2 style={styles.h2}>Подробней о каждом:</h2>
        <div style={styles.animal_info}>
          <div style={styles.animal_details}>
            {thatAnimal != null ? `Слышится: ${thatAnimal.sound}, это ${thatAnimal.kind}. ${thatAnimal.sex === 'female' ? 'Девочка' : 'Мальчик'}. Разве не прелесть? - ${thatAnimal.isLovely ? 'Конечно да!' : 'Странно, но нет'}` : 'Выберите интересующего животного'}
          </div>
        </div>
      </div>
      <button style={styles.button} onClick={() => setCondition(prevCondition => !prevCondition)} className='button' type="button">{condition ? "Спрятать котиков" : "Показать котиков"}</button>
    </div>
  )
}

export default App;
