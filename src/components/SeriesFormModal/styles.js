import styled from 'styled-components';

export const Modal = styled.div`
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

	input, textarea {
		border-radius: 2.5px;
		border: none;
		margin: 5px 0;
		padding: 10px;
		text-transform: capitalize;
		width: 100%;
	}

	textarea {
		width: 100%;
		heigth: 100px;
	}


	div#select {
		border-top: 1px solid var(--wsiw-grey-normal);
		margin-top: 20px;
		padding-top: 20px;

		label {
			color: var(--wsiw-yellow);
		}
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
