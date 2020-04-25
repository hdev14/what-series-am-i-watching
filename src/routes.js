import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Series from './pages/Series';
import SeriesInfo from './pages/SeriesInfo';
import Genres from './pages/Genres';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Series} />
				<Route path="/series" component={Series} />
				<Route path="/series-info/:id" component={SeriesInfo} />
				<Route path="/genres" component={Genres} />
			</Switch>
		</BrowserRouter>
	);
}
