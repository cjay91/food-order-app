import React, { FC } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button, Input } from '../components';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';


const App : FC = (props) => {

    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const signup = async () => {
        if(name && email && password){
            try{
                const user = await firebase.auth().createUserWithEmailAndPassword(email,password)
                if(user){
                    Alert.alert(JSON.stringify(user));
                }

            }catch(error){
                console.log(error);
            }
        }
    }

    return (
        <View style = {styles.container}>
            <Text> Sign up </Text>
            <Input placeholder = "Name" onChangeText = {(text) => setName(text)} /> 
            <Input placeholder = "Email" onChangeText = {(text) => setEmail(text)} />
            <Input placeholder = "Password" onChangeText = {(text) => setPassword(text)} /> 
            <Button title = "Sign Up" onPress = {signup} />
            <View style = {styles.loginText}>
                <Text style={{marginHorizontal:5}}>Already have an account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{marginHorizontal:5}}>
                    <Text style = {{color:'rgba(81,135,200,1)'}}>Login Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    loginText:{
        flexDirection: 'row',
        marginVertical: 20
    }
})