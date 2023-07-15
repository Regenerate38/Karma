import {StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Switch} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {Image} from 'react-native-elements';
import { SearchBar } from 'react-native-elements';


const { width, height } = Dimensions.get("window");

const Maps = () => {
  return (
    <View
    style={{
      flex: 1,
      width: width,
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.bgColor,
    }}>
        
   
    </View>
  
  );
};

export default Maps;

const styles = StyleSheet.create({
  featured: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 53,
    marginBottom: 20,
  },
});