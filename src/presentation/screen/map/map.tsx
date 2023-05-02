import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView, { Callout, Marker } from 'react-native-maps';
import styles from './styles';

const initialRegion = {
  latitude: -4.983037,
  longitude: -39.015199,
  latitudeDelta: 0.009,
  longitudeDelta: 0.009,
};

const Map: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
        zoomEnabled={false}
      >
        <Marker
          coordinate={{
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude,
          }}
        >
          <Callout>
            <Text>User</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

export default Map;
