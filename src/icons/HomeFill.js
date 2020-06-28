import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeFill(props) {
  console.log(props, 'HOMEFILL');

  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </Svg>
  );
}

export default HomeFill;

HomeFill.options = {};
