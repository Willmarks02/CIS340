import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyApp() {
  return (
    <View> 
      <Text>
        Hello, I am a student in CIS340! {"\n"}
      </Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'Center',
      alignItems: 'center'

    }}>
      <Text>Welcome to My Class</Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
      </View>
  )
}


