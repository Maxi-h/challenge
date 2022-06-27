// Vendor
import React from 'react';
import {NativeModules, StyleSheet} from 'react-native';
import colorSwatches from '../styles/colors';
import ButtonIcon from './ButtonIcon';

// Components
import Container from './Container';
import Text from './Typography/Text';
const {StatusBarManager} = NativeModules;

const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

export interface AppBarProps {
  title: string;
  onTap?: Function;
}

const AppBar = (props: AppBarProps): JSX.Element => {
  const {title, onTap} = props;
  return (
    <Container style={styles.styledHeader}>
      <Container style={styles.contents}>
        <ButtonIcon
          style={styles.styledButton}
          onTap={onTap}
          path={'../assets/images/menu.png'}
        />
        <Text style={styles.titleAppBar}>{title}</Text>
        <Container style={styles.empty} />
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  styledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 8,
  },
  styledHeader: {
    height: STATUSBAR_HEIGHT * 1.75,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colorSwatches.grayLight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 5,
    elevation: 2,
  },
  contents: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleAppBar: {
    fontSize: 20,
    fontWeight: '500',
  },
  empty: {
    width: 40,
  },
});
export default AppBar;
