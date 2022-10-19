import React from "react";
import Animal from "./animal";
const styles={
    list: {
        width: '40%',
        height: '390px',
        margin: 'auto',
        marginTop: 50
    }
}
export enum kind {
    cat = 'кошка',
    dog = 'собака',
    horse = 'лошадь',
    parrot = 'попугай'    
}
export type AnimalType = {
    id: number; kind: string; name: string; sound: string; sex: string; isLovely: boolean
};
export const animals: Array<AnimalType> = [
    {id: 0, kind: kind.cat, name: 'Томара', sound: '*мурмуррррр*', sex: 'female', isLovely: true},
    {id: 1, kind: kind.dog, name: 'Пуся', sound: '*тявтявтяв*', sex: 'female', isLovely: true},
    {id: 2, kind: kind.cat, name: 'Тигра', sound: '*мурмуррррр*', sex: 'female', isLovely: true},
    {id: 3, kind: kind.horse, name: 'Буцефал', sound: '*Иии-гого*', sex: 'male', isLovely: true},
    {id: 4, kind: kind.parrot, name: 'Джек', sound: '*Чирик чирик*', sex: 'male', isLovely: true},
]
export interface StandartComponentProps {
    condition: boolean
}
export default React.memo(function ListOfAnimals({condition}: StandartComponentProps){
    return(
     <div className='list' style={styles.list}>
        {
             animals.map(animal => {
                if(!condition || ((animal.kind !== 'кошка') && (condition)))
                return (
                    <Animal animal={animal} key={animal.id}/>
                )                
            })
        }
     </div>
    )
})