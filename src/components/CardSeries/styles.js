import styled from 'styled-components';

export const Card = styled.div`
	background-color: var(--wsiw-grey-medium);
	background-size: 100% auto;
	border-radius: 15px;
	box-shadow: 1px 1px 50px rgba(0, 0, 0, .9) inset;
	display: flex;
	flex-direction: column;
	height: var(--size-15x);
	justify-content: space-between;
	object-fit: cover;
	overflow: hidden;
	position: relative;

	div#tags {
		align-items: center;
		align-self: flex-end;
		display: flex;
		justify-content: space-between;
		margin: 10px 10px 0;
	}

	h2 {
		margin-bottom: 10px;
		margin-left: 20px;
		text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.8);
	}

`;

export const TagCircle = styled.div`
	background-color: var(--wsiw-grey-intense);
	border-radius: 16px;
	color: var(--wsiw-yellow);
	padding: 6px 12px;
`;
