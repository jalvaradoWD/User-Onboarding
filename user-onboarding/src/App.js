import React, { useState } from "react";

import Form from "./components/Form";
import Users from "./components/Users";

import AppStyles from "./styles/App.styles";

const dummyData = [
	{
		name: "Jose Alvarado",
		email: "josealvarado1337@gmail.com",
		password: "123",
		terms: false,
		id: "testId",
		createdAt: "2020-09-08T22:40:13.296Z",
	},
	{
		name: "Jose Alvarado",
		email: "josealvarado1337@gmail.com",
		password: "123",
		terms: false,
		id: "testId",
		createdAt: "2020-09-08T22:40:13.296Z",
	},
];

function App() {
	const [users, setUsers] = useState(dummyData);

	return (
		<AppStyles>
			<h1>User Onboarding</h1>
			<Form setUsers={setUsers} users={users} />
			<Users users={users} />
		</AppStyles>
	);
}

export default App;
