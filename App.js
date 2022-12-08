import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import SwipeButton from './SwipeButton';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = (value) => setToggleState(value);
  return (
    <SafeAreaView>
      <View
        style={[
          styles.root,
          {backgroundColor: toggleState ? '#222' : '#ebedee'},
        ]}>
          <GestureHandlerRootView>
        <SwipeButton onToggle={handleToggle} />    
          </GestureHandlerRootView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;