import React from 'react';
import { FiPlus } from 'react-icons/fi';

import EmptyCard from '../../components/EmptyCard';
import CardSeries from '../../components/CardSeries';

import { ButtonCreate } from '../../styles/utils';
import { SeriesContainer } from './styles';

export default function Series() {
	return (
		<SeriesContainer>
			<h1>Series</h1>
			{/* <EmptyCard /> */}
			<CardSeries />

			<ButtonCreate>
				<FiPlus size={25} />
			</ButtonCreate>
		</SeriesContainer>
	);
}
