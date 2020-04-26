import React from 'react';
import PropTypes from 'prop-types';

import { Tag, Status } from '../../styles/utils';
import { Card, TagCircle } from './styles';

export default function CardSeries({ url }) {

	const style = {
		backgroundImage: "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.__1JoNJMARGKhQ0xpTvdJgHaEK%26pid%3DApi&f=1')"
	}

	return (
		<Card to={url} style={style}>
			<div id="tags">
				<Tag>
					drama
				</Tag>
				<TagCircle>
					+3
				</TagCircle>
			</div>

			<h2>Mr. Robot</h2>

			<Status type={'to-watch'}>
				to watch
			</Status>
		</Card>
	);
}

CardSeries.propTypes = {
	url: PropTypes.string
}
