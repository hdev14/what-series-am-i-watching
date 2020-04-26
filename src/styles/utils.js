import styled from 'styled-components';

export const Tag = styled.div`
	background-color: var(--wsiw-yellow);
	border-radius: 16px;
	color: black;
	margin: 5px;
	margin-left: 0;
	padding: 6px 24px;
	text-align: center;
	width: 120px;
`;

export const Status = styled.div`
	background-color: ${props => {
		switch(props.type) {
			case 'to-watch':
				return 'var(--wsiw-red)';
			case 'assisted':
				return 'var(--wsiw-yellow)';
			default:
				return 'var(--wsiw-green)';
		}
	}};

	color: black;
	padding: 5px 0;
	text-align: center;
	text-transform: uppercase;
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
