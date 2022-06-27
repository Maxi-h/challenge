import React, {ReactNode} from 'react';
import {SafeAreaView, StyleProp, ViewStyle} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

// Types
interface Props {
  // Component content
  children: ReactNode;
  // Styles for the component
  style?: StyleProp<ViewStyle>;
}

// Default props
const defaultProps: Partial<Props> = {
  style: {},
};

const Screen = ({children, style, ...rest}: Props) => (
  <SafeAreaView {...rest} style={style}>
    {children}
  </SafeAreaView>
);

Screen.defaultProps = defaultProps;

export default Screen;
