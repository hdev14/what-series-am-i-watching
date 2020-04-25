import styled from 'styled-components';

export const Tag = styled.div`
	background-color: var(--wsiw-yellow);
	border-radius: 16px;
	color: black;
	margin-right: 5px;
	padding: 6px 24px;
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
