// @flow

import React from 'react';
import YouTube from 'react-youtube';
import { setInterval } from 'timers';
import SearchBox from '../components/SearchBox';
import './Landing.css';

const videoOptions = {
	playerVars: {
		list: 'PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI',
		listType: 'playlist',
		iv_load_policy: '3',
		rel: '0',
		controls: '1',
		autoplay: '1',
		showinfo: 0,

	}
};

const onReady = event => {
	event.target.mute();
	event.target.cuePlaylist({
		listType: 'playlist',
		list: 'PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI',
		index: 0,
		startSeconds: 30,
		autoplay: 1,
	});
	event.target.playVideo();
};

const onPlay = event => {
	// TODO: make video visible on play
	event.target.setShuffle(true);
	setInterval(() => {
		event.target.nextVideo();
	}, 30000);
}; 

const onChange = () => {
	// TODO: when video cued, seekTo 60 seconds
}; 

const onError = err => {
	// TODO: display static image
	console.log(err);
}; 

const Landing = () => (
	<div className="landing">
		<h1>Travel with music</h1>
		<h3>Create the local playlist of your dreams. Try it! </h3>
		<SearchBox />
		<div className="video_container">
			<YouTube
				videoId="PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI"
				opts={videoOptions}
				onReady={onReady}
				onPlay={onPlay}
				onError={onError}
				onStateChange={onChange}
			/>
		</div>
	</div>
);

export default Landing;
