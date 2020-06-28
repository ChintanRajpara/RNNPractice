import React, {useState} from 'react';
import {View, Text, ScrollView, FlatList, Animated} from 'react-native';
import {useDimensions} from '@react-native-community/hooks';
import {PanGestureHandler} from 'react-native-gesture-handler';

const GlobalVideoRequestDetailContainer = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [
    videoRequestDetailContainerHeight,
    setVideoRequestDetailContainerHeight,
  ] = useState(0);
  const {width, height} = useDimensions().window;
  //   const _onPanGestureEvent = Animated.event(
  //     [{nativeEvent: {x: this._touchX}}],
  //     {useNativeDriver: true},
  //   );

  //   const _onPanGestureEvent = () => {};

  return (
    <View
      onLayout={e => {
        const layoutheight = e.nativeEvent.layout.height;
        layoutheight !== containerHeight && setContainerHeight(layoutheight);
      }}
      style={{flex: 1, backgroundColor: '#000'}}>
      <PanGestureHandler
      // onGestureEvent={e => {
      //   console.log(
      //     // 'e.nativeEvent.y',
      //     // e.nativeEvent.y,
      //     // 'e.nativeEvent.absoluteY',
      //     // e.nativeEvent.absoluteY,
      //     'e.nativeEvent.translationY',
      //     e.nativeEvent.translationY,
      //   );
      // }}
      >
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <View
            onLayout={e => {
              const layoutheight = e.nativeEvent.layout.height;
              layoutheight !== videoRequestDetailContainerHeight &&
                setVideoRequestDetailContainerHeight(layoutheight);
            }}
            style={{backgroundColor: 'pink'}}>
            <View style={{height: 40, backgroundColor: '#3c3c3c'}} />
            <View style={{margin: 16}}>
              <Text>@chintanrajpara requested video</Text>
              <Text style={{marginTop: 8}}>
                Engineering Maths 3 - Linear Interpolation basics
              </Text>
              <Text style={{marginTop: 8}}>#dfgfdg #dfgfdg #dfgfdg</Text>
              <Text style={{marginTop: 8}}>www.c=google.om</Text>
              <Text style={{marginTop: 8}}>
                30videos 24creators 1K followers
              </Text>
              <View
                style={{
                  marginTop: 16,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text>Request</Text>
                  <Text>Follow</Text>
                </View>
                <View>
                  <Text>Create</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 48,
                flexDirection: 'row',
                backgroundColor: '#3c3c3c',
              }}>
              <Text
                style={{
                  flex: 1,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                Videos
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                Videos
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                Videos
              </Text>
            </View>
          </View>
        </View>
      </PanGestureHandler>
      <View
        style={{
          position: 'absolute',
          width,
          containerHeight,
          backgroundColor: 'blue',
        }}
      />
    </View>
  );
};

export default GlobalVideoRequestDetailContainer;

{
  /* <ScrollView snapToOffsets={[88]} nestedScrollEnabled>
        <View style={{height: 88, width, backgroundColor: 'pink'}} />
        <View style={{flex: 1, height: containerHeight}}>
          <FlatList
            pagingEnabled
            style={{flex: 1, width}}
            data={[0, 1, 2]}
            horizontal
            renderItem={() => {
              return (
                <FlatList
                  nestedScrollEnabled
                  pagingEnabled
                  style={{flex: 1}}
                  data={[0, 1, 2, 3, 4, 5]}
                  renderItem={() => {
                    return (
                      <View
                        style={{
                          height: containerHeight,
                          width,
                          flex: 1,
                          backgroundColor: 'rgb(50,100,290)',
                          borderWidth: 2,
                          borderColor: 'red',
                        }}
                      />
                    );
                  }}
                />
              );
            }}
          />
        </View>
      </ScrollView> */
}
