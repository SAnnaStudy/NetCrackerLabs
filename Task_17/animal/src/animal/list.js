import React, { useState } from 'react'
import Animal from "./animal";
const styles={
    list: {
        width: '500px',
        display: 'inline-block',
        margin: '50px 0 0 12%',
        height: '390px'
    }
}
const animals = [
    {kind: 'кошка', name: 'Томара', sound: '*мурмуррррр*', sex: 'female', isLovely: true},
    {kind: 'собака', name: 'Пуся', sound: '*тявтявтяв*', sex: 'female', isLovely: true},
    {kind: 'кошка', name: 'Тигра', sound: '*мурмуррррр*', sex: 'female', isLovely: true},
    {kind: 'лошадь', name: 'Буцефал', sound: '*Иии-гого*', sex: 'male', isLovely: true},
    {kind: 'попугай', name: 'Джек', sound: '*Чирик чирик*', sex: 'male', isLovely: true},
]
export default function ListOfAnimals(props){
    return(
     <div className='list' style={styles.list}>
        {
             animals.map(animal => {
                if(!props.condition || ((animal.kind != 'кошка') && (props.condition)))
                return (
                    <Animal animal={animal} key={animal.id} setAnimal={props.setAnimal}/>
                )                
            })
        }
     </div>
    )
}