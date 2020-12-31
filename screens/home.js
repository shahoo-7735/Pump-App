import React, { useState} from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {

  const [reviews, setReviews] = useState([
    {title: 'Air', rating: 5, body: 'Loreum', key: '1'},
    {title: 'Water', rating: 5, body: 'Loreum', key: '2'},
    {title: 'Land', rating: 5, body: 'Loreum', key: '3'}
  ]);

  // const pressHandler = () => {
  //   //navigation.navigate('ReviewDetails');
  //   navigation.push('ReviewDetails');
  // }

    return (
        <View>
        <FlatList 
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
              <Text>{ item.title }</Text>
            </TouchableOpacity>
          )}
        /> 
        </View>
    )
  }


