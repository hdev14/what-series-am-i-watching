import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import SelectGenres from '../SelectGenres';

import { Modal } from './styles';

export default function SeriesFormModal({ data = {}, show, toogleShow, edit = false }) {
	const [initialData, setInitialData] = useState({
		name: data.name,
		status: data.status,
		genres: data.genres
	});

	const options = [
		{ value: 'to-watch', label: 'to watch' },
		{ value: 'watching', label: 'watching' },
		{ value: 'assisted', label: 'assisted' }
	];

	return (
		<Modal show={show}>
			<form>
				<input type="text" placeholder="name" />

				{ edit &&
					<Select
						name="status"
						className="basic-single"
						classNamePrefix="select"
						defaultValue={initialData.status}
						options={options} />
				}

				<div id="select">
					<label>Genres</label>
					<SelectGenres
						defaultData={initialData.genres}
						data={[{ value: 'drama', label: 'drama'}]}
						setData={() => {}} />
				</div>

				<div id="options">
					<button id="close" onClick={toogleShow}>fechar</button>
					<button id="save">salvar</button>
				</div>
			</form>
		</Modal>
	);
}

SeriesFormModal.propTypes = {
	data: PropTypes.object,
	show: PropTypes.bool.isRequired,
	toogleShow: PropTypes.func.isRequired,
	edit: PropTypes.bool
};
