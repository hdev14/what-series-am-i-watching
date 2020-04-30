import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import api from '../../services/api';

import EmptyCard from '../../components/EmptyCard';
import CardSeries from '../../components/CardSeries';
import SeriesFormModal from '../../components/SeriesFormModal';
import SelectGenres from '../../components/SelectGenres';

import { ButtonCreate } from '../../styles/utils';
import { SeriesContainer } from './styles';

export default function Series() {

	const [series, setSeries] = useState([]);
	const [genres, setGenres] = useState([]);
	useEffect(() => {
		async function fecthData() {
			const response = await api.get('/series');
			setSeries(response.data);

			const responseGenres = await api.get(`/genres`);
			const genresData = responseGenres.data.map(genre => ({
				value: genre.id,
				label: genre.name
			}));

			setGenres(genresData);
		}

		fecthData();
	}, []);

	const [newSerie, setNewSerie] = useState({});
	async function handleSaveSerie(e) {
		e.preventDefault();
		const response = await api.post('/series', { ...newSerie, status: 'to-watch' });
		window.location.reload();
	}

	const [showModal, setShowModal] = useState(false);
	function toggleModal(e) {
		e.preventDefault();
		setShowModal(!showModal);
	}

	return (
		<SeriesContainer>
			<h1>Series</h1>

			{ series.lenght === 0
				? <EmptyCard onClick={toggleModal}/>
				: <>
					{series.map(serie => (
						<CardSeries
							key={serie.id}
							url={`/series-info/${serie.id}`}
							data={{
								genre: serie.genre,
								name: serie.name,
								background: serie.background,
								status: serie.status
							}} />
					))}
				</>
			}


			<ButtonCreate onClick={toggleModal}>
				<FiPlus size={25} />
			</ButtonCreate>

			<SeriesFormModal
				show={showModal}
				toggleShow={toggleModal}
				handleSaveData={handleSaveSerie} >

				<input
					type="text"
					placeholder="name"
					value={newSerie.name}
					onChange={(e) => {
						setNewSerie({ ...newSerie, name: e.target.value });
					}} />

				<div id="select">
					<label>Genre</label>
					<SelectGenres
						data={genres}
						setData={(item) => {
							setNewSerie({ ...newSerie, genre_id: item.value });
						}} />
				</div>

			</SeriesFormModal>
		</SeriesContainer>
	);
}
