import React from 'react';
import { FiPlus, FiTrash } from 'react-icons/fi';

import {
	GenresContainer,
	GenreList,
	ButtonDelete,
	ButtonCreate
} from './styles';

export default function Genres() {
	return (
		<GenresContainer>
			<h1>Genres</h1>
			<GenreList>
				<li>
					<strong>drama</strong>
					<ButtonDelete>
						<FiTrash size={20} />
					</ButtonDelete>
				</li>
				<li>
					<strong>drama</strong>
					<ButtonDelete>
						<FiTrash size={20} />
					</ButtonDelete>
				</li>
			</GenreList>

			<ButtonCreate>
				<FiPlus size={25} />
			</ButtonCreate>
		</GenresContainer>
	);
}
