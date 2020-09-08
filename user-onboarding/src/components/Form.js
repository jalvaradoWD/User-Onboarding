import React, { useState } from "react";

import FormStyles from "../styles/Form.styles";

import axios from "axios";

const Form = ({ users, setUsers }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [terms, setTerms] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		const userInfo = {
			name,
			email,
			password,
			terms,
		};

		axios.post("https://reqres.in/api/users", userInfo).then((res) => {
			setUsers([...users, res.data]);
		});
	};

	const testFunc = (e) => {
		e.preventDefault();

		switch (e.target.name) {
			case "name":
				setName(e.target.value);
				break;
			case "email":
				setEmail(e.target.value);
				break;
			case "password":
				setPassword(e.target.value);
				break;
			default:
				break;
		}
	};

	return (
		<FormStyles onSubmit={onSubmit}>
			<label htmlFor="name">
				Name
				<input onChange={testFunc} type="text" id="name" name="name" />
			</label>
			<label htmlFor="email">
				Email
				<input onChange={testFunc} type="email" id="email" name="email" />
			</label>
			<label htmlFor="password">
				Password
				<input
					onChange={testFunc}
					type="password"
					id="password"
					name="password"
				/>
			</label>
			<label htmlFor="terms">
				<input
					checked={terms}
					onChange={(e) => setTerms(!terms)}
					type="checkbox"
					id="terms"
					name="terms"
				/>
				I agree to the Terms of Service
			</label>

			<input type="submit" value="Submit" />
		</FormStyles>
	);
};

export default Form;
