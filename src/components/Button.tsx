// Vendor
import React from 'react';
import {TouchableOpacity, ViewStyle, TextStyle, StyleProp} from 'react-native';

// Components
import Text from './Typography/Text';

// Colors
import colors from '../styles/colors';

// Types/Interfaces
type Variants = 'default' | 'inverted' | 'disabled';

interface Props {
  iconSize?: number;
  variant?: Variants;
  disabled?: boolean;
  label?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  color?: string;
  backgroundColor?: string;
  onTap?: any;
}

// Default props
const defaultProps: Partial<Props> = {
  variant: 'default',
  disabled: false,
  label: '',
  style: {},
  labelStyle: {},
  onTap: undefined,
  color: colors.white,
  backgroundColor: colors.main,
};

const Button = ({
  disabled,
  label,
  color,
  style,
  labelStyle,
  onTap,
  ...rest
}: Props) => (
  <TouchableOpacity {...rest} disabled={disabled} style={style} onPress={onTap}>
    {Boolean(label) && (
      <Text color={color} style={labelStyle}>
        {label}
      </Text>
    )}
  </TouchableOpacity>
);

Button.defaultProps = defaultProps;

export default Button;
