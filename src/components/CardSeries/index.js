import React from 'react';

import { Card, Tag, TagCircle, Status } from './styles';

export default function CardSeries() {

	const style = {
		backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.__1JoNJMARGKhQ0xpTvdJgHaEK%26pid%3DApi&f=1")`
	}

	return (
		<Card style={style}>
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
