import React, { useCallback, useContext } from "react";
import { MyContext } from "../Themes";
import { AnimalType } from "../App";

function animalStyle(aStyle: any) {
    return {
        width: '73%',
        minHeight: '50px',
        fontSize: '20',
        display: 'flex',
        justifyContent: "center",
        paddingTop: '30px',
        marginTop: '3px',
        backgroundColor: aStyle.backgroundColor,
        color: aStyle.color  
    }
}
export interface StandartComponentProps {
    animal: AnimalType
    setThatAnimal: (animal: AnimalType) => void
}
export default React.memo(function Animal({animal, setThatAnimal}: StandartComponentProps){
    const theme = useContext(MyContext);
    const onSetThatAnimal = useCallback(() => {
        setThatAnimal(animal);
    }, [animal]);
    return(
        <div style={animalStyle(theme)} onClick={onSetThatAnimal}>{animal.name}, {animal.kind}</div>
    )
})