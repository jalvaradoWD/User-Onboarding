import React from "react";

const User = ({ user }) => {
	const { id, email, name, createdAt } = user;

	return (
		<div>
			<h2>
				{name} <span>{id}</span>
			</h2>
			<p>
				Created at <span>{createdAt}</span>
			</p>
			<p>{email}</p>
		</div>
	);
};

export default User;
