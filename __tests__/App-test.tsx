/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ButtonIcon from '../src/components/ButtonIcon';

describe('ButtonIcon Component', () => {
  it('has path', () => {
    const component = renderer.create(<ButtonIcon />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // eslint-disable-next-line jest/no-identical-title
  it('has path', () => {
    const component = renderer.create(
      <ButtonIcon path={'../assets/images/menu.png'} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
