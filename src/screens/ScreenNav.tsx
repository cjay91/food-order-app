import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './signup';
import Login from './login';

const screens = {
    signup:{
        screen: SignUp
    },
    login:{
        screen:Login
    }
}

const ScreenNav = createStackNavigator();

export default createAppContainer(ScreenNav);
