import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import SelectGenres from '../SelectGenres';

import { Modal } from './styles';

export default function SeriesFormModal({ data, show, toggleShow, edit = false }) {

	const [initialData, setInitialData] = useState(data);

	function setName(e) {
		const { value } = e.target;

		setInitialData({
			...initialData,
			name: value
		});
	}

	function setStatus(e) {
		const { value } = e.target;

		setInitialData({
			...initialData,
			status: value
		});
	}

	function setGenre(e) {
		const { value } = e.target;

		setInitialData({
			...initialData,
			status: value
		});
	}

	const options = [
		{ value: 'to-watch', label: 'to-watch' },
		{ value: 'watching', label: 'watching' },
		{ value: 'assisted', label: 'assisted' }
	];

	return (
		<Modal show={show}>
			<form>
				<input
					type="text"
					placeholder="name"
					value={initialData.name}
					onChange={setName}/>

				{ edit &&
					<Select
						name="status"
						className="basic-single"
						classNamePrefix="select"
						defaultValue={initialData.status}
						options={options}
						onChange={setStatus} />
				}

				<div id="select">
					<label>Genre</label>
					<SelectGenres
						defaultData={initialData.genre}
						data={initialData.genres}
						setData={setGenre} />
				</div>

				<div id="options">
					<button id="close" onClick={toggleShow}>fechar</button>
					<button id="save">salvar</button>
				</div>
			</form>
		</Modal>
	);
}

SeriesFormModal.propTypes = {
	data: PropTypes.object.isRequired,
	show: PropTypes.bool.isRequired,
	toggleShow: PropTypes.func.isRequired,
	edit: PropTypes.bool
};
