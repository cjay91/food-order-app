import React, {FC} from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {Dimensions, View} from 'react-native';
import {StyleSheet,Text} from 'react-native';

const {height,width} = Dimensions.get('screen');

interface props {
    title: string;
    onPress: () => void
}

const App : FC<props> = (props) => {
    return (
        <TouchableOpacity style = {styles.container} onPress = {props.onPress}>
            <Text style = {styles.Text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8,
        marginVertical: 10
    },
    Text: {
        color: '#fff'
    }
})