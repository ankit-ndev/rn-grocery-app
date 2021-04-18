import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/component/HomeScreen';

test('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});