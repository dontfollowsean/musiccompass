// @flow

import React from 'react';
import YouTube from 'react-youtube';
import SearchBox from '../components/SearchBox';
import './Landing.css';
import '../utils/youtubePlayerApi';

const videoOptions = {
	playerVars: {
		list: 'PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI',
		iv_load_policy: '3',
		controls: '0',
		autoplay: '1'
	}
};

const Landing = () => (
	<div className="landing">
		<h1>Travel with music</h1>
		<h3>Create the local playlist of your dreams. Try it! </h3>
		<SearchBox />
		<div className="video_container">
			<YouTube opts={videoOptions} />
		</div>
	</div>
);

export default Landing;
