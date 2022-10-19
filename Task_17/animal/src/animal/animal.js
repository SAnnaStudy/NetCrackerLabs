import React from "react";
const styles={
    oneThing: {
        width: '450px',
        minHeight: '50px',
        textAlign: 'center',
        color: 'black',
        fontSize: '20',
        fontWeight: '600',
        paddingTop: '30px',
        backgroundColor: 'rgb(251, 244, 255)',
        marginTop: '3px'
    }
  }
export default function Animal(props){
    return(
        <div className='oneThing' style={styles.oneThing} onClick={() => { props.setAnimal(props.animal)}}>{props.animal.name}, {props.animal.kind}</div>
    )
}