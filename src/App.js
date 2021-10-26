import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './Views/Dashboard';
import UserLandingPage from './Views/UserLanding';

// Router Config with Paths
const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/dashboard'>
					<Dashboard />
				</Route>
				<Route path='/'>
					<UserLandingPage />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
