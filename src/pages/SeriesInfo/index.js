import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { RiPencilLine } from 'react-icons/ri';

import api from '../../services/api';

import SeriesFormModal from '../../components/SeriesFormModal';
import SelectGenres from '../../components/SelectGenres';

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

	async function handleSaveSerie(e) {
		e.preventDefault();
		await api.put(`/series/${serie.id}`, {
			id: serie.id,
			name: serie.name,
			comments: serie.comments,
			status: serie.status,
			genre_id: serie.genre_id,
		});
		window.location.reload();
	}

	const [showModal, setShowModal] = useState(false);
	function toggleModal(e) {
		e.preventDefault();
		setShowModal(!showModal);
	}

	const style = {
		backgroundImage: `url("${serie.background}")`
	}

	const statusOptions = [
		{ value: 'to-watch', label: 'to-watch' },
		{ value: 'watching', label: 'watching' },
		{ value: 'assisted', label: 'assisted' }
	];

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
				show={showModal}
				toggleShow={toggleModal}
				handleSaveData={handleSaveSerie} >
				<input
					type="text"
					placeholder="name"
					value={serie.name}
					onChange={(e) => {
						setSerie({
							...serie,
							name: e.target.value
						});
					}} />

				<Select
					name="status"
					className="basic-single"
				  classNamePrefix="select"
					options={statusOptions}
					placeholder="Select status"
					onChange={(item) => {
						setSerie({ ...serie, status: item.value });
					}} />

				<textarea
					placeholder="comments"
					value={serie.comments}
					onChange={(e) => {
						setSerie({
							...serie,
							comments: e.target.value
						});
					}} />

				<div id="select">
					<label>Genre</label>
					<SelectGenres
						data={genres}
						setData={(item) => {
							setSerie({ ...serie, genre_id: item.value });
						}} />
				</div>

			</SeriesFormModal>

			<Status type={serie.status}>
				{serie.status && serie.status.replace('-', ' ')}
			</Status>
		</SeriesInfoContainer>
	);
}

SeriesInfo.propTypes = {
	match: PropTypes.object.isRequired
}
