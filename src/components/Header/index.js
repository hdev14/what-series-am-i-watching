import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FaBars, FaChevronLeft } from 'react-icons/fa';

import {
	HeaderContainer,
	Back,
	Brand,
	Option,
	ButtonOption
}  from './styles';

export default function Header({ back = '', series = false, genres = false }) {
	const [collapsed, setCollapsed] = useState(false);

	function toogleOption() {
		setCollapsed(!collapsed);
	}

	return (
		<HeaderContainer>
			<nav>
				<Back to={back}>
					<FaChevronLeft size={25} />
				</Back>

				<Brand>WSIW?</Brand>

				<ButtonOption onClick={toogleOption}>
					<FaBars size={25} />
				</ButtonOption>
			</nav>
			<Option collapse={collapsed}>
				<li>
					<Link to="/series">Series</Link>
				</li>
				<li>
					<Link to="/genres">Genres</Link>
				</li>
			</Option>
		</HeaderContainer>
	);
}

Header.propTypes = {
	back: PropTypes.string,
	series: PropTypes.bool,
	genres: PropTypes.bool
}
