import React from 'react';
import {View, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDimensions} from '@react-native-community/hooks';
import Video from 'react-native-video';
const FullScreenPlayer = () => {
  const {height, width} = useDimensions().window;

  return (
    <View style={{flex: 1}}>
      <Video
        controls
        paused={true}
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          // "/storage/emulated/0/Download/y2mate.com - Akshay Kumar's awareness message for Coronavirus_lMr6TXWN5Pk_1080p.mp4",
        }}
        style={{
          // flex: 1,
          height,
          width,
          backgroundColor: 'orange',
          // borderWidth: 2,
          // borderColor: 'red',
        }}
        fullscreen
        // fullscreenOrientation="landscape"
        // fullscreenAutorotate
      />
    </View>
  );
};

export default FullScreenPlayer;

// FullScreenPlayer.options = {
//   statusBar: {visible: false},
//   navigationBar: {visible: false},
// };
