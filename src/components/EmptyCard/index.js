import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Card } from './styles';

export default function EmptyCard() {
	return (
		<Card>
			<FiPlus size={80} />
		</Card>
	)
}
