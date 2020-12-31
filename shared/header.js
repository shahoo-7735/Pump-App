import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={StyleSheet.header}>
            <MaterialIcons name='menu' size={35} onPress={openMenu} color="black"/>
             <Text style={StyleSheet.headerText}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
header: {   
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
},
headerText: {
    paddingLeft:35,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
}
});