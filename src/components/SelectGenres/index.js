import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default function SelectGenres({ defaultData, data, setData }) {
	return (
		<Select
			defaultValue={defaultData}
			isMult
			name="genres"
			options={data}
			className="basic-multi-select"
			classNamePrefix="select" />
	);
}

SelectGenres.propTypes = {
	defaultData: PropTypes.arrayOf(PropTypes.string).isRequired,
	data: PropTypes.arrayOf(PropTypes.string).isRequired,
	setData: PropTypes.func.isRequired
}
