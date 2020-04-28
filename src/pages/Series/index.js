import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import api from '../../services/api';

import EmptyCard from '../../components/EmptyCard';
import CardSeries from '../../components/CardSeries';
import SeriesFormModal from '../../components/SeriesFormModal';

import { ButtonCreate } from '../../styles/utils';
import { SeriesContainer } from './styles';

export default function Series() {
	const [series, setSeries] = useState([]);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		async function fecthSeries() {
			const response = await api.get('/series');
			setSeries(response.data);

		}

		fecthSeries();

	}, []);

	function toggleModal(e) {
		e.preventDefault();
		setShowModal(!showModal);
	}

	return (
		<SeriesContainer>
			<h1>Series</h1>
			{/* */}

			{ series.lenght === 0
				? <EmptyCard />
				:
				<>
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

			<SeriesFormModal show={showModal} toggleShow={toggleModal} />
		</SeriesContainer>
	);
}
