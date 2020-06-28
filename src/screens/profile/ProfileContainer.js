import React from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {componentNames} from '../../navigation/componentNames';

const ProfileContainer = props => {
  const {componentId} = props;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 22, color: 'white'}}>ProfileContainer</Text>
      <Button
        title={'Push to profile'}
        onPress={() => {
          Navigation.push(componentId, {
            component: {
              name: componentNames.Profile,
            },
          });
        }}
      />
    </View>
  );
};

export default ProfileContainer;
