/* eslint-disable prettier/prettier */
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import HomeScreen from './pages/homeScreen';
import howCanHelp from './pages/howCanHelp';
import needSomeInfos from './pages/needSomeInfos'
import uWillHelpPeople from './pages/uWillHelpPeople'
import whatsYourName from './pages/whatsYourName'
import emailer from './pages/emailer'
import ongsHub from './pages/ongsHub'

const AppNavigator = createStackNavigator({
    Home: {
        screen: needSomeInfos,
    },
    howCanHelp:{
        screen: needSomeInfos,
    },
    ongsHub:{
        screen: ongsHub
    }
    
}, {
    defaultNavigationOptions: {
        header: null,
    },
});

export default createAppContainer(AppNavigator);