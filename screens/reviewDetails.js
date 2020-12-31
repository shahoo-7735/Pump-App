import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ReviewDetails({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }
    return (
        <View>
          <Text>{ navigation.getParam('title') }</Text>
          <Text>{ navigation.getParam('body') }</Text>
          <Text>{ navigation.getParam('rating') }</Text>
          <Button title="Back" onPress={pressHandler} />
        </View>
    )
  }


