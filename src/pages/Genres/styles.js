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


