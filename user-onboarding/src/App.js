import React, { useState } from "react";

import Form from "./components/Form";
import Users from "./components/Users";

import AppStyles from "./styles/App.styles";

function App() {
	const [users, setUsers] = useState([]);

	return (
		<AppStyles>
			<h1>User Onboarding</h1>
			<Form setUsers={setUsers} users={users} />
			<Users users={users} />
		</AppStyles>
	);
}

export default App;
