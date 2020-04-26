import styled from 'styled-components';

export const GenresContainer = styled.div`
	padding: 30px;

	h1 {
		text-transform: uppercase;
		font-size: 1.3rem;
		margin-bottom: 10px;
	}
`;

export const GenreList = styled.ul`
	list-style: none;
	background-color: var(--wsiw-grey-medium);
	border-radius: 15px;

	li {
		display: flex;
		margin: 0 10px;
		align-items: center;
		justify-content: space-between;
		padding: 10px;

		& + li {
			border-top: 1px solid var(--wsiw-grey-normal);
		}

		strong {
			text-transform: capitalize;
		}
	}
`;

export const ButtonDelete = styled.button`
	background: none;
	border: none;
	color: var(--wsiw-red);
	padding: 10px;
`;

export const ButtonCreate = styled.button`
	background-color: var(--wsiw-grey-medium);
	border-radius: 50%;
	border: none;
	bottom: 30px;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
	color: var(--wsiw-yellow);
	height: 50px;
	padding: 10px;
	position: fixed;
	right: 30px;
	width: 50px;
`;
