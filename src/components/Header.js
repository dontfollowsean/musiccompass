// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
	title: {
		textAlign: 'left'
	}
};

const Header = () => (
	<header>
		<AppBar title="Music Compass" titleStyle={styles.title} />
	</header>
);

export default Header;
