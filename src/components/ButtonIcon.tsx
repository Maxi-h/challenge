// Vendor
import React from 'react';
import {
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleProp,
  Image,
} from 'react-native';

// Colors
import colors from '../styles/colors';

// Types/Interfaces
type Variants = 'default' | 'inverted' | 'disabled';

interface Props {
  iconSize?: number;
  variant?: Variants;
  disabled?: boolean;
  path: string;
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
  path: '',
  style: {},
  labelStyle: {},
  onTap: undefined,
  color: colors.white,
  iconSize: 30,
  backgroundColor: colors.main,
};

const ButtonIcon = ({
  disabled,
  path,
  style,
  iconSize,
  onTap,
  ...rest
}: Props) => (
  <TouchableOpacity {...rest} disabled={disabled} style={style} onPress={onTap}>
    {Boolean(path) && (
      <Image
        style={{width: iconSize, height: iconSize}}
        resizeMode="cover"
        source={require('../assets/images/menu.png')}
      />
    )}
  </TouchableOpacity>
);

ButtonIcon.defaultProps = defaultProps;

export default ButtonIcon;
