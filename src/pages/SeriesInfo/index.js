import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RiPencilLine } from 'react-icons/ri';

import api from '../../services/api';

import {
	SeriesInfoContainer,
	Banner,
	SeriesInfoContent,
	Status,
	ButtonEdit,
	Tag
} from './styles';

export default function SeriesInfo({ match }) {
	const [serie, setSerie] = useState({});

	useEffect(() => {
		async function fetchSerie() {
			const response = await api.get(`/series/${match.params.id}`);

			setSerie({ ... response.data });
		}

		fetchSerie();
	}, []);

	const style = {
		backgroundImage: `url("${serie.background}")`
	}

	return (
		<SeriesInfoContainer>
			<Banner style={style}>
				<img src={serie.poster} title={serie.name} />
			</Banner>
			<SeriesInfoContent>
				<ButtonEdit>
					<RiPencilLine size={25} />
				</ButtonEdit>

				<h1>{serie.name}</h1>

				<div id="tags">
					<Tag>{serie.genre}</Tag>
				</div>

				<p>{serie.comments}</p>
			</SeriesInfoContent>

			<Status type={serie.status}>{serie.status && serie.status.replace('-', ' ')}</Status>
		</SeriesInfoContainer>
	);
}

SeriesInfo.propTypes = {
	match: PropTypes.object.isRequired
}
