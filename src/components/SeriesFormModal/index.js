import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from './styles';

export default function SeriesFormModal({
	children,
	show,
	toggleShow,
	handleSaveData
}) {

	return (
		<Modal show={show}>
			<form>

				{children}

				<div id="options">
					<button id="close" onClick={toggleShow}>close</button>
					<button id="save" onClick={handleSaveData}>save</button>
				</div>
			</form>
		</Modal>
	);
}

SeriesFormModal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	show: PropTypes.bool.isRequired,
	toggleShow: PropTypes.func.isRequired,
	handleSaveData: PropTypes.func.isRequired
};
