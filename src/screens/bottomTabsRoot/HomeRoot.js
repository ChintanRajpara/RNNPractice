import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  SafeAreaView,
  Linking,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {componentNames} from '../../navigation/componentNames';
import {useDimensions} from '@react-native-community/hooks';
import {RFValue} from 'react-native-responsive-fontsize';

const HomeRoot = props => {
  const {height: screenHeight, width} = useDimensions().screen;
  const {height: windowHeight} = useDimensions().window;

  const [flatlistLayotHeight, setFlatlistLayotHeight] = useState(windowHeight);
  const [focued, setFocused] = useState(true);
  const {componentId} = props;

  const _hideBottomTabs = () => {
    Navigation.mergeOptions(componentId, {
      bottomTabs: {visible: false},
    });
  };

  const _showBottomTabs = () => {
    Navigation.mergeOptions(componentId, {
      bottomTabs: {visible: true},
    });
  };

  const _handleComponentDidAppear = () => {
    setFocused(true);
  };
  const _handleComponentDidDisappear = () => {
    setFocused(false);
  };

  const _handleBottomTabSelectedListener = e => {
    if (
      e.selectedTabIndex === 0 &&
      e.selectedTabIndex === e.unselectedTabIndex
    ) {
      Navigation.popToRoot(componentId);
    }
  };

  const _handleLinkingListner = ({url}) => {
    console.log({url});
    Navigation.push(componentId, {component: {name: componentNames.Profile}});
  };

  useEffect(() => {
    const linkingListner = Linking.addEventListener(
      'url',
      _handleLinkingListner,
    );

    const listener = {
      componentDidAppear: _handleComponentDidAppear,
      componentDidDisappear: _handleComponentDidDisappear,
    };

    const componentListener = Navigation.events().registerComponentListener(
      listener,
      componentId,
    );

    const bottomTabSelectedListener = Navigation.events().registerBottomTabSelectedListener(
      _handleBottomTabSelectedListener,
    );

    return () => {
      componentListener.remove();
      bottomTabSelectedListener.remove();
      Linking.removeEventListener(linkingListner, _handleLinkingListner);
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        onLayout={e => {
          const layoutHeight = e.nativeEvent.layout.height;
          if (layoutHeight !== flatlistLayotHeight) {
            setFlatlistLayotHeight(layoutHeight);
          }
        }}
        pagingEnabled
        data={[0, 1]}
        horizontal
        onScrollBeginDrag={() => {
          _showBottomTabs();
        }}
        renderItem={() => {
          return (
            <FlatList
              nestedScrollEnabled
              style={{flex: 1, width, backgroundColor: 'black'}}
              data={[0, 1]}
              onScroll={e => {
                const currentVelocityY = e.nativeEvent.velocity.y;
                if (currentVelocityY < 0) {
                  _showBottomTabs();
                } else {
                  _hideBottomTabs();
                }
              }}
              pagingEnabled
              renderItem={({index, item}) => {
                return (
                  <View
                    style={{
                      flex: 1,
                      // height: '100%',
                      height: flatlistLayotHeight
                        ? flatlistLayotHeight
                        : windowHeight - 24,
                      backgroundColor: 'lightblue',
                      borderWidth: 2,
                      borderColor: 'red',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(30, screenHeight),
                        color: 'blue',
                        fontWeight: 'bold',
                      }}>
                      {index}
                      {focued ? 'FOCUSED' : 'OUT OF FOCUS'}
                    </Text>
                    <Button
                      title={'Push to profile'}
                      onPress={e => {
                        console.log(
                          'e.nativeEvent.pageX, e.nativeEvent.pageY',
                          e.nativeEvent.pageX,
                          e.nativeEvent.pageY,
                        );
                        Navigation.push(componentId, {
                          component: {
                            name: componentNames.Profile,
                          },
                        });
                      }}
                    />
                    <Button
                      title={'go to search'}
                      onPress={() => {
                        Navigation.mergeOptions(componentId, {
                          bottomTabs: {currentTabIndex: 1},
                        });
                      }}
                    />
                  </View>
                );
              }}
              keyExtractor={(item, index) => `${index}`}
            />
          );
        }}
        keyExtractor={(item, index) => `${index}`}
      />
    </SafeAreaView>
  );
};

export default HomeRoot;
