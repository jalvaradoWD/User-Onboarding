import React from "react";
import UserStyles from "../styles/User.styles";

const User = ({ user }) => {
	const { id, email, name, createdAt } = user;

	return (
		<UserStyles>
			<h2>
				{name} <span>{id}</span>
			</h2>
			<p>
				Created at <span>{createdAt}</span>
			</p>
			<p>{email}</p>
		</UserStyles>
	);
};

export default User;
