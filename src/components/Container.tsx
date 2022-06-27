import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

// Types
interface Props {
  // Component content
  children: React.ReactNode;
  // Styles for the component
  style?: StyleProp<ViewStyle>;
}

// Default props
const defaultProps: Partial<Props> = {
  style: {
    padding: 15,
    backgroundColor: 'red',
  },
};

const Container = ({children, style}: Props) => {
  return <View style={style}>{children}</View>;
};

Container.defaultProps = defaultProps;

export default Container;
