import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Animal } from './animal';

export const animals = [
    {id: 0, kind: 'кошка', name: 'Томара', sound: '*мурмуррррр*', sex: 'female', isLovely: true, pic: 'https://cdn.dribbble.com/users/3203787/screenshots/16043003/media/c3232c262c841e8712a2da3f9306b483.jpg?compress=1&resize=400x300'},
    {id: 1, kind: 'собака', name: 'Пуся', sound: '*тявтявтяв*', sex: 'female', isLovely: true, pic: 'http://cdn.shopify.com/s/files/1/0017/9578/4765/products/299_1200x1200.jpg?v=1563980443'},
    {id: 2, kind: 'кошка', name: 'Тигра', sound: '*мурмуррррр*', sex: 'female', isLovely: true, pic: 'https://i.pinimg.com/originals/94/27/db/9427dbca6ff69bc09dc4b7c0b725381a.jpg'},
    {id: 3, kind: 'лошадь', name: 'Буцефал', sound: '*Иии-гого*', sex: 'male', isLovely: true, pic: 'https://t3.ftcdn.net/jpg/03/28/55/10/360_F_328551091_GmjhNaoGU1t03Tupiv7qHHZoXanFhiqo.jpg'},
    {id: 4, kind: 'попугай', name: 'Джек', sound: '*Чирик чирик*', sex: 'male', isLovely: true, pic: 'https://media.istockphoto.com/vectors/parrot-vector-id1317955410?k=20&m=1317955410&s=612x612&w=0&h=mzlHx7og8Z3XRWe6OMA-msCVc07vUq-QQIJgc-DlZlI='},
]
export const ListOfAnimals = (props) =>{
    return(
    <View style={styles.list}>
        <FlatList
        data={animals}
        renderItem={({item}) => {
            if(!props.condition || ((item.kind !== 'кошка') && (props.condition))){
                return(
                    <Animal animal={item}></Animal>
                )
            }    
        }}
        />
    </View>
    )
}
const styles = StyleSheet.create({
    list: {
        width: '80%',
        marginTop: 50,
        marginBottom: 10
    },
})