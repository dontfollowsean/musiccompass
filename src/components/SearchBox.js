// @flow

import React from 'react';
import TextField from 'material-ui/TextField';

const SearchBox = () => (
	<div className="search_box" alt="search box">
		<TextField hintText="Type song, artist, or city" />
		<i className="material-icons">search</i>
	</div>
);

export default SearchBox;
