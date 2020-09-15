import React, { useState } from "react";

import FormStyles from "../styles/Form.styles";

import axios from "axios";

const Form = ({ users, setUsers }) => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [terms, setTerms] = useState(false);

	const onChange = (e) => {
		e.preventDefault();

		const targetName = e.target.name;
		const value = e.target.value;

		setFormState({ ...formState, [targetName]: value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const userInfo = {
			...formState,
			terms,
		};

		axios.post("https://reqres.in/api/users", userInfo).then((res) => {
			setUsers([...users, res.data]);
		});
	};

	return (
		<FormStyles onSubmit={onSubmit}>
			<label htmlFor="name">
				Name
				<input
					className="textBox"
					onChange={onChange}
					type="text"
					id="name"
					name="name"
				/>
			</label>
			<label htmlFor="email">
				Email
				<input
					className="textBox"
					onChange={onChange}
					type="email"
					id="email"
					name="email"
				/>
			</label>
			<label htmlFor="password">
				Password
				<input
					className="textBox"
					onChange={onChange}
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

			<input id="submit" type="submit" value="Submit" />
		</FormStyles>
	);
};

export default Form;
