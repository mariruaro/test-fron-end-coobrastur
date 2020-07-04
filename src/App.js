import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './screens/Users/List';
import Register from './screens/Users/Register';

import './styles/index.scss';

function App() {
	return (
		<Router>
			<Route exact path="/" component={List} />
			<Route path="/cadastrar" component={Register} />
		</Router>
	);
}

export default App;
