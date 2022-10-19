import React from 'react'
import {Text, View, StyleSheet, Image} from "react-native";

export default function AnimalInfo(props) {
    const animal = props.route.params.pressedAnimal;
    const str = `Слышится: ${animal.sound}, это ${animal.kind}. ${animal.sex === 'female' ? 'Девочка' : 'Мальчик'}. Разве не прелесть? - ${animal?.isLovely ? 'Конечно да!' : 'Странно, но нет'}`;
    return(
        <View style={styles.container}>
            <Image source={{uri: animal.pic, width: '50%', height: '45%'}}></Image>
            <View style={styles.card}>
                <View style={styles.card2}>
                    <Text style={styles.text}>{str}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingTop: '30%',
      flex: 1,
    },
    card: {
      backgroundColor: 'rgb(230, 192, 255)',
      alignItems: 'center',
      height: '30%',
      width: '90%',
      justifyContent: 'center',
      marginTop: '5%'
    },
    card2: {
        alignItems: 'center',
        height: '35%',
        width: '90%',
        justifyContent: 'center'
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
        fontWeight: '600',
    }
})