import React from 'react';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom';
import {
	Login,
	MainApp,
	Register,
	IsiBorang,
	Logsheet,
	NotFound,
	Dashboard,
} from '../../pages/Pages';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="login" element={<Login />} />
				<Route exact path="register" element={<Register />} />
				<Route exact path="/" element={<MainApp />}>
					<Route index exact element={<Dashboard />} />
					<Route index exact path="dashboard" element={<Dashboard />} />
					<Route exact path="isi-borang" element={<IsiBorang />} />
					<Route exact path="logsheet" element={<Logsheet />} />
					<Route exact path="*" element={<NotFound />} />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
