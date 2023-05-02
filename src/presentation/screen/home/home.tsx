import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import { FindCurrentPosition } from '@/domain/usecases';

type Props = {
  findCurrentPosition: FindCurrentPosition;
};

const Home: React.FC<Props> = ({ findCurrentPosition }: Props) => {
  const [state, setState] = useState({
    latitude: '',
    longitude: '',
  });

  const getCurrentLocationPress = async () => {
    try {
      const coords = await findCurrentPosition.coords();
      setState({
        latitude: coords.latitude.toString(),
        longitude: coords.longitude.toString(),
      });
    } catch (error) {
      if (error instanceof Error) Alert.alert('Ops', error.message);
    }
  };

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

        <TouchableOpacity onPress={getCurrentLocationPress}>
          <Text>Get current Location</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <TouchableOpacity style={styles.buttonNext}>
        <Text style={styles.text}>Check on the map</Text>
      </TouchableOpacity>
    </>
  );
};

export default Home;
