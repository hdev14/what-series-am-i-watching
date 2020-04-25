import React from 'react';

import EmptyCard from '../../components/EmptyCard';
import CardSeries from '../../components/CardSeries';

import { SeriesContainer } from './styles';

export default function Series() {
	return (
		<SeriesContainer>
			<h1>Series</h1>
			{/* <EmptyCard /> */}
			<CardSeries />
		</SeriesContainer>
	);
}
