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

export const GenreFormModal = styled.div`
	display: ${props => props.show ? 'block' : 'none' };
	background-color: var(--wsiw-grey-medium);
	border-radius: 15px;
	box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
	left: 50%;
	padding: 30px 20px;
	position: fixed;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 300px;
	color: var(--wsiw-grey-intense);
	z-index: 10;

	input {
		border-radius: 2.5px;
		border: none;
		margin: 5px 0;
		padding: 10px;
		text-transform: capitalize;
		width: 100%;
	}

	div#options {
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;

		button {
			border-radius: 5px;
			border: none;
			font-weight: bold;
			margin-left: 10px;
			padding: 8px 20px;
			text-transform: uppercase;

			&#close {
				background-color: var(--wsiw-red);
			}

			&#save {
				background-color: var(--wsiw-green);
			}
		}
	}
`;
