import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../containers/App';

Enzyme.configure({ adapter: new Adapter() });
it('root renders App without crashing', () => {
	const root = document.createElement('root');
	ReactDOM.render(<App />, root);
});
