import React, {useContext} from "react";
import { View, Text } from "react-native";
import { MyContext } from "../Theme";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

export const Animal = (props) =>{
    const theme = useContext(MyContext);
    const navigation = useNavigation();
    const onSetThatAnimal = useCallback(() => {
        navigation.navigate('About', {pressedAnimal: props.animal});;
    }, [props.animal]);
    return(
    <View style={animalStyle(theme)}>
        <Text style={textStyle(theme)} onPress={onSetThatAnimal}> {props.animal.name}</Text>
    </View>
    )
}
function animalStyle(aStyle) {
    return {
        height: 70,
        width: '100%',
        marginBottom: 7,
        justifyContent: 'center',
        backgroundColor: aStyle.backgroundColor,
    }
}
function textStyle(aStyle) {
    return {
        textAlign: 'center',
        fontWeight: '600',
        color: aStyle.color,
        fontSize: 16
    }
}