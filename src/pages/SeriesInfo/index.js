import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RiPencilLine } from 'react-icons/ri';

import api from '../../services/api';

import SeriesFormModal from '../../components/SeriesFormModal';

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
	const [genres, setGenres] = useState([]);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		async function fetchDatas() {
			const responseSerie = await api.get(`/series/${match.params.id}`);
			setSerie(responseSerie.data);


			const responseGenres = await api.get(`/genres`);
			const genresData = responseGenres.data.map(genre => ({
				value: genre.id,
				label: genre.name
			}));

			setGenres(genresData);
		}

		fetchDatas();
	}, [match]);

	function toggleModal(e) {
		e.preventDefault();
		setShowModal(!showModal);
	}

	const style = {
		backgroundImage: `url("${serie.background}")`
	}

	return (
		<SeriesInfoContainer>
			<Banner style={style}>
				<img src={serie.poster} alt={serie.name} />
			</Banner>
			<SeriesInfoContent>
				<ButtonEdit onClick={toggleModal}>
					<RiPencilLine size={25} />
				</ButtonEdit>

				<h1>{serie.name}</h1>

				<div id="tags">
					<Tag>{serie.genre}</Tag>
				</div>

				<p>{serie.comments}</p>
			</SeriesInfoContent>

			<SeriesFormModal
				edit={true}
				show={showModal}
				toggleShow={toggleModal}
				data={{
					...serie,
					genre: serie.genre,
					genres: genres
				}} />

			<Status type={serie.status}>{serie.status && serie.status.replace('-', ' ')}</Status>
		</SeriesInfoContainer>
	);
}

SeriesInfo.propTypes = {
	match: PropTypes.object.isRequired
}
