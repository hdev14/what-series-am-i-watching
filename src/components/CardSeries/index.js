import React from 'react';
import PropTypes from 'prop-types';

import { Tag, Status } from '../../styles/utils';
import { Card } from './styles';

export default function CardSeries({ url, data }) {

	const style = {
		backgroundImage: `url("${data.background}")`
	}

	return (
		<Card to={url} style={style}>
			<div id="tags">
				<Tag>
					{data.genre}
				</Tag>
			</div>

			<h2>{data.name}</h2>

			<Status type={data.status}>
				{data.status.replace('-', ' ')}
			</Status>
		</Card>
	);
}

CardSeries.propTypes = {
	url: PropTypes.string,
	data: PropTypes.object
}
