import React, { useState, useEffect } from 'react';
import { FiPlus, FiTrash } from 'react-icons/fi';

import api from '../../services/api';

import { ButtonCreate } from '../../styles/utils';

import {
	GenresContainer,
	GenreList,
	ButtonDelete,
	GenreFormModal
} from './styles';

export default function Genres() {
	const [genres, setGenres] = useState([]);
	useEffect(() => {
		async function fetchGenres() {
			const response = await api.get('genres');
			setGenres(response.data);
		}

		fetchGenres();
	}, []);

	const [genreName, setGenreName] = useState('');
	async function handleSaveData(e) {
		e.preventDefault();
		await api.post('/genres', { name: genreName });
		window.location.reload();
	}

	async function deleteGenre(id) {
		const response = await api.delete(`/genres/${id}`);
		if (response.data.success) {
			const g = genres.filter(genre => genre.id !== id);
			setGenres(g);
		}
	}

	const [showModal, setShowModal] = useState(false);
	function toggleModal(e) {
		e.preventDefault();
		setShowModal(!showModal);
	}

	return (
		<GenresContainer>
			<h1>Genres</h1>
			<GenreList>
				{genres.map(genre => (
					<li key={genre.id}>
						<strong>{genre.name}</strong>
						<ButtonDelete onClick={() => deleteGenre(genre.id)}>
							<FiTrash size={20} />
						</ButtonDelete>
					</li>
				))}
			</GenreList>

			<ButtonCreate onClick={toggleModal}>
				<FiPlus size={25} />
			</ButtonCreate>

			<GenreFormModal show={showModal}>
				<form>
					<input
						type="text"
						placeholder="name"
						value={genreName}
						onChange={(e) => {
							setGenreName(e.target.value);
						}} />

					<div id="options">
						<button id="close" onClick={toggleModal}>close</button>
						<button id="save" onClick={handleSaveData}>save</button>
					</div>
				</form>
			</GenreFormModal>
		</GenresContainer>
	);
}
