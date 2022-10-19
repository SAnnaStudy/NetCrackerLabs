import React, {useContext} from "react";
import { View, Text } from "react-native";
import { MyContext } from "../Theme";

export const Animal = ({name}) =>{
    const theme = useContext(MyContext);
    return(
    <View style={animalStyle(theme)}>
        <Text style={textStyle(theme)}>{name}</Text>
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
        fontSize: 16,
        fontWeight: '600',
    }
}