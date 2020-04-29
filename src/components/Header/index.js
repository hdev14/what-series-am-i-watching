import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';

import {
	HeaderContainer,
	Brand,
	Option,
	ButtonOption
}  from './styles';

export default function Header() {
	const [collapsed, setCollapsed] = useState(false);

	function toogleOption() {
		setCollapsed(!collapsed);
	}

	return (
		<HeaderContainer>
			<nav>
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
