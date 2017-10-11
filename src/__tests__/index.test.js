import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';

it('root renders App without crashing', () => {
	const root = document.createElement('root');
	ReactDOM.render(<App />, root);
});
