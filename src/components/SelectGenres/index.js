import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default function SelectGenres({ data, setData }) {
	return (
		<Select
			placeholder="Select genre"
			name="genres"
			options={data}
			className="basic-multi-select"
			classNamePrefix="select"
			onChange={setData} />
	);
}

SelectGenres.propTypes = {
	defaultData: PropTypes.object,
	data: PropTypes.arrayOf(PropTypes.object),
	setData: PropTypes.func.isRequired
}
