import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default function SelectGenres({ data, setData }) {
	return (
		<Select
			defaultValue={[]}
			isMult
			name="genres"
			options={data}
			className="basic-multi-select"
			classNamePrefix="select" />
	);
}

SelectGenres.propTypes = {
	data: PropTypes.arrayOf(PropTypes.string).isRequired,
	setData: PropTypes.func.isRequired
}
