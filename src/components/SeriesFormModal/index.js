import React from 'react';
import PropTypes from 'prop-types';

import SelectGenres from '../SelectGenres';

import { Modal } from './styles';

export default function SeriesFormModal({ show, toogleShow }) {

	return (
		<Modal show={show} onClick={toogleShow} >
			<form>
				<input type="text" placeholder="name" />

				<div id="select">
					<label forHtml="genre">Genres</label>
					<SelectGenres data={['drama']} setData={() => {}}/>
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
	show: PropTypes.bool.isRequired,
	toogleShow: PropTypes.func.isRequired
};
