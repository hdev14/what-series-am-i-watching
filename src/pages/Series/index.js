import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import EmptyCard from '../../components/EmptyCard';
import CardSeries from '../../components/CardSeries';
import SeriesFormModal from '../../components/SeriesFormModal';

import { ButtonCreate } from '../../styles/utils';
import { SeriesContainer } from './styles';

export default function Series() {
	const [showModal, setShowModal] = useState(false);

	function toogleModal(e) {
		e.preventDefault();
		setShowModal(!showModal);
	}

	return (
		<SeriesContainer>
			<h1>Series</h1>
			{/* <EmptyCard /> */}
			<CardSeries url="/series-info/1" />

			<ButtonCreate onClick={toogleModal}>
				<FiPlus size={25} />
			</ButtonCreate>

			<SeriesFormModal show={showModal} toogleShow={toogleModal} />
		</SeriesContainer>
	);
}
