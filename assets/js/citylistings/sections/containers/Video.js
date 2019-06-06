import React, { Component } from 'react';
import VideoLayout from '../components/VideoLayout';
import VideoLeft from '../components/VideoLeft';
import VideoRight from '../components/VideoRight';

class Video extends Component {
	state = {};

	render() {
		return (
			<VideoLayout>
				<VideoLeft />
				<VideoRight />
			</VideoLayout>
		);
	}
}

export default Video;
