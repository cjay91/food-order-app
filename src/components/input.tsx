import React, {FC} from "react";
import { TextInput } from "react-native-gesture-handler";
import {Dimensions, View} from 'react-native';
import {StyleSheet} from 'react-native';

const {height,width} = Dimensions.get('screen');

interface props {
    placeholder: string;
    onChangeText: (text:string) => void
    secureTextEntry?:boolean;
}

const Input : FC<props> = (props) => {
    return (
        <View style= {styles.container}>
            <TextInput style = {styles.input} placeholder = {props.placeholder} secureTextEntry = {props.secureTextEntry} onChangeText = {props.onChangeText}/>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: 'center',
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
        marginVertical: 10
    },
    input: {
        padding:15
    }
})