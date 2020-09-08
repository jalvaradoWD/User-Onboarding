import React from "react";

import User from "./User";

const Users = ({ users }) => {
	return (
		<section>
			{users.map((user) => {
				return <User user={user} />;
			})}
		</section>
	);
};

export default Users;
