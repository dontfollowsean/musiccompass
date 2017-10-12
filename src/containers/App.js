// @flow

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import Landing from './Landing';
import './App.css';

const App = () => (
	<MuiThemeProvider>
		<div className="App">
			<Header />
			<Landing />
		</div>
	</MuiThemeProvider>
);

export default App;
