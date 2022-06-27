// Vendor
import React from 'react';
import {StyleSheet} from 'react-native';
// Colors
import colors from '../styles/colors';
import Button from './Button';

// Components
import Container from './Container';
import Text from './Typography/Text';

export interface MainCardProps {
  country: any;
  navigation?: any;
  onPress: () => void;
}

const MainCard = (props: MainCardProps): JSX.Element => {
  const {country, onPress} = props;
  return (
    <Container style={styles.container}>
      <Container style={styles.styledTextContainer}>
        <Text style={styles.styledFlat}>{country.emoji}</Text>
        <Text style={styles.styledName}>{country.name}</Text>
      </Container>
      <Button style={styles.styledbutton} label="Ver" onTap={onPress} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: colors.grayLight400,
    borderColor: colors.grayLight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadow: {
      shadowColor: 'grayLight400',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.4,
      shadowRadius: 2.0,
      elevation: 5,
    },
  },
  styledCardContainer: {
    height: 250,
    borderRadius: 10,
  },
  styledTextContainer: {
    height: 50,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  styledImage: {
    alignSelf: 'center',
    borderRadius: 25,
  },
  styledFlat: {
    fontSize: 18,
  },
  styledName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 5,
  },
  styledbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 70,
    marginVertical: 10,
    marginHorizontal: 0,
    borderRadius: 8,
    backgroundColor: colors.main,
  },
});
export default MainCard;
