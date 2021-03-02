import React from 'react';
import Nav from './src/router';
import {View} from 'react-native';

function App() {
  return (
    <View style={{flex:1}}>
      {/* style={{flex:1}}是为了给View设置高度，此处为屏幕的高 */}
      <Nav></Nav>
    </View>
  );
}
export default App;
