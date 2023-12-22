// Step3.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Step3 = ({ navigation }) => {
  return (
    <View>
      <Text>Step 3</Text>
      <Button
        title="Finish"
        onPress={() => {
          // Handle finishing the form, e.g., submitting data
          // For this example, navigate back to Step1
          navigation.navigate('Step1');
        }}
      />
      <Button
        title="Previous"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Step3;
