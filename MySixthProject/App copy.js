import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLgog= {
    uri: "https://github.com/AbdunabiRamadan/CIS340-Images/blob/main/images/rams.png",
    width: 80,
    height: 80
  };

  return (
    <View style={styles.container}>
          <Image
            style={styles.localCSULogo}
            source={'./assets/logo.png'}
          />

          <Image
            style={styles.urlCSULogo}
            source={{
              uri: "https://github.com/AbdunabiRamadan/CIS340-Images/blob/main/images/logo.png"
            }}
          />

          <Image 
          style={styles.stretchLogo}
          source={csuLgog}/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },
  urlCSULogo: {
    width: 50,
    height: 50
  },

  stretchLogo: {
  
    height: 200,
    resizeMode: 'center',
  }
});
