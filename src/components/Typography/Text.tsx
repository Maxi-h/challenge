// Vendor
import React from 'react';
import {StyleProp, Text as NativeText, TextStyle} from 'react-native';

// colors
import colors from '../../styles/colors';

// Types
export interface Props {
  italic?: boolean;
  bold?: boolean;
  mono?: boolean;
  opacity?: number;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
}

// Default props
const defaultProps: Partial<Props> = {
  italic: false,
  bold: false,
  mono: false,
  opacity: 1,
  style: {},
  color: colors.white,
};

const Text = ({children, style, ...rest}: Props) => (
  <NativeText {...rest} style={style}>
    {children}
  </NativeText>
);

Text.defaultProps = defaultProps;

export default Text;
