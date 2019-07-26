/* eslint-disable prettier/prettier */
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import HomeScreen from './pages/homeScreen';
import howCanHelp from './pages/howCanHelp';
const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    howCanHelp:{
        screen: howCanHelp,
    },
    
}, {
    defaultNavigationOptions: {
        header: null,
    },
});

export default createAppContainer(AppNavigator);