import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../containers/Landing';

test('renders without crashing', () => {
	const component = shallow(<Landing />);
	expect(component).toMatchSnapshot();
});
