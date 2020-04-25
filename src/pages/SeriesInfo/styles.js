import styled from 'styled-components';
import { Status as StatusUtils, Tag as TagUtils } from '../../styles/utils';

export const SeriesInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

export const Banner = styled.div`
	background-repeat: no-repeat;
	background-size: auto 100%;
	background-size: auto;
	box-shadow: 1px 1px 100px rgba(0, 0, 0, 0.8) inset;
	display: flex;
	justify-content: center;
	object-fit: cover;
	padding: 20px;
	witdh: 100%;

	img {
		background-color: var(--wsiw-grey-medium);
		background-size: 200px auto;
		border-radius: 5px;
		border: 2px solid white;
		height: 200px;
		width: auto;
	}
`;

export const SeriesInfoContent = styled.div`
	flex: 1;
	padding: 30px;

	h1 {
		text-transform: uppercase;
		font-size: 1.5rem;
	}

	div#tags {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 20px;
	}
`;
export const Status = styled(StatusUtils)`
	bottom: 0;
	left: 0;
	position: sticky;
	width: 100%;
`;

export const Tag = styled(TagUtils)`
	background-color: var(--wsiw-grey-normal);
`;

export const ButtonEdit = styled.button`
	background: var(--wsiw-grey-medium);
	padding: 10px;
	border: none;
	position: fixed;
	right: 30px;
	bottom: 50px;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	color: var(--wsiw-yellow);
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
	z-index: 1;

`;
