// Step2.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Step2 = ({ navigation }) => {
  return (
    <View>
      <Text>Step 2</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Step3')}
      />
      <Button
        title="Previous"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Step2;
