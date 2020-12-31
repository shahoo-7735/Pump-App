import { createStackNavigator } from 'react-navigation-stack';
import Vendor from '../screens/vendor';
import React from 'react';
import Header from '../shared/header';

const screens = {
    Vendor: {
        screen: Vendor,
                 navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#455a65' }
    }
});
 
export default AboutStack;