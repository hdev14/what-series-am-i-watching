import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	background-color: var(--wsiw-grey-medium);
	padding: 10px 0;

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px;
	}
`;

export const Back = styled(Link)`
	svg {
		color: var(--wsiw-yellow);
	}
`;

export const Brand = styled.span`
	font-size: 1.5rem;
`;

export const Option = styled.ul`
	display: ${ props => props.collapse ? 'block' : 'none' };
	list-style: none;
	padding: 0 10px;

	li {
		margin: 10px 0;
		text-align: center;
		&:first-child {
			margin-top: 20px;
		}

		a {
			color: var(--wsiw-yellow);
			text-decoration: none;
		}
	}
`;

export const ButtonOption = styled.button`
	border: none;
	background: none;
	svg {
		color: var(--wsiw-yellow);
	}
`;


