import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Animal } from './animal';
const kind = {
    cat: {
      kind: 'кошка'
    },
    dog: {
        kind: 'собака'
    },
    horse: {
        kind: 'лошадь'
    },
    parrot: {
        kind: 'попугай'
    }
    
}
const animals = [
    {id: 0, kind: kind.cat.kind, name: 'Томара', sound: '*мурмуррррр*', sex: 'female', isLovely: true},
    {id: 1, kind: kind.dog.kind, name: 'Пуся', sound: '*тявтявтяв*', sex: 'female', isLovely: true},
    {id: 2, kind: kind.cat.kind, name: 'Тигра', sound: '*мурмуррррр*', sex: 'female', isLovely: true},
    {id: 3, kind: kind.horse.kind, name: 'Буцефал', sound: '*Иии-гого*', sex: 'male', isLovely: true},
    {id: 4, kind: kind.parrot.kind, name: 'Джек', sound: '*Чирик чирик*', sex: 'male', isLovely: true},
]
export const ListOfAnimals = (props) =>{
    return(
    <View style={styles.list}>
        <FlatList
        data={animals}
        renderItem={({item}) => {
            if(!props.condition || ((item.kind !== 'кошка') && (props.condition))){
                return(
                    <Animal name={item.name}></Animal>
                )
            }    
        }}
        />
    </View>
    )
}
const styles = StyleSheet.create({
    list: {
        height: 400,
        width: '80%',
        marginTop: 50,
    },
})