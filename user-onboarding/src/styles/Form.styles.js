import styled from "styled-components";

export default styled.form`
	label,
	input[type="text"],
	input[type="email"],
	input[type="password"] {
		display: block;
	}

	.textBox,
	label,
	#submit {
		width: 100%;
	}

	.textBox {
		padding: 0.3rem 0;
		font-size: 1.05rem;

		border: 2px solid grey;
		border-radius: 5px;
	}

	label,
	#submit {
		font-size: 1.1rem;
		margin: 0 1rem;
	}

	#submit {
		font-size: 1.35rem;
		padding: 0.5rem 0;
		width: 100%;

		border-radius: 10px;
		border: none;
		background-color: royalblue;
		color: white;
	}

	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
	align-items: center;
	padding: 0.25rem 0.75rem;

	border: 2px solid black;
`;
