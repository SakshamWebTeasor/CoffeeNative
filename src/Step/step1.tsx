// Step1.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Step1 = ({ navigation }) => {
  return (
    <View>
      <Text>Step 1</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Step2')}
      />
    </View>
  );
};

export default Step1;
