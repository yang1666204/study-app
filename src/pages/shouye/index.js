import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import BetterBanner from 'react-native-better-banner';
import Button from '@ant-design/react-native/lib/button';

class HomeScreen extends React.Component {
  // static contextType = NavigationContext
  constructor() {
    super();
  }
  render() {
    let {width} = Dimensions.get('screen');
    return (
      <View>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={styles.topContainer}></View>
        <View style={styles.topfont}>
          <View style={styles.leftfont}>
            <Text style={{textAlign: 'center', color: '#408AEB', marginTop: 3}}>
              问答
            </Text>
          </View>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri:
                  'https://img.alicdn.com/tfs/TB1xwW3eiLaK1RjSZFxXXamPFXa-502-380.jpg_240x240q90.jpg',
              }}
            />
          </View>
          <View style={styles.rightfont}>
            <Text style={{textAlign: 'center', color: '#B1C1CE', marginTop: 3}}>
              笔记
            </Text>
          </View>
        </View>
        <BetterBanner
          bannerComponents={[
            <View
              style={{
                width: '70%',
                height: '100%',
                backgroundColor: '#1997fc',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft:20,
                borderRadius:20
              }}>
              <Text style={{fontSize: 35, color: '#fff', marginBottom: 10}}>
                Page 01
              </Text>
              <Text style={{fontSize: 15, color: '#fff'}}>
                Welcome! have a good time
              </Text>
            </View>,
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#da578f',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 35, color: '#fff', marginBottom: 10}}>
                Page 02
              </Text>
              <Text style={{fontSize: 15, color: '#fff'}}>
                Welcome! have a good time
              </Text>
            </View>,
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#7c3fe4',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 35, color: '#fff', marginBottom: 10}}>
                Page 03
              </Text>
              <Text style={{fontSize: 15, color: '#fff'}}>
                Welcome! have a good time
              </Text>
            </View>,
          ]}
          // bannerTitles={[
          //   'Page 01 Page 01 Page 01 Page 01 Page 01 Page 01 Page 01 ',
          //   'Page 02',
          //   'Page 03',
          // ]}
          onPress={(index) => alert('you pressed index is : ' + index)}
          indicatorContainerBackgroundColor={'rgba(0,0,0,0.3)'}
          isSeamlessScroll={true}
          bannerHeight={77}
          // indicatorWidth={2}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topContainer: {
    opacity: 1,
    backgroundColor: '#CADAFC',
    width: 750,
    height: 750,
    borderRadius: 650,
    marginLeft: -200,
    marginTop: -650,
  },
  topfont: {
    flexDirection: 'row',
    marginBottom:40
  },
  rightfont: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 270,
    top: -30,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  leftfont: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 60,
    top: -30,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    left: 150,
    top: -30,
  },
});
export default HomeScreen;
