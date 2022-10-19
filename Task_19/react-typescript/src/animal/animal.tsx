import React, { useContext } from "react";
import { MyContext } from "../Themes";
import {Link} from 'react-router-dom'
import {AnimalType} from './list'
function animalStyle(aStyle: React.CSSProperties) {
    return {
        width: '81%',
        minHeight: '50px',
        fontSize: '20',
        display: 'flex',
        justifyContent: "center",
        paddingTop: '30px',
        marginTop: '3px',
        marginLeft: 55,
        backgroundColor: aStyle.backgroundColor,
        color: aStyle.color
    }
}
const styles={
    link: {
        textDecoration: 'none',
        color: 'black'
    }
}
export interface StandartComponentProps {
    animal: AnimalType
}
export default React.memo(function Animal({animal}: StandartComponentProps){
    const theme = useContext(MyContext);
    return(
        <div style={animalStyle(theme)}><Link to={{pathname: '/about', state: {thatAnimal: animal}}} style={styles.link}>{animal.name}, {animal.kind}</Link></div>
    )
})