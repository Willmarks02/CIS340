import React from 'react';
import { StyleSheet, Text, View, ImageBackround } from 'react-native';

export default function App() {

  const csuLogo= {
    uri: "https://github.com/AbdunabiRamadan/CIS340-Images/blob/main/images/rams.png",
  };

  return (
    <View style={styles.container}>
      <ImageBackround source={csuLogo} style={styles.image}>

          <Text style={styles.text}>CSU Logo</Text>

      </ImageBackround>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "red",
    fontSize: 40,
    fontWeight: 'bold',
  },

});
