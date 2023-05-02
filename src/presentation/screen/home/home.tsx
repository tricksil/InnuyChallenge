import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const Home: React.FC = () => {
  const [state, setState] = useState({
    latitude: '',
    longitude: '',
  });

  const stateChange = (fieldName: string, value: string): void => {
    const regex = /^[0-9.-]+$/;
    if (regex.test(value) || value === '')
      setState({
        ...state,
        [fieldName]: value,
      });
  };
  return (
    <>
      <SafeAreaView style={styles.container} removeClippedSubviews={true}>
        <StatusBar style="auto" />
        <TextInput
          style={styles.input}
          placeholder="y coordinate"
          value={state.latitude}
          onChangeText={(text) => {
            stateChange('latitude', text);
          }}
          keyboardType="numeric"
          contextMenuHidden={true}
        />
        <TextInput
          style={styles.input}
          placeholder="x coordinate"
          onChangeText={(text) => {
            stateChange('longitude', text);
          }}
          value={state.longitude}
          keyboardType="numeric"
          contextMenuHidden={true}
        />

        <TouchableOpacity>
          <Text>Get current Location</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <TouchableOpacity style={styles.buttonNext}>
        <Text style={styles.text}>View in Maps</Text>
      </TouchableOpacity>
    </>
  );
};

export default Home;
