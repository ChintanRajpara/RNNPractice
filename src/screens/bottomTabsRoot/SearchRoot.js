import React from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {componentNames} from '../../navigation/componentNames';

const SearchRoot = props => {
  const {componentId} = props;

  return (
    <View style={{flex: 1, backgroundColor: 'lightgreen'}}>
      <Text>SearchRoot</Text>
      <Button
        title={'GlobalVideoRequestDetailContainer'}
        onPress={() => {
          Navigation.push(componentId, {
            component: {
              name: componentNames.GlobalVideoRequestDetail,
              options: {
                topBar: {
                  visible: false,
                  // hideOnScroll: true,
                  // drawBehind: true,
                  // background: {color: 'rgba(0,0,0,0.3)'},
                },
                bottomTabs: {visible: false},
              },
            },
          });
        }}
      />
    </View>
  );
};

export default SearchRoot;
