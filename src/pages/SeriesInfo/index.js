import React from 'react';
import { RiPencilLine } from 'react-icons/ri';

import { Tag } from '../../styles/utils';
import {
	SeriesInfoContainer,
	Banner,
	SeriesInfoContent,
	Status,
	ButtonEdit
} from './styles';

export default function SeriesInfo() {
	const style = {
		backgroundImage: "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.__1JoNJMARGKhQ0xpTvdJgHaEK%26pid%3DApi&f=1')"
	}

	return (
		<SeriesInfoContainer>
			<Banner style={style}>
				<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Og1IuZqhXzffOsLzKLkBhAHaLH%26pid%3DApi&f=1" />
			</Banner>
			<SeriesInfoContent>
				<ButtonEdit>
					<RiPencilLine size={25} />
				</ButtonEdit>

				<h1>Mr. Robot</h1>

				<div id="tags">
					<Tag>drama</Tag>
					<Tag>drama</Tag>
					<Tag>drama</Tag>
					<Tag>drama</Tag>
				</div>

				<p>
					Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Pra lá , depois divoltis porris, paradis.
				</p>
			</SeriesInfoContent>

			<Status type="to-watch">to watch</Status>
		</SeriesInfoContainer>
	);
}
