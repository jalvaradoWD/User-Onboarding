import React from "react";

import User from "./User";

const Users = ({ users }) => {
	return (
		<section>
			{users.map((user, index) => {
				return <User user={user} key={index} />;
			})}
		</section>
	);
};

export default Users;
