import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Data from '../components/Data';
import laCounty from '../api/laCounty';
import axios from 'axios';

const ApiScreen = () => {

  const [results, setResults] = useState([]);

  const laCountyApi = async () => {
    const response = await laCounty.get();
    setResults(response.data);
  };

  return(
    <View>
      <Text>Here's some data from LA County!</Text>
      <Button
        title="Get Data!"
        onPress={laCountyApi}
      />
      <Text>There are {results.length} results.</Text>
      <Data />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ApiScreen;
